import styled from 'styled-components';

export const ColumnContainer = styled.div<{ ref?: any }>`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  width: 280px;
  margin-right: 16px;
`;

export const ColumnTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #333;
  display: flex;
  align-items: center;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 50%;
    margin-right: 8px;
    font-size: 14px;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddTaskButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d0d0d0;
  }
`;