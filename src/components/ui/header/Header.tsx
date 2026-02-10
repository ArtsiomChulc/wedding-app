import s from './Header.module.css';
import Link from 'next/link';
import { paths } from '@/shared/paths/paths';

export default function Header() {
    return (
        <div className={s.header}>
            <div className={s.left_header}>
                <Link href={paths.weddings}>Свадьбы</Link>
                <Link href={paths.corporate_event}>Корпоративы</Link>
                <Link href={paths.other_event}>Другое</Link>
            </div>
            <div className={s.right_header}>
                <Link href={paths.agencies}>Агенствам</Link>
                <Link href={paths.contacts}>Контакты</Link>
            </div>
        </div>
    );
}
