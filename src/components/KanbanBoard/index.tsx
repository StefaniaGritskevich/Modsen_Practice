import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import Column from '../Column';
import styled from 'styled-components';
import { moveTask} from '../../store/kanbanSlice';

const BoardContainer = styled.div`
  display: flex;
  padding: 20px;
  overflow-x: auto;
  min-height: 80vh;
`;

export const KanbanBoard = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.kanban.columns);

  const handleMoveTask = (dragIndex: number, hoverIndex: number, sourceColumn: string, targetColumn: string) => {
    dispatch(moveTask({
      dragIndex,
      hoverIndex,
      sourceColumn,
      targetColumn
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <BoardContainer>
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            moveTask={handleMoveTask}
          />
        ))}
      </BoardContainer>
    </DndProvider>
  );
};

export default KanbanBoard;