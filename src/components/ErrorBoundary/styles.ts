import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fff5f5;
  border: 1px solid #ffcccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  
  & strong {
    font-weight: 600;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const RetryButton = styled.button`
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #b71c1c;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.3);
  }
`;