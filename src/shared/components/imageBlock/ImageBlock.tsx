import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

type ImageBlockProps = {
    src: StaticImageData | string;
    alt: string;
    priority?: boolean;
    fill?: boolean;
    style?: CSSProperties;
};

export default function ImageBlock({
    src,
    alt,
    fill,
    style,
    priority = false,
}: ImageBlockProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            style={style}
            priority={priority}
            placeholder='blur'
        />
    );
}
