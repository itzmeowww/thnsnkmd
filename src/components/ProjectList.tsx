import type { Project } from "../projects";
import { projects } from "../projects";
import { Card } from "./Card";

export const ProjectList = () => {
    return (
        <div>
            {/* <div className="text-white flex gap-4 text-sm py-3 flex-wrap justify-center">
                {
                    tools.map((tool) => {
                        return (
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" className="w-3 h-3" />
                                <ToolTag tool={tool} />
                            </div>
                        );
                    })
                }
            </div> */}
            <div className="grid sm:grid-cols-2 gap-5 mt-6">
                {
                    projects.map((project: Project, idx) => {
                        return <Card
                            key={`project-${idx}`}
                            title={project.title}
                            body={project.body}
                            href={`/projects/${project.slug}`}
                            img={project.img}
                        />

                    }
                    )
                }
            </div>
        </div>
    )
}
