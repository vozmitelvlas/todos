import {Button} from "./Button.tsx";
import {Modal} from "./Modal.tsx";

interface DeleteTodoModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

export const DeleteTodoModal = ({onClose, onConfirm}: DeleteTodoModalProps) => {
    return (
        <Modal onClose={onClose}>
            <form action={onConfirm}>
                <h2 className="text-xl">
                    Действительно хотите удалить задачу?
                </h2>

                <div className="flex justify-center gap-2">
                    <Button type="submit">Да</Button>
                    <Button type="button" onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    );
};