import { Project } from "@/data/projects";
import { Link } from "@/navigation";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`}  className='flex flex-col border rounded-lg overflow-hidden hover:ring-2 ring-slate-200 bg-white shadow-md'>
            {project.previews[0] && <Image width={project.previews[0].width} height={project.previews[0].height} src={project.previews[0].url} alt="" className='overflow-hidden w-full aspect-[18/9] object-cover  border-b'></Image>}
            <div className='p-4 flex flex-col flex-1'>
                <h1 className='font-medium text-lg custom-underline'>{project.title}</h1>
                <p className='pt-2 flex-1'>{project.body}</p>
                {/* <div className='flex gap-2 ml-auto flex-wrap justify-end'>
                {project.links.length > 0 &&
                    <Link href={project.links[0].href} target='_blank'>
                        <Button variant={'secondary'} size={'sm'}>
                            {project.links[0].title}
                        </Button>
                    </Link>}
                <Link href={`/project/${project.slug}`}>

                    <Button variant={'secondary'} size={'sm'}>
                        <Book className='mr-2' size={16} /> Read More
                    </Button>
                </Link>
            </div> */}
            </div>
        </Link>
    );
}

export default ProjectCard;