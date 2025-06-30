import styled from 'styled-components';

export const AddTaskForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 12px;
    background-color: white;
    border-radius: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`;

export const FormTitle = styled.h3`
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    font-family: 'Plus Jakarta Sans', sans-serif;
`;

export const CloseButton = styled.button`
     padding: 8px 16px;
    background-color: transparent;
    color: #475569;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-size: 14px;
    width: fit-content;
    font-weight: 500;
    font-family: 'Plus Jakarta Sans', sans-serif;
    transition: all 0.2s;
    
    &:hover {
        background-color: red;
        color: #ffffff;
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

export const PrioritySelect = styled.select`
  padding: 6px 12px;
  border: none;
  border-radius: 1234px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #000000;
  background-color: #EEF2FF;
  cursor: pointer;
  width: 120px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  position: relative;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #C7D2FE;
  }

  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23000000' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px 8px;
`;

export const TaskTitleInput = styled.input`
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #333;
    background-color: transparent;
    width: auto;
    max-width: 100%;
    display: inline-block;
    
    &::placeholder {
          color: #1E293B;
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
    font-size: 16px;
    font-weight: 400;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: transparent;
    min-height: 30px;
    resize: none;
    display: block;
    line-height: 1.6;
    
    &::placeholder {
        color: #1E293B;
    }
    
    &:focus {
        outline: none;
    }
    
    &:not(:placeholder-shown) {
        border-bottom: 1px solid transparent;
    }
`;

export const SaveButton = styled.button`
    padding: 8px 16px;
    background-color: transparent;
    color: #475569;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-size: 14px;
    width: fit-content;
    font-weight: 500;
    font-family: 'Plus Jakarta Sans', sans-serif;
    transition: all 0.2s;
    
    &:hover {
        background-color: #2563EB;
        color: #ffffff;
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: #475569;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  font-weight: 500;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.2s;
  
  &:hover {
    background-color: #EF4444;
    color: #ffffff;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;