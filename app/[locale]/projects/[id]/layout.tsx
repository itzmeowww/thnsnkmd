import { projects } from '@/data/projects';
import { Locale, pick } from '@/lib/localized';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: Locale }> }) {
    const { id, locale } = await params;
    const project = projects.find(p => p.slug === id);
    if (!project) return {};
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('projectTitleTemplate', { title: pick(project.title, locale) }),
        description: pick(project.body, locale),
    };
}
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children
}
