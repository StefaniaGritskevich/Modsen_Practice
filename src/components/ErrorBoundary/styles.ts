import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.spacing.lg};
  background-color: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: ${({ theme }) => theme.sizes.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.small};
  max-width: ${({ theme }) => theme.sizes.components.column};
  margin: ${({ theme }) => theme.sizes.padding.bta};
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.sizes.padding.bta};

  & strong {
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    display: block;
    margin-bottom: ${({ theme }) => theme.sizes.padding.bta};
  }
`;

export const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: ${({ theme }) => theme.sizes.padding.av};
  border-radius: ${({ theme }) => theme.sizes.radius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerHover};
  }

  &:focus {
    outline: none;
  }
`;
