import {AddTodoModal, Loader, PriorityFilter, Todo} from "./components";
import {Button} from "./components/Button.tsx";
import type {Priority} from "./types";
import {useTodos} from "./hooks";
import {useState} from "react";

function App() {
    const {todos, isLoading, error} = useTodos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tmpPriority, setTmpPriority] = useState<Priority | "all">("all");

    const filteredTodos =
        tmpPriority === 'all'
            ? todos
            : todos.filter(todo => todo.priority === tmpPriority);

    if (isLoading)
        return <Loader/>;

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="flex flex-col  items-center">
            <div className="flex gap-10">
                <Button onClick={() => setIsModalOpen(true)}>
                    Добавить
                </Button>

                <PriorityFilter
                    value={tmpPriority}
                    onChange={setTmpPriority}
                />
            </div>


            {filteredTodos.length === 0 ? (
                <p className="mt-5">
                    Задач не найдено
                </p>
            ) : (
                filteredTodos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))
            )}

            {isModalOpen && (
                <AddTodoModal onClose={() => setIsModalOpen(false)}/>
            )}
        </div>
    );
}

export default App;
