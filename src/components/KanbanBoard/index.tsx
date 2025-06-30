import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import Column from '../Column';
import AddColumn from '../AddColumn';
import styled from 'styled-components';
import { moveTask } from '../../store/kanbanSlice';

const BoardContainer = styled.div`
  display: flex;
  padding: 24px;
  gap: 16px;
  overflow-x: auto;
  min-height: calc(100vh - 100px);
  align-items: flex-start;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:35px;
  margin-bottom: 16px;
  background-color: #F8FAFC;
`;

const BoardTitle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #1e293b;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
`;

export const KanbanBoard = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.kanban.columns);
  const tasks = useSelector((state: RootState) => state.kanban.tasks);

  const handleMoveTask = (dragIndex: number, hoverIndex: number, sourceColumn: string, targetColumn: string) => {
    dispatch(moveTask({
      dragIndex,
      hoverIndex,
      sourceColumn,
      targetColumn
    }));
  };

  return (
    <div>
      <BoardHeader>
        <BoardTitle>Kanban Dashboard</BoardTitle>
        <AddColumn />
      </BoardHeader>
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
    </div>
  );
};

export default KanbanBoard;