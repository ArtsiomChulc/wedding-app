import Text from '@/shared/components/text/Text';
import { textData } from '@/components/ui/mainBlock/components/textBlock/schemas/textData';
import s from './TextBlockMain.module.css';

export default function TextBlockMain() {
    return (
        <div className={s.text_wrapper}>
            <Text as={'h2'} variant={'sm_title'}>
                Корпоративы, свадьбы, юбилеи, Новый год, выпускные вечера,
                форумы и саммиты, презентации, открытие новых заведений — мне
                по плечу любая задача
            </Text>
        </div>
    );
}
