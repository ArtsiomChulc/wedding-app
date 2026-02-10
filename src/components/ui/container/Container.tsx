import { PropsWithChildren } from 'react';
import s from './Container.module.css';


export default function Container({children}: PropsWithChildren) {
    return <div className={s.container}>{children}</div>;
};