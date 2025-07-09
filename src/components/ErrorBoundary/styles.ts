import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.padding.form};
  background-color: ${({ theme }) => theme.colors.formBackground};
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.typography.formText.fontSize};
  margin-bottom: 1.5rem;
  line-height: 1.5;

  & strong {
    font-weight: ${({ theme }) => theme.typography.formTitle.fontWeight};
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: ${({ theme }) => theme.sizes.padding.button};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.3);
  }
`;
