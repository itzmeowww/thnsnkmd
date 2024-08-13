import Bread from "@/components/bread";
import HashHeader from "@/components/hash-header";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects by Thanasan Kumdee",
    description: "wanna see what I have made?",
};


const AllProjects = () => {
    return (
        <>
            <Bread current={"Projects"} links={[]} />
            <HashHeader text="my-stuffs" />
            <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-4 bg-secondary p-4 rounded-xl'>
                {projects.map((project, idx) => {
                    return (
                        <ProjectCard key={idx} project={project} />
                    )
                })}

            </div>
        </>
    );
}

export default AllProjects;