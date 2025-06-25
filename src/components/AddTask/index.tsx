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
    const [priority, setPriority] = useState<Priority>('Medium');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch(addTask({
            columnId,
            title,
            description,
            priority
        }));

        setTitle('');
        setDescription('');
        setPriority('Medium');
        onClose();
    };

    return (
        <AddTaskForm onSubmit={handleSubmit}>
            <FormHeader>
                <FormTitle>Add New Task</FormTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
            </FormHeader>
            
            <PrioritySelect
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
            >
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