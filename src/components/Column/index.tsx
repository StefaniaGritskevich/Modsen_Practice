import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { ColumnContainer, ColumnTitle, TaskList, AddTaskButton, DeleteColumnButton, AddTaskButtonContainer } from './styles';
import TaskCard from '../TaskCard';
import AddTask from '../AddTask';
import { ItemTypes, DragItem } from '../../store/types'; // Добавляем импорт DragItem
import { deleteColumn } from '../../store/kanbanSlice';

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

  return (
    <ColumnContainer ref={drop}>
        <ColumnTitle color={column.color}>
            <span>{tasks.length}</span> {column.title}
            <DeleteColumnButton onClick={handleDeleteColumn}>×</DeleteColumnButton>
        </ColumnTitle>
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