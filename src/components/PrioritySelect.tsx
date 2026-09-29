import type {SelectHTMLAttributes} from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const PrioritySelect = ({className, ...props}: SelectProps) => {
    return (
        <select
            className={`rounded-lg border border-gray-300 px-2 py-1 text-sm cursor-pointer ${className ?? ''}`}
            {...props}
        >
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
        </select>
    );
};