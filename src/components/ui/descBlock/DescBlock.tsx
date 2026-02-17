import ImageBlock from '@/shared/components/imageBlock/ImageBlock';
import Text from '@/shared/components/text/Text';
import BlockWrapper from '@/shared/components/blockWrapper/BlockWrapper';
import TextBlock from '@/shared/components/textBlock/TextBlock';
import s from './DescBlock.module.css';

export default function DescBlock() {
    return (
        <BlockWrapper>
            <div className={s.image_block}>
                {/*<ImageBlock src={SS} alt={'Свадебный ведущий'} />*/}
            </div>
            <TextBlock>
                <Text as={'p'} variant={'md_title'}>
                    15 ЛЕТ ДЕЛАЮ ПРАЗДНИКИ ВЕСЁЛЫМИ И ЗАПОМИНАЮЩИМИСЯ
                </Text>
            </TextBlock>
        </BlockWrapper>
    );
}
