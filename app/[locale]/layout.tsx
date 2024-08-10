import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavigationBar from '@/components/navigation-bar';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Thanasan Kumdee - get to know me",
    description: "wanna take a glance of stuff that I made?",
};

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body className={cn(inter.className, "relative")}>
                
                <NextIntlClientProvider messages={messages}>
                <NavigationBar locale={locale} />
                    <main className="flex min-h-screen flex-col items-start gap-6 p-8 md:p-16 max-w-6xl mx-auto w-full">
                        {children}
                    </main>
                    <Footer/>
                </NextIntlClientProvider>

            </body>
        </html>
    );
}
