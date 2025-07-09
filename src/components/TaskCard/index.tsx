import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../../store/kanbanSlice';
import { DragItem, ItemTypes } from '../../store/types';
import { Task } from '../../store/types';
import AddTask from '../AddTask'; // Импортируем компонент AddTask
import {
  TaskCardContainer,
  TaskTitle,
  TaskDescription,
  PriorityLabel,
} from './styles';

interface TaskCardProps {
  task: Task;
  index: number;
  columnId: string;
  moveTask: (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
  ) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  index,
  columnId,
  moveTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
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
    hover(item: DragItem) {
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

  const handleSave = (updatedTask: {
    title: string;
    description: string;
    priority?: 'Low' | 'Medium' | 'High';
  }) => {
    dispatch(
      updateTask({
        id: task.id,
        updates: {
          title: updatedTask.title,
          description: updatedTask.description,
          priority: updatedTask.priority,
        },
      }),
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditing = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <AddTask
        columnId={columnId}
        initialTask={{
          title: task.title,
          description: task.description,
          priority: task.priority,
        }}
        onSave={handleSave}
        onDelete={handleDelete}
        onClose={handleEditing}
        isEditMode={true}
      />
    );
  }

  return (
    <TaskCardContainer
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={handleEditClick}
    >
      {task.priority && (
        <PriorityLabel priority={task.priority}>{task.priority}</PriorityLabel>
      )}
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskCardContainer>
  );
};

export default TaskCard;
