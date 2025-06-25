import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ColumnContainer, ColumnTitle, TaskList, AddTaskButton, PlusIcon } from './styles';
import TaskCard from '../TaskCard';
import AddTask from '../AddTask';

interface ColumnProps {
    column: {
        id: string;
        title: string;
        color: string;
    };
};

const Column: React.FC<ColumnProps> = ({ column }) => {
    const [isAddingTask, setIsAddingTask] = useState(false);
    const tasks = useSelector((state: RootState) =>
        state.kanban.tasks.filter(task => task.columnId === column.id));

    const handleAddTaskClick = () => {
        setIsAddingTask(true);
    };

    const handleClose = () => {
        setIsAddingTask(false);
    };

    return (
        <ColumnContainer color={column.color}>
            <ColumnTitle>{column.title}</ColumnTitle>
            <TaskList>
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </TaskList>
            {isAddingTask ? (
                <AddTask columnId={column.id} onClose={handleClose} />
            ) : (
                <AddTaskButton onClick={handleAddTaskClick}>
                    <PlusIcon>+</PlusIcon>
                </AddTaskButton>
            )}
        </ColumnContainer>
    );
};

export default Column;