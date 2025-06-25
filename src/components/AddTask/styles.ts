import styled from 'styled-components';

export const AddTaskForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
`;

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const FormTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    color: #333;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;
    padding: 0;
    line-height: 1;
`;

export const PrioritySelect = styled.select`
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
`;

export const TaskTitleInput = styled.input`
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
`;

export const DescriptionTextarea = styled.textarea`
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    min-height: 60px;
    resize: vertical;
`;

export const SaveButton = styled.button`
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #45a049;
    }
`;