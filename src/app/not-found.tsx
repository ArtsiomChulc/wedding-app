import Link from 'next/link';
import styles from './NotFound.module.css';
import Logo from '@/components/ui/logo/Logo';

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.logoWrapper}>
                <Logo size={100} />
            </div>

            <h1 className={styles.title}>404</h1>

            <div className={styles.divider} />

            <h2 className={styles.subtitle}>Страница не найдена</h2>

            <p className={styles.description}>
                Кажется, это событие еще не запланировано. <br />
                Давайте вернемся к главному.
            </p>

            <Link href='/' className={styles.button}>
                На главную
            </Link>

            {/* Легкое золотистое свечение на фоне */}
            <div className={styles.backgroundEffect} />
        </main>
    );
}
