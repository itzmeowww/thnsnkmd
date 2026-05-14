import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavigationBar from '@/components/navigation-bar';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('rootTitle'),
        description: t('rootDescription'),
    };
}

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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >

                    <NextIntlClientProvider messages={messages}>
                        <NavigationBar locale={locale} />
                        <main className="flex min-h-screen flex-col items-start gap-6 p-8 md:p-16 max-w-6xl mx-auto w-full">
                            {children}
                        </main>
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
