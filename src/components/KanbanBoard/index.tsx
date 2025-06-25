import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Column from '../Column';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  padding: 20px;
  overflow-x: auto;
  min-height: 80vh;
`;

export const KanbanBoard = () => {
  const columns = useSelector((state: RootState) => state.kanban.columns);

  return (
    <BoardContainer>
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </BoardContainer>
  );
};

export default KanbanBoard;