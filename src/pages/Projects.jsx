import NavigationBar from "../components/NavigationBar"
import Project from "../components/Project"
import "../styles/tailwind.css"
function Projects(){
const projectAmmount = 0;
    return(<>
    <NavigationBar />
    <div className="flex flex-col justify-center z-1">
        <h1 className="text-[5rem] text-center text-gray-200">Projects</h1>
        <p className="text-[2rem] text-center mb-10">This is a list of all the projects that I have done.</p>
    </div>
    <div className="flex justify-center m-10 z-2">
        <Project />
    </div>
    </>)
}
export default Projects