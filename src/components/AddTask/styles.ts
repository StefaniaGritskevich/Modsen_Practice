import styled, { css, DefaultTheme } from 'styled-components';

interface ThemeProps {
  theme: DefaultTheme;
}

const getSelectArrow = (color: string) =>
  `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='${encodeURIComponent(color)}' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`;

const buttonBaseStyles = ({ theme }: ThemeProps) => css`
  padding: ${theme.sizes.padding.av};
  border: none;
  border-radius: ${theme.sizes.radius.full};
  cursor: pointer;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semiBold};
  font-family: ${theme.typography.fontFamily};
  transition: ${theme.transitions.default};
  width: fit-content;

  &:active {
    transform: scale(${theme.sizes.components.transform});
  }
`;

export const AddTaskForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.spacing.lg};
    margin-top: ${theme.sizes.spacing.pt};
    margin-bottom: ${theme.sizes.spacing.pt};
    padding: ${theme.sizes.padding.full};
    background-color: ${theme.colors.formBackground};
    border-radius: ${theme.sizes.radius.lg};
    box-shadow: ${theme.shadows.medium};
  `}
`;

export const FormHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.sizes.spacing.xs};
  `}
`;

export const FormTitle = styled.h3`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semiBold};
    color: ${theme.colors.darkGray};
    font-family: ${theme.typography.fontFamily};
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${buttonBaseStyles({ theme })}
    background-color: transparent;
    color: ${theme.colors.slateGray};

    &:hover {
      background-color: ${theme.colors.danger};
      color: ${theme.colors.buttonText};
    }
  `}
`;

export const PrioritySelect = styled.select`
  ${({ theme }) => css`
    padding: ${theme.sizes.padding.sm};
    border: none;
    border-radius: ${theme.sizes.radius.full};
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.darkGray};
    background-color: ${theme.colors.priorityBg};
    cursor: pointer;
    width: ${theme.sizes.components.input};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    position: relative;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.colors.selectFocus};
    }

    background-image: ${getSelectArrow(theme.colors.selectArrow)};
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: ${theme.sizes.padding.smr};
  `}
`;

export const TaskTitleInput = styled.input`
  ${({ theme }) => css`
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.bold};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.darkGray};
    background-color: transparent;
    width: auto;
    max-width: 100%;
    display: inline-block;

    &::placeholder {
      color: ${theme.colors.placeholder};
    }

    &:focus {
      outline: none;
    }

    &:not(:placeholder-shown) {
      border-bottom: 1px solid transparent;
    }
  `}
`;

export const DescriptionTextarea = styled.textarea`
  ${({ theme }) => css`
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.regular};
    font-family: ${theme.typography.fontFamily};
    background-color: transparent;
    min-height: ${theme.sizes.components.columnThirty};
    resize: none;
    display: block;
    line-height: ${theme.sizes.components.line};

    &::placeholder {
      color: ${theme.colors.placeholder};
    }

    &:focus {
      outline: none;
    }

    &:not(:placeholder-shown) {
      border-bottom: 1px solid transparent;
    }
  `}
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    ${buttonBaseStyles({ theme })}
    background-color: transparent;
    color: ${theme.colors.slateGray};

    &:hover {
      background-color: ${theme.colors.success};
      color: ${theme.colors.buttonText};
    }
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.spacing.sm};
    margin-top: ${theme.sizes.spacing.sm};
  `}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    ${buttonBaseStyles({ theme })}
    background-color: transparent;
    color: ${theme.colors.slateGray};

    &:hover {
      background-color: ${theme.colors.danger};
      color: ${theme.colors.buttonText};
    }
  `}
`;