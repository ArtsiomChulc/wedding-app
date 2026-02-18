import s from './About.module.css';
import Text from '@/shared/components/text/Text';

export default function About() {
    return (
        <div className={s.about_container}>
            <Text variant={'sm_title'} as={'h2'}>
                Владислав Рынкевич
            </Text>
            <Text variant={'md_title'} as={'p'}>
                Привет, с вами — ведущий, шоумен, конферансье, тамада, диджей,
                певец, человек-праздник, человек-микрофон и просто хороший,
                позитивный парень!
            </Text>
            <Text variant={'md_title'} as={'p'}>
                Самый стильный и интеллигентный ведущий. Нахожусь везде, где
                есть микрофон, и наоборот — микрофон всегда находится там, где
                нахожусь я!
            </Text>
        </div>
    );
};