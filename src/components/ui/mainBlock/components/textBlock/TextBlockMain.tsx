import Text from '@/shared/components/text/Text';
import { textData } from '@/components/ui/mainBlock/components/textBlock/schemas/textData';
import s from './TextBlockMain.module.css';

export default function TextBlockMain() {
    return (
        <div className={s.text_wrapper}>
            <Text as={'h2'} variant={'sm_title'}>
                Ведущий, которого рекомендуют друзьям
            </Text>
            <Text as={'p'} variant={'description'}>
                Провожу мероприятия в Минске:
            </Text>
            <ul>
                {textData.map(({ text, id }) => {
                    return (
                        <li key={id}>
                            <Text as={'p'} variant={'description'}>
                                {text}
                            </Text>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
