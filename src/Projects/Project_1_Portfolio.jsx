import NavigationBar from "../components/NavigationBar";
import ProjectArticle from "../components/ProjectArticle.jsx";
import "../styles/tailwind.css";
import { useParams } from "react-router";


function Project_1_Portfolio() {
    const { id } = useParams();
    
    return (
        <>
            <NavigationBar />
            <div className="min-h-screen h-full w-full flex flex-col items-center justify-center">
                <ProjectArticle id={parseInt(id)} />
            </div>
        </>
    );
}
export default Project_1_Portfolio;