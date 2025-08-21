import { getProjectById, getProjectByRoute } from "../data/ProjectData.jsx";
import NavigationBar from "../components/NavigationBar";
import "../styles/tailwind.css";

function Project_1_Portfolio() {
    const projectId = getProjectById(1);
    return (
        <>
            <NavigationBar />
            <div className="flex flex-col justify-center z-1">
                <div className="h-50 w-50" >
                    <img src={projectId.previewphoto} alt="photo of the home page" className="w-full h-full"></img>
                </div>
            </div>
        </>
    );
}
export default Project_1_Portfolio;