import {useContext} from "react";
import {TodoContext} from "../context";

export const useTodos = () => {
    const context = useContext(TodoContext);

    if (!context)
        throw new Error("useTodos must be used inside TodoProvider");

    return context;
};