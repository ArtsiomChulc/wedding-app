import MainBlock from '@/components/ui/mainBlock/MainBlock';
import background from '@/shared/pictures/background_main.webp';
import ImageBlock from '@/shared/components/imageBlock/ImageBlock';

export default function Home() {
    return (
        <>
            <ImageBlock
                src={background}
                alt={'Ведущий мероприятий'}
                priority
                fill
                style={{
                    opacity: 0.6,
                    objectPosition: 'center',
                    objectFit: 'cover',
                }}
            />
            <MainBlock />
        </>
    );
}
