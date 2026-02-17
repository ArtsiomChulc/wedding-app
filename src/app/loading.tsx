import s from './loading.module.css';

export default function Loading() {
    return (
        <div className={s.loaderContainer}>
            <div className={s.weddingLoader}>
                <div className={s.ring}></div>
                <div className={s.ring}></div>
                <span className={s.text}>Загрузка...</span>
            </div>
        </div>
    );
}
