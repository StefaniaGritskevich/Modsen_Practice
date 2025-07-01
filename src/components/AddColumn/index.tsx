import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../store/kanbanSlice';
import { 
  AddColumnContainer,
  AddColumnButton,
  AddColumnForm,
  ColumnTitleInput,
  ColorPickerContainer,
  ColorLabel,
  ColorPickerInput,
  ButtonGroup,
  SaveButton,
  CancelButton,
  PlusIcon
} from './styles';

const AddColumn: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#4F46E5');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addColumn({ title, color }));
      setTitle('');
      setColor('#4F46E5');
      setIsAdding(false);
    }
  };

  return (
    <AddColumnContainer>
      {isAdding ? (
        <AddColumnForm onSubmit={handleSubmit}>
          <ColumnTitleInput
            autoFocus
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="Column title"
            required
          />
          <ColorPickerContainer>
            <ColorLabel>Color:</ColorLabel>
            <ColorPickerInput
              type="color"
              value={color}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
            />
          </ColorPickerContainer>
          <ButtonGroup>
            <SaveButton type="submit">Add Column</SaveButton>
            <CancelButton 
              type="button" 
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </CancelButton>
          </ButtonGroup>
        </AddColumnForm>
      ) : (
       <AddColumnButton onClick={() => setIsAdding(true)}>
        <svg viewBox="0 0 24 24">
            <path d="M12 4V20M4 12H20" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </AddColumnButton>
      )}
    </AddColumnContainer>
  );
};

export default AddColumn;