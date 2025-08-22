
import { getProjectById, getProjectByRoute } from "../data/ProjectData";

import "../styles/tailwind.css";


function ProjectArticle({ id }) {
    const project = getProjectById(id);

    if (!project) {
        return <div className="text-gray-200 text-center">Project not found</div>;
    }
    return (
        <div className="flex flex-col justify-center items-center z-1">
                <div className="h-1/4  w-1/2 border-2 rounded-[10px]" >
                    <img src={project.previewphoto} alt="photo of the home page" className="w-full h-full rounded-[10px]"></img>
                </div>
                <h1 className="lg:text-[5rem] md:text-[3rem] sm:text-[2rem] text-center text-gray-200">{project.title}</h1>
                <p className="text-[2rem] text-center mb-10">{project.description}</p>
                <div className="flex flex-col items-center justify-center text-center w-[80%] ml-5">
                    <p className="text-[1.5rem] justify-center items-center text-center mb-10">{project.article}</p>
                </div>
            </div>
    )
}
export default ProjectArticle;