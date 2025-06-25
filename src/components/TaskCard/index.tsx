import React from 'react';
import { TaskCardContainer, TaskTitle, TaskDescription } from './styles';

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description: string;
    priority?: 'Low' | 'Medium' | 'High';
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const priority = 
    task.priority === 'Low' || 
    task.priority === 'Medium' || 
    task.priority === 'High' 
      ? task.priority 
      : undefined;
  return (
    <TaskCardContainer priority={priority}>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskCardContainer>
  );
};

export default TaskCard;