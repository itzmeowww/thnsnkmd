import { Project } from "@/data/projects";
import { Link } from "@/navigation";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageOffIcon } from "lucide-react";
import BadgeList from "./bagde-list";
import { getTranslations } from "next-intl/server";
import { Locale, pick } from "@/lib/localized";

const ProjectCard = async ({ project, locale }: { project: Project; locale: Locale }) => {
    const t = await getTranslations("ProjectCard");
    return (
        <Link href={`/projects/${project.slug}`} >
            <Card className="overflow-hidden h-full transition hover:ring-2 shadow-md">
                {project.previews[0] ?
                    <Image width={project.previews[0].width} height={project.previews[0].height} src={project.previews[0].url} alt={pick(project.previews[0].alt, locale)} className='overflow-hidden w-full aspect-video object-cover border-b'></Image> :
                    <div className="w-full  aspect-video border-b bg-gray-50 flex justify-center items-center gap-2 text-muted-foreground text-xs"
                    >
                        <ImageOffIcon /> <span className=" ">{t("noImage")}</span>
                    </div>}
                <CardHeader>

                    <CardTitle className="text-xl">{pick(project.title, locale)} {project.since && <span className="text-xs text-muted-foreground ml-auto">{t("since", { year: project.since.getFullYear() })}</span>} </CardTitle>
                    <CardDescription>
                        {pick(project.body, locale)}

                    </CardDescription>
                    <div className="">
                        <BadgeList tools={project.tools} />
                    </div>
                </CardHeader>
            </Card>
        </Link>
    );
}

export default ProjectCard;