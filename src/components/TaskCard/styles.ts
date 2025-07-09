import styled from 'styled-components';

export const TaskCardContainer = styled.div<{
  priority?: 'Low' | 'Medium' | 'High';
  isDragging?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.taskCardBackground};
  border-radius: ${(props) => props.theme.sizes.taskCard.borderRadius};
  padding: ${(props) => props.theme.sizes.taskCard.padding};
  margin-bottom: ${(props) => props.theme.sizes.taskCard.marginBottom};
  box-shadow: ${(props) => props.theme.shadows.small};
  cursor: grab;
  position: relative;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  transform: ${(props) => (props.isDragging ? 'scale(0.98)' : 'none')};
  transition: ${(props) => props.theme.transitions.default};

  &:active {
    cursor: grabbing;
  }
`;

export const PriorityLabel = styled.span<{
  priority: 'Low' | 'Medium' | 'High';
}>`
  display: inline-block;
  padding: ${(props) => props.theme.sizes.priorityLabel.padding};
  border-radius: ${(props) => props.theme.sizes.priorityLabel.borderRadius};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.sizes.priorityLabel.marginBottom};
  font-family: ${(props) => props.theme.typography.button.fontFamily};

  background-color: ${({ priority, theme }) =>
    priority === 'High'
      ? theme.colors.priorityHighBg
      : priority === 'Medium'
        ? theme.colors.priorityMediumBg
        : theme.colors.priorityLowBg};

  color: ${({ priority, theme }) =>
    priority === 'High'
      ? theme.colors.priorityHighText
      : priority === 'Medium'
        ? theme.colors.priorityMediumText
        : theme.colors.priorityLowText};
`;

export const TaskTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: ${(props) => props.theme.typography.formText.fontSize};
  font-weight: 700;
  color: ${(props) => props.theme.colors.taskTitle};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
`;

export const TaskDescription = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.typography.formText.fontSize};
  font-weight: 400;
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  color: ${(props) => props.theme.colors.taskDescription};
  line-height: 1.6;
  letter-spacing: 0px;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.editForm.gap};
  padding: ${(props) => props.theme.sizes.editForm.padding};
  background-color: ${(props) => props.theme.colors.taskCardBackground};
  border-radius: ${(props) => props.theme.sizes.editForm.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.medium};
  width: 100%;
`;

export const EditInput = styled.input`
  padding: ${(props) => props.theme.sizes.input.padding};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.sizes.input.borderRadius};
  font-size: ${(props) => props.theme.typography.input.fontSize};
  font-family: ${(props) => props.theme.typography.input.fontFamily};
`;

export const EditTextarea = styled.textarea`
  padding: ${(props) => props.theme.sizes.input.padding};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.sizes.input.borderRadius};
  font-size: ${(props) => props.theme.typography.input.fontSize};
  min-height: ${(props) => props.theme.sizes.textarea.minHeight};
  resize: vertical;
  font-family: ${(props) => props.theme.typography.input.fontFamily};
`;

export const PrioritySelect = styled.select`
  padding: ${(props) => props.theme.sizes.input.padding};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.sizes.input.borderRadius};
  font-size: ${(props) => props.theme.typography.input.fontSize};
  width: ${(props) => props.theme.sizes.select.width};
  font-family: ${(props) => props.theme.typography.input.fontFamily};
`;

export const SaveButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: ${(props) => props.theme.colors.saveButton};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius.small};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => props.theme.colors.saveButtonHover};
  }
`;

export const NoPriorityOption = styled.option`
  color: ${(props) => props.theme.colors.placeholder};
  font-style: italic;
`;

export const DeleteButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: ${(props) => props.theme.colors.deleteButtonDanger};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius.small};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => props.theme.colors.deleteButtonDangerHover};
  }
`;
