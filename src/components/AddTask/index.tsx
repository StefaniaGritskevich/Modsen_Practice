import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/kanbanSlice';
import { Priority } from '../../store/types';
import ErrorBoundary from '../ErrorBoundary';
import {
  AddTaskForm,
  PrioritySelect,
  TaskTitleInput,
  DescriptionTextarea,
  SaveButton,
  DeleteButton,
  ButtonGroup,
} from './styles';

interface AddTaskProps {
  columnId: string;
  initialTask?: {
    title: string;
    description: string;
    priority?: Priority;
  };
  onSave?: (task: {
    title: string;
    description: string;
    priority?: Priority;
  }) => void;
  onDelete?: () => void;
  onClose: () => void;
  isEditMode?: boolean;
}

const AddTask: React.FC<AddTaskProps> = ({
  columnId,
  initialTask,
  onSave,
  onDelete,
  onClose,
  isEditMode = false,
}) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(
    initialTask?.description || '',
  );
  const [priority, setPriority] = useState<Priority | undefined>(
    initialTask?.priority,
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (isEditMode && onSave) {
      onSave({ title, description, priority });
    } else {
      dispatch(
        addTask({
          columnId,
          title,
          description,
          priority: priority || undefined,
        }),
      );
      onClose();
    }
  };
  const handlePriorityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPriority(e.target.value ? (e.target.value as Priority) : undefined);
    },
    [],
  );
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [],
  );
  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    [],
  );

  return (
    <ErrorBoundary>
      <AddTaskForm onSubmit={handleSubmit}>
        <PrioritySelect value={priority || ''} onChange={handlePriorityChange}>
          <option value="">No priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </PrioritySelect>

        <TaskTitleInput
          type="text"
          placeholder="Task title"
          value={title}
          onChange={handleTitleChange}
          required
        />

        <DescriptionTextarea
          placeholder="Add description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <ButtonGroup>
          <SaveButton type="submit">Save</SaveButton>
          {isEditMode && onDelete && (
            <DeleteButton type="button" onClick={onDelete}>
              Delete
            </DeleteButton>
          )}
          {!isEditMode && (
            <DeleteButton type="button" onClick={onClose}>
              Cancel
            </DeleteButton>
          )}
        </ButtonGroup>
      </AddTaskForm>
    </ErrorBoundary>
  );
};

export default AddTask;
