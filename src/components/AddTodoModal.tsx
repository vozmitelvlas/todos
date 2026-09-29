import {PrioritySelect} from "./PrioritySelect.tsx";
import type {Priority} from "../types";
import {Button} from "./Button.tsx";
import {Modal} from "./Modal.tsx";
import {useTodos} from "../hooks";

interface AddTodoModalProps {
    onClose: () => void;
}

export const AddTodoModal = ({onClose}: AddTodoModalProps) => {
    const {addTodo} = useTodos();

    const onSubmit = async (formData: FormData) => {
        const title = formData.get('title')?.toString().trim();
        const priority = formData.get('priority') as Priority;

        if (!title)
            return;

        await addTodo(title, priority);
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <form action={onSubmit} className="flex flex-col gap-4">
                <h2 className="text-xl">
                    Новая задача
                </h2>

                <input
                    name="title"
                    className="rounded-lg border p-2"
                    placeholder="Название задачи"
                />
                <PrioritySelect name="priority"/>

                <div className="flex justify-center gap-2">
                    <Button type="submit">Добавить</Button>
                    <Button type="button" onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    );
};