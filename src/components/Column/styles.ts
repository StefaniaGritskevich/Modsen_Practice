import styled from 'styled-components';

interface ColumnContainerProps {
  color: string;
}

export const ColumnContainer = styled.div<ColumnContainerProps>`
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 16px;
  min-width: 280px;
  margin-right: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

export const AddTaskButton = styled.button`
  background: transparent;
  border: 1px dashed #999;
  color: #666;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #666;
  }
`;