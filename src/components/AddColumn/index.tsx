import React from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../store/kanbanSlice';
import { AddColumnButton, PlusIcon } from './styles';

const AddColumn: React.FC = () => {
  const dispatch = useDispatch();

  const getRandomColor = () => 
    `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;

  const handleAddColumn = () => {
    dispatch(addColumn({ 
      title: 'New Column', 
      color: getRandomColor()
    }));
  };

  return (
    <AddColumnButton onClick={handleAddColumn}>
       <svg viewBox="0 0 24 24">
            <path d="M12 4V20M4 12H20" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </AddColumnButton>
  );
};

export default AddColumn;