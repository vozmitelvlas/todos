import type {TodoProps} from "../types";
import todos from '../data/db.json';
import {delay} from "../utils";

export const getTodos = async (): Promise<TodoProps[]> => {
    await delay(1000);
    return todos as TodoProps[];
};