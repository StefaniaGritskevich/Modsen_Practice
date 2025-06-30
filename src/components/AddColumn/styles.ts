import styled from 'styled-components';

export const AddColumnContainer = styled.div`
  min-width: fit-content;
  
  align-self: flex-start;
`;
export const PlusIcon = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #475569;
`;

export const AddColumnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #94A3B8;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  background-color: #ffffff;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-1px);
    border-color: #94A3B8;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #475569;
  }
`;



export const AddColumnForm = styled.form`
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 280px;
  border: 1px solid #E2E8F0;
`;

export const ColumnTitleInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 12px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #94A3B8;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ColorLabel = styled.span`
  font-size: 14px;
  color: #64748B;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

export const ColorPickerInput = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.2s;
  flex: 1;

  &:hover {
    background-color: #4338CA;
  }
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #F1F5F9;
  color: #64748B;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.2s;
  flex: 1;

  &:hover {
    background-color: #E2E8F0;
  }
`;