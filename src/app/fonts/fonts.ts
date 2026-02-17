import { Inter, Raleway } from 'next/font/google';

export const inter = Inter({
    variable: '--font-inter',
    subsets: ['cyrillic'],
    weight: ['600', '800', '400'],
    adjustFontFallback: false,
});

export const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['cyrillic'],
    weight: ['600', '800', '400'],
    adjustFontFallback: false,
});