import MainBlock from '@/components/ui/mainBlock/MainBlock';
import DescBlock from '@/components/ui/descBlock/DescBlock';
import s from './MainPage.module.css';

export default function Home() {
    return (
        <div className={s.main_page}>
            <MainBlock />
            <DescBlock />
        </div>
    );
}
