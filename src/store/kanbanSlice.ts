import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Column, Kanban, Task } from './types';

const initialState:Kanban = {
    columns:[
        {id:'1', title: 'To Do', color:'#FFECCC'},
        {id:'2', title:'In Progress', color:'#CCE6FF'},
        { id: '3', title: 'Done', color: '#CCFFCC' },
    ],
    tasks:[],
};

const kanbanSlice = createSlice({
    name:'kanban',
    initialState,
    reducers:{
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
        action: PayloadAction<{ taskId: string; newColumnId: string }>) => {
        const task = state.tasks.find((t) => t.id === action.payload.taskId);
        if (task) task.columnId = action.payload.newColumnId;
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
    },
});

export const {
  addTask,
  deleteTask,
  moveTask,
  updateTask,
  addColumn,
  deleteColumn,
} = kanbanSlice.actions;

export default kanbanSlice.reducer;