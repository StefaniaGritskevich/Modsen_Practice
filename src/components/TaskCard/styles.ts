import styled from 'styled-components';

interface TaskCardProps {
  priority?: 'Low' | 'Medium' | 'High';
}

const priorityColors = {
  High: '#ffebee',
  Medium: '#fff8e1',
  Low: '#e8f5e9',
};

export const TaskCardContainer = styled.div<TaskCardProps>`
  background-color: ${props => 
    props.priority ? priorityColors[props.priority] : '#fff'};
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const TaskTitle = styled.h4`
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #333;
`;

export const TaskDescription = styled.p`
  font-size: 12px;
  margin: 0;
  color: #666;
`;