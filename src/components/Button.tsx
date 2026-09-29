import type {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button
            className={`rounded-lg bg-gray-200 px-4 py-2 cursor-pointer ${className ?? ''}`}
            {...props}
        >
            {children}
        </button>
    );
};