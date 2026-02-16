import ImageBlock from '@/shared/components/imageBlock/ImageBlock';
import SS from '@/shared/pictures/VR-1.png';
import s from './DescBlock.module.css';
import Text from '@/components/ui/text/Text';

export default function DescBlock() {
    return (
        <div className={s.desc_block}>
            <div className={s.image_block}>
                <ImageBlock src={SS} alt={'Свадебный ведущий'} />
            </div>
            <div className={s.text_block}>
                <Text as={'p'} variant={'md_title'}>
                    15 ЛЕТ ДЕЛАЮ ПРАЗДНИКИ ВЕСЁЛЫМИ И ЗАПОМИНАЮЩИМИСЯ
                </Text>
            </div>
        </div>
    );
}
