import React, {useState} from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ColumnContainer, ColumnTitle, TaskList, AddTaskButton } from './styles';
import TaskCard from '../TaskCard';
import AddTask from '../AddTask';
import { ItemTypes } from '../../store/types';

interface ColumnProps {
  column: {
    id: string;
    title: string;
    color: string;
  };
  moveTask: (dragIndex: number, hoverIndex: number, sourceColumn: string, targetColumn: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, moveTask }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const tasks = useSelector((state: RootState) =>
    state.kanban.tasks.filter(task => task.columnId === column.id));

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: () => ({ columnId: column.id }),
  });

  return (
    <ColumnContainer ref={drop}>
      <ColumnTitle>
        <span>{tasks.length}</span> {column.title}
      </ColumnTitle>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            index={index}
            columnId={column.id}
            moveTask={moveTask}
          />
        ))}
      </TaskList>
      <AddTaskButton onClick={() => setIsAddingTask(true)}>+</AddTaskButton>
      {isAddingTask && (
        <AddTask 
          columnId={column.id} 
          onClose={() => setIsAddingTask(false)} 
        />
      )}
    </ColumnContainer>
  );
};

export default Column;