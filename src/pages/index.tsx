import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import Column from '../components/Column';
import AddColumn from '../components/AddColumn';
import { moveTask } from '../store/kanbanSlice';
import {
  BoardContainer,
  BoardHeader,
  BoardTitle,
  ThemeToggleButton,
  ButtonContainer,
} from './styles';
import ErrorBoundary from '../components/ErrorBoundary';
import { useTheme } from '../components/ThemeContext/ThemeContext';

export const KanbanBoard = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.kanban.columns);
  const { isDarkTheme, toggleTheme } = useTheme();

  const handleMoveTask = (
    dragIndex: number,
    hoverIndex: number,
    sourceColumn: string,
    targetColumn: string,
  ) => {
    dispatch(
      moveTask({
        dragIndex,
        hoverIndex,
        sourceColumn,
        targetColumn,
      }),
    );
  };

  return (
    <ErrorBoundary>
      <div>
        <BoardHeader>
          <BoardTitle>Kanban Dashboard</BoardTitle>
          <ButtonContainer>
            <AddColumn />
            <ThemeToggleButton onClick={toggleTheme} isDark={isDarkTheme}>
              {isDarkTheme ? '☀️' : '🌙'}
            </ThemeToggleButton>
          </ButtonContainer>
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
    </ErrorBoundary>
  );
};

export default KanbanBoard;
