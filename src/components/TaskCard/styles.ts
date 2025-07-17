import styled, { css, DefaultTheme } from 'styled-components';

interface ThemeProps {
  theme: DefaultTheme;
}

interface PriorityProps extends ThemeProps {
  priority?: 'Low' | 'Medium' | 'High';
}

interface DraggableProps {
  isDragging?: boolean;
}

export const TaskCardContainer = styled.div<PriorityProps & DraggableProps>`
  ${({ theme, isDragging }) => css`
    background-color: ${theme.colors.globalBackground};
    border-radius: ${theme.sizes.radius.xxl};
    padding: ${theme.sizes.padding.full};
    margin-bottom: ${theme.sizes.padding.full};
    box-shadow: ${theme.shadows.small};
    cursor: grab;
    position: relative;
    opacity: ${isDragging ? 0.5 : 1};
    transform: ${isDragging ? 'scale(0.98)' : 'none'};
    transition: ${theme.transitions.default};

    &:active {
      cursor: grabbing;
    }
  `}
`;

export const PriorityLabel = styled.span<PriorityProps>`
  ${({ theme, priority }) => css`
    display: inline-block;
    padding: ${theme.sizes.padding.xs};
    border-radius: ${theme.sizes.radius.full};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: ${theme.sizes.spacing.sm};
    font-family: ${theme.typography.fontFamily};
    background-color: ${priority === 'High'
      ? theme.colors.priorityHighBg
      : priority === 'Medium'
      ? theme.colors.priorityMediumBg
      : theme.colors.priorityLowBg};
    color: ${priority === 'High'
      ? theme.colors.priorityHighText
      : priority === 'Medium'
      ? theme.colors.priorityMediumText
      : theme.colors.priorityLowText};
  `}
`;

export const TaskTitle = styled.h3`
  ${({ theme }) => css`
    margin: ${theme.sizes.padding.xxs};
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.taskTitle};
    font-family: ${theme.typography.fontFamily};
  `}
`;

export const TaskDescription = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.regular};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.slateGray};
    line-height: ${theme.sizes.components.line};
    letter-spacing: 0px;
  `}
`;

export const EditForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.spacing.lg};
    padding: ${theme.sizes.spacing.md};
    background-color: ${theme.colors.globalBackground};
    border-radius: ${theme.sizes.radius.xxl};
    box-shadow: ${theme.shadows.medium};
    width: 100%;
  `}
`;

export const EditInput = styled.input`
  ${({ theme }) => css`
    padding: ${theme.sizes.padding.sm};
    border: 1px solid ${theme.colors.inputBorder};
    border-radius: ${theme.sizes.radius.xs};
    font-size: ${theme.typography.fontSize.sm};
    font-family: ${theme.typography.fontFamily};
  `}
`;

export const EditTextarea = styled.textarea`
  ${({ theme }) => css`
    padding: ${theme.sizes.padding.sm};
    border: 1px solid ${theme.colors.inputBorder};
    border-radius: ${theme.sizes.radius.xs};
    font-size: ${theme.typography.fontSize.sm};
    min-height: ${theme.sizes.components.textarea};
    resize: vertical;
    font-family: ${theme.typography.fontFamily};
  `}
`;

export const PrioritySelect = styled.select`
  ${({ theme }) => css`
    padding: ${theme.sizes.padding.sm};
    border: 1px solid ${theme.colors.inputBorder};
    border-radius: ${theme.sizes.radius.xs};
    font-size: ${theme.typography.fontSize.sm};
    width: ${theme.sizes.components.input};
    font-family: ${theme.typography.fontFamily};
  `}
`;

const buttonBaseStyles = css<ThemeProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.padding.av};
    border: none;
    border-radius: ${theme.sizes.radius.sm};
    cursor: pointer;
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-family: ${theme.typography.fontFamily};
    align-self: flex-start;
  `}
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.saveButton};
    color: ${theme.colors.buttonText};

    &:hover {
      background-color: ${theme.colors.saveButtonHover};
    }
  `}
`;

export const NoPriorityOption = styled.option`
  ${({ theme }) => css`
    color: ${theme.colors.placeholder};
    font-style: italic;
  `}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.deleteButtonDanger};
    color: ${theme.colors.buttonText};

    &:hover {
      background-color: ${theme.colors.deleteButtonDangerHover};
    }
  `}
`;