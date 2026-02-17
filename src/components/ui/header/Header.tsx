'use client';

import Link from 'next/link';
import { paths } from '@/shared/paths/paths';
import Button from '@/components/ui/butoon/Button';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/logo/Logo';
import s from './Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const headerClasses = `${s.header} ${isOpen ? s.open : ''}`;

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);


    return (
        <div className={s.header_container}>
            <Logo/>
            <div className={headerClasses}>
                <div className={s.left_header}>
                    <Link
                        href={paths.weddings}
                        className={`${pathname === paths.weddings ? s.active : ''}`}
                    >
                        Свадьбы
                    </Link>
                    <Link
                        href={paths['corporate-event']}
                        className={`${pathname === paths['corporate-event'] ? s.active : ''}`}
                    >
                        Корпоративы
                    </Link>
                    <Link
                        href={paths.other_event}
                        className={`${pathname === paths.other_event ? s.active : ''}`}
                    >
                        Другое
                    </Link>
                </div>
                <div className={s.right_header}>
                    <Link
                        href={paths.agencies}
                        className={`${pathname === paths.agencies ? s.active : ''}`}
                    >
                        Агенствам
                    </Link>
                    <Link
                        href={paths.contacts}
                        className={`${pathname === paths.contacts ? s.active : ''}`}
                    >
                        Контакты
                    </Link>
                </div>
            </div>

            <div id={s['menu-btn-container']}>
                <div id={s['menu-btn']}>
                    <input
                        type='checkbox'
                        id={s['menu-checkbox']}
                        checked={isOpen}
                        onChange={e => setIsOpen(e.target.checked)}
                    />
                    <label htmlFor={s['menu-checkbox']} id={s['menu-label']}>
                        <div id={s['menu-bar']}></div>
                    </label>
                </div>
            </div>

            <Button variants={'headerBtn'}>Обсудить мероприятие</Button>
        </div>
    );
}
