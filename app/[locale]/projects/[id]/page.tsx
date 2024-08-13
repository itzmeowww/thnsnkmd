import { projects } from "@/data/projects";
import { Calendar, UserCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/navigation";

import HashHeader from "@/components/hash-header";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/image-carousel";
import Bread from "@/components/bread";




const Leading = ({ title }: { title: string }) => {
    return <>
        <hr className="mt-12" />
        <h2 className="text-xl font-bold bg-white -mt-8 pr-4 w-fit mb-2">{title}</h2></>
}
const Project = ({ params: { id } }: { params: { id: string } }) => {
    const project = projects.find(p => p.slug === id)

    if (!project) return notFound()
    return (
        <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto">
            <Bread current={project.slug} links={[{ name: "Projects", href: "/projects" }]} />
            <HashHeader text={project.title} />

            <div className="flex gap-2 mb-4"> {project.tools.map((tool, idx) => {
                return (
                    <Badge key={idx} variant={'outline'} className="flex gap-2">
                        {tool}
                    </Badge>
                )
            })}</div>
            <p>{project.body}</p>
            <p>{project.detail}</p>

            <Leading title="Previews" />
            <ImageCarousel project={project} />
            {project.links.length > 0 &&
                <>
                    <Leading title="Links" />
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
                    <Leading title="Comments" />
                    <div className="flex flex-col gap-2">
                        {project.comments.map((comment, idx) => {
                            const [_, month, day, year] = comment.date?.toDateString().split(' ') || [undefined, undefined, undefined, undefined]


                            return <div key={idx} className="border p-4 rounded-xl flex flex-col gap-2">
                                <div>
                                    {comment.comment}
                                </div>
                                <span className="text-xs ml-auto text-muted-foreground flex items-center gap-1">
                                    <UserCircle size={14} /> {comment.author}
                                    {year != undefined && <><Calendar size={14} className="ml-2" /> {`${month} ${day}, ${year}`}</>}
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