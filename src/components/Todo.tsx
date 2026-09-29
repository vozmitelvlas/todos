import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {DeleteTodoModal} from "./DeleteTodoModal.tsx";
import {PrioritySelect} from "./PrioritySelect.tsx";
import type {Priority, TodoProps} from "../types";
import {MdDeleteOutline} from "react-icons/md";
import {FiEdit3} from "react-icons/fi";
import {formatDate} from "../utils";
import {useTodos} from "../hooks";
import {Icon} from "./Icon.tsx";
import {Button} from "./Button.tsx";

const priorityColors = {
    high: 'bg-red-100',
    medium: 'bg-yellow-100',
    low: 'bg-green-100',
};

export const Todo = ({id, title, updatedAt, priority, completed}: TodoProps) => {
    const {updateTodo, deleteTodo} = useTodos();
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState({title, priority});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const onSave = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        await updateTodo(id, editValue);
        setIsEdit(false);
    };

    const onDelete = async () => {
        await deleteTodo(id);
        setIsDeleteModalOpen(false);
    };

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEditValue(prev => ({
            ...prev,
            title: event.target.value,
        }));
    };

    const onPriorityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setEditValue(prev => ({
            ...prev,
            priority: event.target.value as Priority,
        }));
    };

    return (
        <div className={`w-xl p-2 m-2 rounded-xl ${priorityColors[priority]}`}>
            <div className="flex justify-between min-w-0 items-center">
                {isEdit ? (
                    <form onSubmit={onSave} className="flex gap-2 flex-1">
                        <input
                            type="text"
                            value={editValue.title}
                            className="flex-1 min-w-0"
                            onChange={onTitleChange}
                        />
                        <PrioritySelect
                            value={editValue.priority}
                            onChange={onPriorityChange}
                        />

                        <Button type="submit">
                            Сохранить
                        </Button>
                    </form>
                ) : (
                    <div className="flex gap-2  min-w-0">
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => updateTodo(id, {completed: !completed})}
                        />
                        <p className={`truncate ${completed ? 'line-through' : ''}`}>
                            {title}
                        </p>
                    </div>
                )}
                <div className="flex shrink-0">
                    <Icon
                        size={24}
                        icon={FiEdit3}
                        disabled={completed}
                        onClick={() => setIsEdit(prev => !prev)}
                    />
                    <Icon
                        size={24}
                        icon={MdDeleteOutline}
                        onClick={() => setIsDeleteModalOpen(true)}
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <p className="text-xs text-gray-400">
                    {formatDate(new Date(updatedAt))}
                </p>
            </div>

            {isDeleteModalOpen &&
                <DeleteTodoModal
                    onConfirm={onDelete}
                    onClose={() => setIsDeleteModalOpen(false)}
                />
            }
        </div>
    );
};

