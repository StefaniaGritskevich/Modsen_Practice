import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PROTECTED_COLUMN_IDS } from '../constants';
import { Column, Kanban, Task } from '../types/types';

const initialState: Kanban = {
  columns: [
    { id: '1', title: 'To Do', color: '#4F46E5' },
    { id: '2', title: 'In Progress', color: '#F59E0B' },
    { id: '3', title: 'Done', color: '#22C55E' },
  ],
  tasks: [],
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask = {
        ...action.payload,
        id: crypto.randomUUID(),
      };
      state.tasks.push(newTask);
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    moveTask: (
      state,
      action: PayloadAction<{
        dragIndex: number;
        hoverIndex: number;
        sourceColumn: string;
        targetColumn: string;
      }>,
    ) => {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn } =
        action.payload;

      const sourceTasks = state.tasks
        .filter((task) => task.columnId === sourceColumn)
        .sort((a, b) => state.tasks.indexOf(a) - state.tasks.indexOf(b));

      const taskToMove = sourceTasks[dragIndex];
      if (!taskToMove) return;

      state.tasks = state.tasks.filter((task) => task.id !== taskToMove.id);

      const updatedTask = {
        ...taskToMove,
        columnId: targetColumn,
      };

      const targetTasks = state.tasks
        .filter((task) => task.columnId === targetColumn)
        .sort((a, b) => state.tasks.indexOf(a) - state.tasks.indexOf(b));

      let newPosition = 0;

      if (targetTasks.length > 0) {
        if (hoverIndex >= targetTasks.length) {
          const lastTask = targetTasks[targetTasks.length - 1];
          newPosition = state.tasks.indexOf(lastTask) + 1;
        } else {
          const taskAtPosition = targetTasks[hoverIndex];
          newPosition = state.tasks.indexOf(taskAtPosition);
        }
      } else {
        newPosition = state.tasks.length;
      }

      state.tasks.splice(newPosition, 0, updatedTask);
    },

    updateTask: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Task> }>,
    ) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) Object.assign(task, action.payload.updates);
    },

    addColumn: (
      state,
      action: PayloadAction<{ title: string; color: string }>,
    ) => {
      const newColumn = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        color: action.payload.color,
      };
      state.columns.push(newColumn);
    },

    deleteColumn: (state, action: PayloadAction<string>) => {
      if (PROTECTED_COLUMN_IDS.includes(action.payload)) {
        return;
      }
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload,
      );
      state.tasks = state.tasks.filter(
        (task) => task.columnId !== action.payload,
      );
    },
    updateColumn: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Column> }>,
    ) => {
      const column = state.columns.find((col) => col.id === action.payload.id);
      if (column) {
        Object.assign(column, action.payload.updates);
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  moveTask,
  updateTask,
  addColumn,
  deleteColumn,
  updateColumn,
} = kanbanSlice.actions;

export default kanbanSlice.reducer;
