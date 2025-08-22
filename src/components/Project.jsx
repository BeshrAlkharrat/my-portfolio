import {useRef} from "react"
import "../styles/tailwind.css"
import {projectData} from "../data/ProjectData.jsx";
import { Link } from "react-router";
//import { getProjectByRoute } from "../data/ProjectData.jsx";



function Project(){
    return(
    <div className="grid grid-cols-[auto-fit, minmax(205px, 1fr)] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center justify-center p-4 ">
        
            {projectData.map((p) => (<div className="group relative bg-[hsla(0,0%,10%,0.5)] w-full max-w-[450px]  aspect-[4/3]  rounded-t-[28px] rounded-b-[16px] z-2 selected-project hover:scale-[1.25] hover:rounded-b-[0px] hover:z-10 duration-500 m-5" key={p.id}>
                <img className="rounded-t-[28px] w-full h-[80%] object-cover" src={p.previewphoto} alt={p.title}></img>
                <div className="flex justify-between items-start h-[20%] w-full rounded-b-[16px] p-4 mb-4">
                    <h2 className="text-lg font-semibold">{p.title}</h2>
                    <div className="flex flex-col justify-end items-end">
                        <span className="mr-3 justify-end">Tech Stack used:</span>
                        <div className="flex flex-wrap justify-end-safe gap-2">
                            {p.techstack.map((tech, index) => (
                        <img key={index} className=" w-6 h-6 m-1 invert" src={tech} alt={'Technology ${index +1}'}></img>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="absolute opacity-0 bg-[hsla(0,0%,10%,1)] w-full h-[40%] rounded-b-[16px] duration-500 z-2 group-hover:translate-y-full group-hover:opacity-100 bottom-0">
                    <p className="text-gray-200 text-base p-5">{p.description}</p>
                    <Link to={p.Link} className="absolute bottom-5 right-5 bg-[hsl(41,100%,47%)] hover:bg-[hsl(41,100%,42%)] text-gray-200 px-4 py-2 rounded-lg"> View The Project</Link>
                </div>
            </div>
            ))}
        
        
    </div>)
}
export default Project
 // Exporting for potential use in other components