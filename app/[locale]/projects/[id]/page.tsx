import { projects } from "@/data/projects";
import { Calendar, UserCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

import HashHeader from "@/components/hash-header";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/image-carousel";
import Bread from "@/components/bread";
import BadgeList from "@/components/bagde-list";
import { Locale, pick } from "@/lib/localized";
import { getFormatter, getTranslations } from "next-intl/server";




const Leading = ({ title }: { title: string }) => {
    return <>
        <hr className="mt-12" />
        <h2 className="text-xl font-bold  bg-white dark:bg-black -mt-8 pr-4 w-fit mb-2">{title}</h2></>
}
const Project = async ({ params: { id, locale } }: { params: { id: string; locale: Locale } }) => {
    const project = projects.find(p => p.slug === id)

    if (!project) return notFound()
    const t = await getTranslations();
    const f = await getFormatter();
    return (
        <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto">
            <Bread current={project.slug} links={[{ name: t('Breadcrumb.projects'), href: "/projects" }]} />
            <BadgeList tools={project.tools} />
            <HashHeader text={pick(project.title, locale)} />


            <p className='font-light text-foreground'>
                {pick(project.body, locale)}
            </p>
            <p className='font-light text-foreground'>
                {pick(project.detail, locale)}
            </p>
            {project.previews.length > 0 && <>
                <Leading title={t('ProjectPage.previews')} />
                <ImageCarousel project={project} locale={locale} />
            </>}

            {project.links.length > 0 &&
                <>
                    <Leading title={t('ProjectPage.links')} />
                    <div className="flex gap-2">
                        {project.links.map((link, key) => {
                            return (
                                <Link key={key} href={link.href} target='_blank' className="w-fit">
                                    <Button variant={'outline'} className="w-fit">{link.title}</Button>
                                </Link>
                            )
                        })}
                    </div>
                </>
            }
            {
                project.comments.length > 0 && <>
                    <Leading title={t('ProjectPage.comments')} />
                    <div className="flex flex-col gap-2">
                        {project.comments.map((comment, idx) => {
                            return <div key={idx} className="border p-4 rounded-xl flex flex-col gap-2">
                                <p className="font-light text-foreground">
                                    {pick(comment.comment, locale)}
                                </p>
                                <span className="text-xs ml-auto text-muted-foreground flex items-center gap-1">
                                    <UserCircle size={14} /> {comment.author}
                                    {comment.date && <><Calendar size={14} className="ml-2" /> {f.dateTime(comment.date, { year: 'numeric', month: 'short', day: 'numeric' })}</>}
                                </span>
                            </div>
                        })}
                    </div>
                </>
            }


        </div>
    );
}

export default Project;