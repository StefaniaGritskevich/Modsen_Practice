import styled from 'styled-components';
import { rgba } from 'polished';

export const ColumnContainer = styled.div<{ ref?: any }>`
  background-color: #F8FAFC;
  border-radius: 32px;
  padding: 16px;
  width: 280px;
  margin-right: 16px;
`;

export const DeleteColumnButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 18px;
  margin-left: auto;
  padding: 0 8px;

  &:hover {
    color: #ff0000;
  }
`;

export const ColumnTitle = styled.div<{ color: string }>`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 9999px;
  background-color: ${props => props.color};
  font-family: 'Plus Jakarta Sans', sans-serif;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 32px;
    background-color: #ffffff;
    color: ${props => rgba(props.color, 0.3)};
    border-radius: 1234px;
    margin-right: 8px;
    font-size: 14px;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddTaskButton = styled.button<{ color: string }>`
  
  padding: 8px;
  background-color: ${props => rgba(props.color, 0.1)};;
  border: none;
  border-radius: 1234px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: ${props => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: color 0.2s;
  letter-spacing: -0.5%;

  &:hover {
    background-color: transparent;
  }
`;

export const AddTaskButtonContainer = styled.div`
background-color: white;
  border-radius: 24px;
  padding: 12px;
  //margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ColumnTitleInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: white;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
    border-color: #94A3B8;
  }
`;

export const ToggleTasksButton = styled.button<{ color: string }>`
  background: none;
  border: none;
  color: ${props => props.color};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 8px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 9999px;

  &:hover {
    background-color: ${props => rgba(props.color, 0.1)};
  }
`;