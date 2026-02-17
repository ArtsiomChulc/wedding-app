import { PropsWithChildren } from 'react';
import s from './TextBlock.module.css';

export default function TextBlock({children}: PropsWithChildren) {
    return (
        <div className={s.text_block}>
            {children}
        </div>
    );
};