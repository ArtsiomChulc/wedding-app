import Container from '@/components/ui/container/Container';
import { ReactNode } from 'react';
import Header from '@/components/ui/header/Header';
import '../globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}
