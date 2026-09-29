import {createContext} from "react";
import type {Priority, TodoProps} from "../types";

interface TodoPropsValue {
    todos: TodoProps[],
    error: string | null,
    deleteTodo: (id: string) => Promise<void>,
    addTodo: (title: string, priority: Priority) => Promise<TodoProps>,
    updateTodo: (id: string, changes: Partial<TodoProps>) => Promise<void>,
    isLoading: boolean,
}

export const TodoContext = createContext<TodoPropsValue | null>(null);