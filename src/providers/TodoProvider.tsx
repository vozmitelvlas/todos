import {TodoContext} from "../context";
import {type PropsWithChildren, useCallback, useEffect, useState} from "react";
import type {Priority, TodoProps} from "../types";
import {getTodos} from "../api";

export const TodoProvider = ({children}: PropsWithChildren) => {
    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState<TodoProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getTodos()
            .then(todos => setTodos(todos))
            .catch(() => setError('Не удалось загрузить задачи'))
            .finally(() => setIsLoading(false));
    }, []);

    const addTodo = useCallback(async (title: string, priority: Priority): Promise<TodoProps> => {
        const newTodo: TodoProps = {
            id: crypto.randomUUID(),
            title,
            priority,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        return newTodo;
    }, []);

    const deleteTodo = useCallback(async (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    const updateTodo = useCallback(async (id: string, changes: Partial<TodoProps>) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    ...changes,
                    updatedAt: new Date().toISOString(),
                };
            }
            return todo;
        }));
    }, []);

    return <TodoContext value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        isLoading,
        error,
    }}>
        {children}
    </TodoContext>;
};