import Link from 'next/link';
import { paths } from '@/shared/paths/paths';

interface LogoProps {
    size?: number;
    primaryColor?: string;
}

export default function Logo({
    size = 60,
    primaryColor = '#D4AF37',
}: LogoProps) {
    return (
        <div
            style={{
                height: size,
                width: size,
            }}
        >
            <Link href={paths.home}>
                <svg
                    width='100%'
                    height='100%'
                    viewBox='0 0 120 120'
                    fill='none'
                >
                    <circle
                        cx='60'
                        cy='60'
                        r='54'
                        stroke={primaryColor}
                        strokeWidth='2'
                        opacity='0.8'
                    />

                    <circle
                        cx='60'
                        cy='60'
                        r='58'
                        stroke={primaryColor}
                        strokeWidth='0.5'
                        strokeDasharray='2 4'
                        opacity='0.5'
                    />

                    <path
                        d='M42 45L60 82L78 45'
                        stroke='url(#goldGradient)'
                        strokeWidth='5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />

                    <path
                        d='M60 82V45H72C78 45 82 48 82 54C82 60 78 63 72 63H60L76 82'
                        stroke='url(#goldGradient)'
                        strokeWidth='5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />

                    <defs>
                        <linearGradient
                            id='goldGradient'
                            x1='42'
                            y1='45'
                            x2='82'
                            y2='82'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0%' stopColor={primaryColor} />
                            <stop offset='50%' stopColor='#F9F295' />
                            <stop offset='100%' stopColor='#B8860B' />
                        </linearGradient>
                    </defs>
                </svg>
            </Link>
        </div>
    );
}
