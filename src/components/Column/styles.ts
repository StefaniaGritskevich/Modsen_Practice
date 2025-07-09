import styled from 'styled-components';
import { rgba } from 'polished';
import { ConnectDropTarget } from 'react-dnd';

export const ColumnContainer = styled.div<{ ref?: ConnectDropTarget }>`
  background-color: ${(props) => props.theme.colors.columnBackground};
  border-radius: ${(props) => props.theme.sizes.column.borderRadius};
  padding: ${(props) => props.theme.sizes.column.padding};
  width: ${(props) => props.theme.sizes.column.width};
  margin-right: ${(props) => props.theme.sizes.column.margin};
`;

export const DeleteColumnButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.deleteButton};
  cursor: pointer;
  font-size: ${(props) => props.theme.sizes.icon.small};
  margin-left: auto;
  padding: 0 8px;
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    color: ${(props) => props.theme.colors.deleteButtonHover};
  }
`;

export const ColumnTitle = styled.div<{ color: string }>`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 ${(props) => props.theme.sizes.gap} 0;
  color: ${(props) => props.theme.colors.buttonText};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.sizes.title.padding};
  border-radius: ${(props) => props.theme.sizes.title.borderRadius};
  background-color: ${(props) => props.color};
  font-family: ${(props) => props.theme.typography.button.fontFamily};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.theme.sizes.taskCounter.width};
    height: ${(props) => props.theme.sizes.taskCounter.height};
    background-color: ${(props) => props.theme.colors.taskCounterBg};
    color: ${(props) => rgba(props.color, 0.3)};
    border-radius: ${(props) => props.theme.sizes.taskCounter.borderRadius};
    margin-right: ${(props) => props.theme.sizes.gap};
    font-size: 14px;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddTaskButton = styled.button<{ color: string }>`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: ${(props) => rgba(props.color, 0.1)};
  border: none;
  border-radius: ${(props) => props.theme.sizes.form.borderRadiusFull};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: ${(props) => props.theme.transitions.default};
  letter-spacing: -0.5%;

  &:hover {
    background-color: ${(props) => props.theme.colors.addTaskButtonHover};
  }
`;

export const AddTaskButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.formBackground};
  border-radius: ${(props) => props.theme.sizes.borderRadius.large};
  padding: ${(props) => props.theme.sizes.padding.form};
  box-shadow: ${(props) => props.theme.shadows.small};
  position: relative;
`;

export const ColumnTitleInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.sizes.padding.input};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.sizes.title.borderRadius};
  font-size: ${(props) => props.theme.typography.input.fontSize};
  font-weight: 700;
  font-family: ${(props) => props.theme.typography.input.fontFamily};
  background-color: ${(props) => props.theme.colors.inputBackground};
  margin-bottom: ${(props) => props.theme.sizes.gap};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.inputFocusBorder};
  }
`;

export const ToggleTasksButton = styled.button<{ color: string }>`
  background: none;
  border: none;
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  padding: ${(props) => props.theme.sizes.padding.button};
  margin-top: ${(props) => props.theme.sizes.form.gapSmall};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: ${(props) => props.theme.sizes.form.borderRadiusFull};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    background-color: ${(props) => rgba(props.color, 0.1)};
  }
`;
