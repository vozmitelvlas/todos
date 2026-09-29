import type {ButtonHTMLAttributes} from 'react';
import type {IconType} from 'react-icons';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    size?: number;
}

export const Icon = ({icon: IconComponent, size = 24, className, ...buttonProps}: IconProps) => {
    return (
        <button
            type="button"
            className={`m-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${className ?? ''}`}
            {...buttonProps}
        >
            <IconComponent size={size}/>
        </button>
    );
};