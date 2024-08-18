import { Project } from "@/data/projects";
import { Link } from "@/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageOffIcon } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`} >
            <Card className="overflow-hidden h-full transition hover:ring-2 shadow-md">
                {project.previews[0] ?
                    <Image width={project.previews[0].width} height={project.previews[0].height} src={project.previews[0].url} alt="" className='overflow-hidden w-full aspect-video object-cover border-b'></Image> :
                    <div className="w-full  aspect-video border-b bg-gray-50 flex justify-center items-center gap-2 text-muted-foreground text-xs"
                    >
                        <ImageOffIcon /> <span className=" ">No Image</span>
                    </div>}
                <CardHeader>

                    <CardTitle className="text-xl">{project.title} {project.since && <span className="text-xs text-muted-foreground ml-auto"> {`since ${project.since.getFullYear()}`}</span>} </CardTitle>
                    <CardDescription>{project.body}</CardDescription>

                </CardHeader>
            </Card>
        </Link>
    );
}

export default ProjectCard;