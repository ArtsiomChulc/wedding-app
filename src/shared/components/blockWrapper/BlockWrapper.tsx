import { PropsWithChildren } from 'react';
import s from './BlockWrapper.module.css';

export default function BlockWrapper({children}: PropsWithChildren) {
    return (
        <div className={s.block_wrapper}>
            {children}
        </div>
    );
};