import styled from 'styled-components';

export const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.gap};
  margin-top: 5px;
  margin-bottom: 5px;
  padding: ${(props) => props.theme.sizes.padding.form};
  background-color: ${(props) => props.theme.colors.formBackground};
  border-radius: ${(props) => props.theme.sizes.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.medium};
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.sizes.form.gapSmall};
`;

export const FormTitle = styled.h3`
  margin: 0;
  font-size: ${(props) => props.theme.typography.formTitle.fontSize};
  font-weight: ${(props) => props.theme.typography.formTitle.fontWeight};
  color: ${(props) => props.theme.colors.formTitle};
  font-family: ${(props) => props.theme.typography.formTitle.fontFamily};
`;

export const CloseButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  border: none;
  border-radius: ${(props) => props.theme.sizes.form.borderRadiusFull};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  width: fit-content;
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    background-color: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.buttonText};
  }

  &:active {
    transform: scale(0.98);
  }
`;
const getSelectArrow = (color: string) =>
  `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='${encodeURIComponent(color)}' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`;

export const PrioritySelect = styled.select`
  padding: ${(props) => props.theme.sizes.title.padding};
  border: none;
  border-radius: ${(props) => props.theme.sizes.form.borderRadiusFull};
  font-size: ${(props) => props.theme.typography.formText.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.formText.fontFamily};
  color: ${(props) => props.theme.colors.formText};
  background-color: ${(props) => props.theme.colors.priorityBg};
  cursor: pointer;
  width: ${(props) => props.theme.sizes.select};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  position: relative;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.selectFocus};
  }

  background-image: ${(props) =>
    getSelectArrow(props.theme.colors.selectArrow)};
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px 8px;
`;

export const TaskTitleInput = styled.input`
  padding: 0;
  border: none;
  border-radius: 0;
  font-size: ${(props) => props.theme.typography.formText.fontSize};
  font-weight: ${(props) => props.theme.typography.tittle.fontWeight};
  font-family: ${(props) => props.theme.typography.formText.fontFamily};
  color: ${(props) => props.theme.colors.formText};
  background-color: transparent;
  width: auto;
  max-width: 100%;
  display: inline-block;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  &:focus {
    outline: none;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid transparent;
  }
`;

export const DescriptionTextarea = styled.textarea`
  padding: 0;
  border: none;
  border-radius: 0;
  font-size: ${(props) => props.theme.typography.formText.fontSize};
  font-weight: ${(props) => props.theme.typography.formText.fontWeight};
  font-family: ${(props) => props.theme.typography.formText.fontFamily};
  background-color: transparent;
  min-height: 30px;
  resize: none;
  display: block;
  line-height: 1.6;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  &:focus {
    outline: none;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid transparent;
  }
`;

export const SaveButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  border: none;
  border-radius: ${(props) => props.theme.sizes.form.borderRadiusFull};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  width: fit-content;
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    background-color: ${(props) => props.theme.colors.success};
    color: ${(props) => props.theme.colors.buttonText};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.form.gapMedium};
  margin-top: ${(props) => props.theme.sizes.form.gapMedium};
`;

export const DeleteButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  border: none;
  border-radius: ${(props) => props.theme.sizes.form.borderRadiusFull};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  width: fit-content;
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    background-color: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.buttonText};
  }

  &:active {
    transform: scale(0.98);
  }
`;
