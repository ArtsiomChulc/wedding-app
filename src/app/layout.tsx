import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { inter, raleway } from '@/app/fonts/fonts';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
    title: 'Владислав Рынкевич | Ведущий',
    icons: {
        icon: [{ url: '/favicon.ico', sizes: '72x72', type: 'image/png' }],
        apple: [
            { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
};

export default function ErrorLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='ru' className={`${inter.variable} ${raleway.variable}`}>
            <body>
                <NextTopLoader
                    color='#2299DD'
                    initialPosition={0.08}
                    crawlSpeed={300}
                    height={5}
                    showSpinner={false}
                />
                {children}
            </body>
        </html>
    );
}
