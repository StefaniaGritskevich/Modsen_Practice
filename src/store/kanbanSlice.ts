import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Column, Kanban, Task } from './types';

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
  }>
) => {
  const { dragIndex, hoverIndex, sourceColumn, targetColumn } = action.payload;
  
  // Находим задачу для перемещения по индексу и колонке
  const sourceTasks = state.tasks
    .filter(t => t.columnId === sourceColumn)
    .sort((a, b) => state.tasks.indexOf(a) - state.tasks.indexOf(b));
  
  const taskToMove = sourceTasks[dragIndex];
  if (!taskToMove) return;

  // Удаляем задачу из текущего положения
  state.tasks = state.tasks.filter(t => t.id !== taskToMove.id);

  // Обновляем колонку у перемещаемой задачи
  const updatedTask = {
    ...taskToMove,
    columnId: targetColumn
  };

  // Получаем все задачи целевой колонки
  const targetTasks = state.tasks
    .filter(t => t.columnId === targetColumn)
    .sort((a, b) => state.tasks.indexOf(a) - state.tasks.indexOf(b));

  // Определяем новую позицию
  let newPosition = 0;
  
  if (targetTasks.length > 0) {
    // Если в целевой колонке есть задачи
    if (hoverIndex >= targetTasks.length) {
      // Если перемещаем в конец
      const lastTask = targetTasks[targetTasks.length - 1];
      newPosition = state.tasks.indexOf(lastTask) + 1;
    } else {
      // Если перемещаем в середину
      const taskAtPosition = targetTasks[hoverIndex];
      newPosition = state.tasks.indexOf(taskAtPosition);
    }
  } else {
    // Если целевая колонка пустая, просто добавляем задачу
    newPosition = state.tasks.length;
  }

  // Вставляем задачу в новую позицию
  state.tasks.splice(newPosition, 0, updatedTask);
},
    
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Task> }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) Object.assign(task, action.payload.updates);
    },
    
    addColumn: (
      state,
      action: PayloadAction<{ title: string; color: string }>
    ) => {
      const newColumn = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        color: action.payload.color,
      };
      state.columns.push(newColumn);
    },
    
    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
      state.tasks = state.tasks.filter((task) => task.columnId !== action.payload);
    },
    updateColumn: (state, action: PayloadAction<{ id: string; updates: Partial<Column> }>) => {
  const column = state.columns.find(col => col.id === action.payload.id);
  if (column) {
    Object.assign(column, action.payload.updates);
  }
}
  },
});

export const {
  addTask,
  deleteTask,
  moveTask,
  updateTask,
  addColumn,
  deleteColumn,
  updateColumn
} = kanbanSlice.actions;

export default kanbanSlice.reducer;