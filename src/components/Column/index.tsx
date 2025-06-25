import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ColumnContainer, ColumnTitle, TaskList, AddTaskButton } from './styles';
import TaskCard from '../TaskCard';

interface ColumnProps{
    column:{
        id: string;
        title:string;
        color: string;
    }
};

const Column: React.FC<ColumnProps> = ({column}) =>{
    const tasks = useSelector((state: RootState) =>
    state.kanban.tasks.filter(task => task.columnId === column.id));

    return (
    <ColumnContainer color={column.color}>
      <ColumnTitle>{column.title}</ColumnTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TaskList>
      <AddTaskButton>+ Add task</AddTaskButton>
    </ColumnContainer>
  );
};

export default Column;