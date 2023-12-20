'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import Providers from './components/apolloProvider/apolloProvider';
import { DataProvider } from './components/context/context';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <DataProvider>
                        <Header />
                        <Navigation />
                        {children}
                        <Footer />
                    </DataProvider>
                </Providers>
            </body>
        </html>
    );
}
