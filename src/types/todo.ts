export type Priority = 'high' | 'medium' | 'low'

export interface TodoProps {
    id: string,
    title: string,
    updatedAt: string,
    createdAt: string,
    priority: Priority,
    completed: boolean,
}