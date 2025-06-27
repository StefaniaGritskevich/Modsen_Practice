import React, {useState} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../../store/kanbanSlice';
import { DragItem, ItemTypes } from '../../store/types';
import { Task } from '../../store/types';
import { 
  TaskCardContainer, 
  TaskTitle, 
  TaskDescription,
  PriorityLabel,
  EditForm,
  EditInput,
  EditTextarea,
  PrioritySelect,
  SaveButton,
  DeleteButton,
  NoPriorityOption
} from './styles';

interface TaskCardProps {
  task: Task;
  index: number;
  columnId: string;
  moveTask: (dragIndex: number, hoverIndex: number, sourceColumn: string, targetColumn: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index, columnId, moveTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority
  });
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { type: ItemTypes.TASK, id: task.id, index, columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover(item: DragItem, monitor) {
      if (!ref.current) return;
      
      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      if (dragIndex === hoverIndex && sourceColumn === targetColumn) return;

      moveTask(dragIndex, hoverIndex, sourceColumn, targetColumn);
      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });

  drag(drop(ref));

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateTask({
      id: task.id,
      updates: {
        title: editedTask.title,
        description: editedTask.description,
        priority: editedTask.priority || undefined
      }
    }));
    setIsEditing(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    dispatch(deleteTask(task.id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({
      ...prev,
      [name]: value === '' ? undefined : value
    }));
  };

  if (isEditing) {
    return (
      <EditForm onSubmit={handleSave}>
        <PrioritySelect
          name="priority"
          value={editedTask.priority || ''}
          onChange={handleChange}
        >
          <option value="">No priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </PrioritySelect>
        
        <EditInput
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleChange}
          required
        />
        
        <EditTextarea
          name="description"
          value={editedTask.description}
          onChange={handleChange}
        />
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <SaveButton type="submit">Save</SaveButton>
          <DeleteButton type="button" onClick={handleDelete}>Delete</DeleteButton>
        </div>
      </EditForm>
    );
  }

  return (
    <TaskCardContainer 
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={handleEditClick}
    >
      {task.priority && <PriorityLabel priority={task.priority}>{task.priority}</PriorityLabel>}
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskCardContainer>
  );
};

export default TaskCard;