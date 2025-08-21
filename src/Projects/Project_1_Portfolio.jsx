import { getProjectById, getProjectByRoute } from "../data/ProjectData";
import NavigationBar from "../components/NavigationBar";
import "../styles/tailwind.css";

function Project_1_Portfolio() {
    const projectId = getProjectById(1);
    return (
        <>
            <NavigationBar />
            <div className="flex flex-col justify-center z-1">
                <h1 className="text-[5rem] text-center text-gray-200">Projects</h1>
                <p className="text-[2rem] text-center mb-10">This is a list of all the projects that I have done.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                
            </div>
        </>
    );
}
export default Project_1_Portfolio;