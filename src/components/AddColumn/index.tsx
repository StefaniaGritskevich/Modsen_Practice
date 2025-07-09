import React from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../store/kanbanSlice';
import { AddColumnButton } from './styles';
import { getRandomColor } from '../../utils/helperFuncs';

const AddColumn: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    dispatch(
      addColumn({
        title: 'New Column',
        color: getRandomColor(),
      }),
    );
  };

  return (
    <AddColumnButton onClick={handleAddColumn}>
      <svg viewBox="0 0 24 24">
        <path
          d="M12 4V20M4 12H20"
          stroke="#475569"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </AddColumnButton>
  );
};

export default AddColumn;
