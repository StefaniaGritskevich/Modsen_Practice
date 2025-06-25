export type Priority = 'Low' | 'Medium' | 'High';

export interface Column {
    id: string;
    title:string;
    color: string;
};

export interface Task{
    id: string;
    columnId: string;
    title:string;
    description: string;
    priority?: string;
};

export interface Kanban{
    columns: Column[];
    tasks: Task[];
}