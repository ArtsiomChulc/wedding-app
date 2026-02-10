import type { Metadata } from 'next';
import Container from '@/components/ui/container/Container';
import { ReactNode } from 'react';
import { inter, libertinus } from '@/app/fonts/fonts';
import './globals.css';
import Header from '@/components/ui/header/Header';

export const metadata: Metadata = {
    title: 'Веду свадьбы',
    description: 'Ведущий на свадьбу Минск',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='ru' className={`${inter.variable} ${libertinus.variable}`}>
            <body>
                <Container>
                    <Header />
                    {children}
                </Container>
            </body>
        </html>
    );
}
