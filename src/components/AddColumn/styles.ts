import styled, { css, DefaultTheme } from 'styled-components';
interface ThemeProps {
  theme: DefaultTheme;
}

const buttonBaseStyles = ({ theme }: ThemeProps) => css`
  padding: ${theme.sizes.padding.av};
  border: none;
  border-radius: ${theme.sizes.radius.md};
  cursor: pointer;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semiBold};
  font-family: ${theme.typography.fontFamily};
  transition: ${theme.transitions.default};
  flex: 1;
`;

export const AddColumnContainer = styled.div`
  min-width: fit-content;
  align-self: flex-start;
`;

export const PlusIcon = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.sizes.icon.sm};
    font-weight: bold;
    color: ${theme.colors.slateGray};
  `}
`;

export const AddColumnButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.sizes.components.columnForty};
    height: ${theme.sizes.components.columnForty};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.sizes.radius.full};
    cursor: pointer;
    transition: ${theme.transitions.default};
    box-shadow: ${theme.shadows.small};
    padding: 0;
    background-color: ${theme.colors.formBackground};

    &:hover {
      background-color: ${theme.colors.formBackground};
      transform: translateY(-1px);
      border-color: ${theme.colors.borderHover};
    }

    svg {
      width: ${theme.sizes.icon.md};
      height: ${theme.sizes.icon.md};
      fill: ${theme.colors.slateGray};
    }
  `}
`;

export const AddColumnForm = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.formBackground};
    padding: ${theme.sizes.padding.full};
    border-radius: ${theme.sizes.radius.lg};
    box-shadow: ${theme.shadows.medium};
    width: ${theme.sizes.components.column};
    border: 1px solid ${theme.colors.inputBorder};
  `}
`;

export const ColumnTitleInput = styled.input`
  ${({ theme }) => css`
    padding: ${theme.sizes.padding.bta};
    border: 1px solid ${theme.colors.inputBorder};
    border-radius: ${theme.sizes.radius.md};
    font-size: ${theme.typography.fontSize.sm};
    width: 100%;
    margin-bottom: ${theme.sizes.spacing.lg};
    font-family: ${theme.typography.fontFamily};
    transition: ${theme.transitions.default};

    &:focus {
      outline: none;
      border-color: ${theme.colors.inputFocusBorder};
      box-shadow: 0 0 0 2px ${theme.colors.inputFocusShadow};
    }
  `}
`;

export const ColorPickerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.spacing.lg};
    margin-bottom: ${theme.sizes.spacing.lg};
  `}
`;

export const ColorLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.slateGray};
    font-family: ${theme.typography.fontFamily};
  `}
`;

export const ColorPickerInput = styled.input`
  ${({ theme }) => css`
    width: ${theme.sizes.components.columnThirty};
    height: ${theme.sizes.components.columnThirty};
    border: none;
    border-radius: ${theme.sizes.radius.sm};
    cursor: pointer;
    padding: 0;
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.spacing.lg};
  `}
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    ${buttonBaseStyles}
    background-color: ${theme.colors.primary};
    color: ${theme.colors.buttonText};

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    ${buttonBaseStyles}
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.slateGray};

    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
  `}
`;