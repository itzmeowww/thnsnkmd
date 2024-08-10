import { projects } from '@/data/projects';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const project = projects.find(p => p.slug === params.id)
    return {

        title: `${project?.title} by Thanasan Kumdee`,
        description: `${project?.body}`,

    }
}
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children
}
