import type {ReactNode} from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

export const Modal = ({children, onClose}: ModalProps) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
        >
            <div
                className="w-md rounded-xl bg-white p-5"
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};