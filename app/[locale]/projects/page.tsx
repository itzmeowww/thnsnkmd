import Bread from "@/components/bread";
import HashHeader from "@/components/hash-header";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { Locale } from "@/lib/localized";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('projectsTitle'),
        description: t('projectsDescription'),
    };
}


const AllProjects = async ({ params: { locale } }: { params: { locale: Locale } }) => {
    const t = await getTranslations();
    return (
        <>
            <Bread current={t('Breadcrumb.projects')} links={[]} />
            <HashHeader text={t('ProjectsPage.header')} />
            <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-4 bg-secondary p-4 rounded-2xl border'>
                {projects.map((project, idx) => {
                    return (
                        <ProjectCard key={idx} project={project} locale={locale} />
                    )
                })}

            </div>
        </>
    );
}

export default AllProjects;