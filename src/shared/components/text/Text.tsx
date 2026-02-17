import { ElementType, ReactNode } from 'react';
import s from './Text.module.css';

interface TextProps<T extends ElementType> {
    as?: T;
    variant?:
        | 'lg_title'
        | 'md_title'
        | 'xl_title'
        | 'sm_title'
        | 'card_title'
        | 'description'
        | 'description_sm';
    children: ReactNode;
    className?: string;
}

export default function Text<T extends ElementType = 'p'>({
    as,
    variant = 'card_title',
    className,
    children,
    ...props
}: TextProps<T>) {
    const Component = as || 'p';

    const combinedClasses = [s.base, className, s[variant]]
        .filter(Boolean)
        .join(' ');

    return (
        <Component className={combinedClasses} {...props}>
            {children}
        </Component>
    );
}
