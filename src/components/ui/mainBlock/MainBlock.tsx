import Text from '@/shared/components/text/Text';
import TextBlockMain from '@/components/ui/mainBlock/components/textBlock/TextBlockMain';
import BlockWrapper from '@/shared/components/blockWrapper/BlockWrapper';
import TextBlock from '@/shared/components/textBlock/TextBlock';
import Container from '@/components/ui/container/Container';
import s from './MainBlock.module.css';

export default function MainBlock() {
    return (
        <Container>
            <div className={s.main_block}>
                <BlockWrapper>
                    <Text as={'h1'} variant={'lg_title'} className={s.title}>
                        Креативный Ведущий
                    </Text>
                    <TextBlock>
                        <TextBlockMain />
                    </TextBlock>
                </BlockWrapper>
            </div>
        </Container>
    );
}
