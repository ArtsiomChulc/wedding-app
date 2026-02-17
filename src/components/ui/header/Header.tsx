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
            <Logo size={45}/>
            <div className={headerClasses}>
                <div className={s.right_header}>
                    <Link
                        href={paths.about}
                        className={`${pathname === paths.about ? s.active : ''}`}
                    >
                        Обо мне
                    </Link>
                    <Link
                        href={paths.services}
                        className={`${pathname === paths.services ? s.active : ''}`}
                    >
                        Услуги
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
