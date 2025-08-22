import "../styles/tailwind.css"
import { projectData } from "../data/ProjectData"

function ActivityTracker() {
    return(<div className="flex w-125 h-40 mt-30 ml-5 bg-[rgba(255,255,255,0.04)] text-gray-200 justify-center items-center rounded-[8px]">
        <div className="flex flex-col items-center justify-center mr-10">
            <p className="text-gray-200 text-[2rem]">Projects</p>
            <p className="text-gray-200 text-[1.5rem] items-center justify-center">{projectData.length}</p>
        </div>
        <hr className="bg-gray-200 rotate-90 w-20"></hr>
        <div>
            <p className="text-gray-200 text-[2rem]">Experience</p>
        </div>
        
    </div>)
}
export default ActivityTracker