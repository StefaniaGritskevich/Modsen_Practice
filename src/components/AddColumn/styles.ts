import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;

  &:hover {
    background-color: #d0d0d0;
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 8px;
`;

export const ColorPicker = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 8px;
  cursor: pointer;
`;