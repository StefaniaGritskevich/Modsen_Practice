import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { ColumnContainer, ColumnTitle, TaskList, AddTaskButton, DeleteColumnButton, AddTaskButtonContainer, ColumnTitleInput } from './styles';
import TaskCard from '../TaskCard';
import AddTask from '../AddTask';
import { ItemTypes, DragItem } from '../../store/types';
import { deleteColumn, updateColumn } from '../../store/kanbanSlice';

interface ColumnProps {
  column: {
    id: string;
    title: string;
    color: string;
  };
  moveTask: (dragIndex: number, hoverIndex: number, sourceColumn: string, targetColumn: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, moveTask }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const tasks = useSelector((state: RootState) =>
    state.kanban.tasks.filter(task => task.columnId === column.id));
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover: (item: DragItem, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;
      
      if (item.columnId !== column.id) {
        moveTask(item.index, 0, item.columnId, column.id);
        item.index = 0;
        item.columnId = column.id;
      }
    },
    drop: () => ({ columnId: column.id }),
  });

  const handleDeleteColumn = () => {
    if (window.confirm(`Delete column "${column.title}" and all its tasks?`)) {
      dispatch(deleteColumn(column.id));
    }
  };
   const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(column.title);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleTitleClick = () => {
    setIsEditing(true);
    setTimeout(() => titleInputRef.current?.focus(), 0);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    if (newTitle.trim() && newTitle !== column.title) {
      dispatch(updateColumn({ 
        id: column.id, 
        updates: { title: newTitle }
      }));
    } else {
      setNewTitle(column.title);
    }
  };

  return (
    <ColumnContainer ref={drop}>
      {isEditing ? (
        <ColumnTitleInput
          ref={titleInputRef}
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={(e) => e.key === 'Enter' && handleTitleBlur()}
        />
      ) : (
        <ColumnTitle 
          color={column.color} 
          onClick={handleTitleClick}
        >
          <span>{tasks.length}</span> {column.title}
          <DeleteColumnButton onClick={handleDeleteColumn}>×</DeleteColumnButton>
        </ColumnTitle>)}
      <TaskList>
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            index={index}
            columnId={column.id}
            moveTask={moveTask}
          />
        ))}
      </TaskList>
      <AddTaskButtonContainer>
        <AddTaskButton 
          onClick={() => setIsAddingTask(true)}
          color={column.color}
        >
          Add task...
        </AddTaskButton>
      </AddTaskButtonContainer>

      {isAddingTask && (
        <AddTask 
          columnId={column.id} 
          onClose={() => setIsAddingTask(false)} 
        />
      )}
    </ColumnContainer>
  );
};

export default Column;