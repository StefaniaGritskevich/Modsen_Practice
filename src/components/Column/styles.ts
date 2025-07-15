import { rgba } from 'polished';
import { ConnectDropTarget } from 'react-dnd';
import styled, { css, DefaultTheme } from 'styled-components';

interface ThemeProps {
  theme: DefaultTheme;
}

interface ColorProps extends ThemeProps {
  color: string;
}

interface DropTargetProps {
  ref?: ConnectDropTarget;
}

export const ColumnContainer = styled.div<DropTargetProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.columnBackground};
    border-radius: ${theme.sizes.radius.xxl};
    padding: ${theme.sizes.spacing.lg};
    width: ${theme.sizes.components.column};
    margin-right: ${theme.sizes.spacing.lg};
  `}
`;

export const DeleteColumnButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.deleteButton};
    cursor: pointer;
    font-size: ${theme.sizes.icon.sm};
    margin-left: auto;
    padding: ${theme.sizes.padding.xxs};
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.deleteButtonHover};
    }
  `}
`;

export const ColumnTitle = styled.div<{ color: string }>`
  ${({ theme, color }) => css`
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.bold};
    margin: 0 0 ${theme.sizes.spacing.lg} 0;
    color: ${theme.colors.globalBackground};
    display: flex;
    align-items: center;
    padding: ${theme.sizes.padding.sm};
    border-radius: ${theme.sizes.radius.pill};
    background-color: ${color};
    font-family: ${theme.typography.fontFamily};

    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${theme.sizes.components.taskCount};
      height: ${theme.sizes.spacing.xxl};
      background-color: ${theme.colors.globalBackground};
      color: ${rgba(color, 0.3)};
      border-radius: ${theme.sizes.radius.full};
      margin-right: ${theme.sizes.spacing.lg};
      font-size: ${theme.typography.fontSize.sm};
    }
  `}
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddTaskButton = styled.button<{ color: string }>`
  ${({ theme, color }) => css`
    padding: ${theme.sizes.padding.av};
    background-color: ${rgba(color, 0.1)};
    border: none;
    border-radius: ${theme.sizes.radius.full};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-family: ${theme.typography.fontFamily};
    color: ${color};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: ${theme.transitions.default};
    letter-spacing: -0.5%;

    &:hover {
      background-color: ${theme.colors.addTaskButtonHover};
    }
  `}
`;

export const AddTaskButtonContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.formBackground};
    border-radius: ${theme.sizes.radius.lg};
    padding: ${theme.sizes.padding.full};
    box-shadow: ${theme.shadows.small};
    position: relative;
  `}
`;

export const ColumnTitleInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.sizes.padding.bta};
    border: 1px solid ${theme.colors.inputBorder};
    border-radius: ${theme.sizes.radius.pill};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.bold};
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.globalBackground};
    margin-bottom: ${theme.sizes.spacing.lg};

    &:focus {
      outline: none;
      border-color: ${theme.colors.inputFocusBorder};
    }
  `}
`;

export const ToggleTasksButton = styled.button<{ color: string }>`
  ${({ theme, color }) => css`
    background: none;
    border: none;
    color: ${color};
    cursor: pointer;
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semiBold};
    padding: ${theme.sizes.padding.av};
    margin-top: ${theme.sizes.spacing.xs};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: ${theme.sizes.radius.full};
    transition: ${theme.transitions.default};

    &:hover {
      background-color: ${rgba(color, 0.1)};
    }
  `}
`;