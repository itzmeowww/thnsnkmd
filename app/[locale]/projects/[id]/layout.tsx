import { projects } from '@/data/projects';
import { Locale, pick } from '@/lib/localized';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { id: string; locale: Locale } }) {
    const project = projects.find(p => p.slug === params.id);
    if (!project) return {};
    const t = await getTranslations({ locale: params.locale, namespace: 'Metadata' });
    return {
        title: t('projectTitleTemplate', { title: pick(project.title, params.locale) }),
        description: pick(project.body, params.locale),
    };
}
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children
}
