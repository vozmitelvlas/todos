import type {Priority} from "../types";

interface PriorityFilterProps {
    value: Priority | 'all';
    onChange: (value: Priority | 'all') => void;
}

export const PriorityFilter = ({value, onChange}: PriorityFilterProps) => {
    return (
        <select
            value={value}
            className="rounded-lg border border-gray-300 px-2 py-1"
            onChange={event => onChange(event.target.value as Priority | 'all')}
        >
            <option value="all">Все</option>
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
        </select>
    );
};