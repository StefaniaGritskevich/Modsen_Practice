import styled from 'styled-components';

interface ColumnContainerProps {
  color: string;
}

export const PlusIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const AddTaskButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 8px;
    border-radius: 4px;
    cursor: pointer;
`;

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

// export const AddTaskButton = styled.button`
//   background: transparent;
//   border: 1px dashed #999;
//   color: #666;
//   width: 100%;
//   padding: 8px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background: rgba(255, 255, 255, 0.2);
//     border-color: #666;
//   }
// `;