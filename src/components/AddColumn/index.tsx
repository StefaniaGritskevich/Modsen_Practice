import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../store/kanbanSlice';
import { Button, Input, ColorPicker } from './styles';

const AddColumn: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#FFFFFF');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title.trim()) {
      dispatch(addColumn({ title, color }));
      setTitle('');
      setColor('#FFFFFF');
      setIsAdding(false);
    }
  };

  return (
    <div style={{ minWidth: '280px', marginRight: '16px' }}>
      {isAdding ? (
        <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
          <Input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Column title"
          />
          <ColorPicker
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <Button onClick={handleSubmit}>Add Column</Button>
            <Button onClick={() => setIsAdding(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsAdding(true)}>+ Add Column</Button>
      )}
    </div>
  );
};

export default AddColumn;