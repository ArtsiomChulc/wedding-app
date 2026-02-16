import Image, { StaticImageData } from 'next/image';

type ImageBlockProps = {
    src: StaticImageData | string;
    alt: string;
    priority?: boolean;
};

export default function ImageBlock({
    src,
    alt,
    priority = false,
}: ImageBlockProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            priority={priority}
            placeholder='blur'
        />
    );
}
