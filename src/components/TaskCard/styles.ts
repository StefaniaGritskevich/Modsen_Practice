import styled from 'styled-components';

// export const TaskCardContainer = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   padding: 16px;
//   margin-bottom: 12px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   position: relative;
// `;

export const TaskCardContainer = styled.div<{ priority?: 'Low' | 'Medium' | 'High', isDragging?: boolean }>`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: grab;
  position: relative;
  opacity: ${props => props.isDragging ? 0.5 : 1};
  transform: ${props => props.isDragging ? 'scale(0.98)' : 'none'};
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:active {
    cursor: grabbing;
  }
`;

export const PriorityLabel = styled.span<{ priority: 'Low' | 'Medium' | 'High' }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  
  background-color: ${({ priority }) => 
    priority === 'High' 
      ? '#FFEBEE' 
      : priority === 'Medium' 
      ? '#FFF8E1' 
      : '#E8F5E9'};
  
  color: ${({ priority }) => 
    priority === 'High' 
      ? '#C62828' 
      : priority === 'Medium' 
      ? '#F57F17' 
      : '#2E7D32'};
`;

export const TaskTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const TaskDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
`;

export const EditInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const EditTextarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
`;

export const PrioritySelect = styled.select`
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;

  &:hover {
    background-color: #45a049;
  }
`;

export const NoPriorityOption = styled.option`
  color: #999;
  font-style: italic;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color:rgb(187, 39, 6);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;

  &:hover {
   background-color:rgba(187, 39, 6, 0.67);
  }
`;

