import { Inter } from 'next/font/google';

import { Providers } from '@/app/Providers';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const metadata = {
    title: 'Frontend Assessment',
    description: 'Next.js + MUI + Inter font',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
