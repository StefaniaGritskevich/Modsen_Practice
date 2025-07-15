export type Priority = 'Low' | 'Medium' | 'High';

export interface Column {
  id: string;
  title: string;
  color: string;
}

export interface Task {
  id: string;
  columnId: string;
  title: string;
  description: string;
  priority?: Priority;
}

export interface Kanban {
  columns: Column[];
  tasks: Task[];
}

export interface DragItem {
  type: string;
  id: string;
  columnId: string;
  index: number;
}

export interface DragItem {
  type: string;
  id: string;
  index: number;
  columnId: string;
}

export const ItemTypes = {
  TASK: 'task',
} as const;
