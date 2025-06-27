import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/kanbanSlice';
import { Priority } from '../../store/types';
import {
    AddTaskForm,
    FormTitle,
    PrioritySelect,
    TaskTitleInput,
    DescriptionTextarea,
    SaveButton,
    FormHeader,
    CloseButton
} from './styles';

interface AddTaskProps {
    columnId: string;
    onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ columnId, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority | undefined>(undefined); // Изменено на необязательное значение
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch(addTask({
            columnId,
            title,
            description,
            priority: priority || undefined // Если priority не выбран, отправим undefined
        }));

        setTitle('');
        setDescription('');
        setPriority(undefined); // Сбрасываем на undefined
        onClose();
    };

    return (
        <AddTaskForm onSubmit={handleSubmit}>
            <FormHeader>
                <FormTitle>Add New Task</FormTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
            </FormHeader>
            
            <PrioritySelect
                value={priority || ''} // Пустое значение, если priority не выбран
                onChange={(e) => setPriority(e.target.value ? e.target.value as Priority : undefined)}
            >
                <option value="">No priority</option> {/* Добавлен вариант без приоритета */}
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </PrioritySelect>
            
            <TaskTitleInput
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            
            <DescriptionTextarea
                placeholder="Add description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            
            <SaveButton type="submit">Save</SaveButton>
        </AddTaskForm>
    );
};

export default AddTask;