import Text from '@/components/ui/text/Text';
import TextBlock from '@/components/ui/mainBlock/components/textBlock/TextBlock';
import ImageBlock from '@/components/ui/mainBlock/components/imageBlock/ImageBlock';
import SS from '@/shared/pictures/VR-1.png';
import s from './MainBlock.module.css';

export default function MainBlock() {
    return (
        <div className={s.main_block}>
            <Text as={'h1'} variant={'lg_title'} className={s.title}>
                Владислав Рынкевич
            </Text>
            <div className={s.block_wrapper}>
                <div className={s.text_block}>
                    <TextBlock />
                </div>
                <div className={s.image_block}>
                    <ImageBlock src={SS} alt={'Ведущий мероприятий'} priority />
                </div>
            </div>
        </div>
    );
}
