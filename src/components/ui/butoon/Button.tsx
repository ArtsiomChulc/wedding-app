import { ComponentPropsWithoutRef } from 'react';
import s from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variants?: 'headerBtn' | 'contentBtn';
}

export default function Button({
    children,
    className,
    variants = 'contentBtn',
    ...props
}: ButtonProps) {
    const combinedClassName = [s.button, s[variants], className]
        .filter(Boolean)
        .join(' ');
    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
