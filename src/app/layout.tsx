import './globals.css';

import { Inter } from 'next/font/google';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Home',
    description: 'T-Gex Home',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
