import styled from 'styled-components';

export const AddColumnContainer = styled.div`
  min-width: fit-content;
  align-self: flex-start;
`;

export const PlusIcon = styled.span`
  font-size: ${(props) => props.theme.sizes.icon.small};
  font-weight: bold;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const AddColumnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius.circle};
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.default};
  box-shadow: ${(props) => props.theme.shadows.small};
  padding: 0;
  background-color: ${(props) => props.theme.colors.formBackground};

  &:hover {
    background-color: ${(props) => props.theme.colors.formBackground};
    transform: translateY(-1px);
    border-color: ${(props) => props.theme.colors.borderHover};
  }

  svg {
    width: ${(props) => props.theme.sizes.icon.medium};
    height: ${(props) => props.theme.sizes.icon.medium};
    fill: ${(props) => props.theme.colors.textSecondary};
  }
`;

export const AddColumnForm = styled.form`
  background: ${(props) => props.theme.colors.formBackground};
  padding: ${(props) => props.theme.sizes.padding.form};
  border-radius: ${(props) => props.theme.sizes.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.medium};
  width: 280px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
`;

export const ColumnTitleInput = styled.input`
  padding: ${(props) => props.theme.sizes.padding.input};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.sizes.borderRadius.medium};
  font-size: ${(props) => props.theme.typography.input.fontSize};
  width: 100%;
  margin-bottom: ${(props) => props.theme.sizes.gap};
  font-family: ${(props) => props.theme.typography.input.fontFamily};
  transition: ${(props) => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.inputFocusBorder};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.inputFocusShadow};
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes.gap};
  margin-bottom: ${(props) => props.theme.sizes.gap};
`;

export const ColorLabel = styled.span`
  font-size: ${(props) => props.theme.typography.label.fontSize};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.typography.label.fontFamily};
`;

export const ColorPickerInput = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius.small};
  cursor: pointer;
  padding: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes.gap};
`;

export const SaveButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius.medium};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  transition: ${(props) => props.theme.transitions.default};
  flex: 1;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const CancelButton = styled.button`
  padding: ${(props) => props.theme.sizes.padding.button};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textSecondary};
  border: none;
  border-radius: ${(props) => props.theme.sizes.borderRadius.medium};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  transition: ${(props) => props.theme.transitions.default};
  flex: 1;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
  }
`;
