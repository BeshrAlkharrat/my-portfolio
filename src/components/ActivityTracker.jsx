import "../styles/tailwind.css"
import { projectData } from "../data/ProjectData"
import { Link } from "react-router"

function ActivityTracker() {
    return(<div className="flex w-[30%] h-40 mt-30 ml-10 bg-[rgba(255,255,255,0.04)] text-gray-200 justify-center items-center rounded-[8px]">
        <div className="flex flex-col items-center w-[50%] justify-center">
            <p className="text-gray-200 text-[2rem]">Projects</p>
            <p className="text-gray-200 text-[1.5rem] items-center justify-center">{projectData.length}</p>
        </div>
        <hr className="bg-gray-200 rotate-90 w-20"></hr>
        <Link to="/Projects" className="flex flex-row">
            <p className="text-gray-200 text-[2rem] hover:text-gray-400 hover:text-shadow-xl ">View all my projects&rarr;</p>
        </Link>
        
    </div>)
}
export default ActivityTracker