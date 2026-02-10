import { Inter, Libertinus_Serif } from 'next/font/google';

export const inter = Inter({
    variable: '--font-inter',
    subsets: ['cyrillic'],
    weight: ['600', '800', '400'],
});

export const libertinus = Libertinus_Serif({
    variable: '--font-libertinus',
    subsets: ['cyrillic'],
    weight: ['600'],
});
