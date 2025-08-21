import {useRef} from "react"
import "../styles/tailwind.css"
import homePage from "../assets/home-page.png"
import JavaScriptLogo from "../assets/javascript.svg"
import reactLogo from "../assets/react-logo.svg"
import tailwindCSSLogo from "../assets/tailwind.svg"
import sassLogo from "../assets/sass.svg"
import { Link } from "react-router";


function Project(){
    const project = [
        {
            id: 1,
            previewphoto: homePage,
            title: "My Portfolio website",
            description: "This is my first project, which i built using React, tailwindCSS and a little Sass.",
            techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
            Link: "/Projects/Project_1_Portfolio"
            
        },
        {
            previewphoto: homePage,
            title: "My Portfolio website",
            description: "This is my first project, which i built using React, tailwindCSS and a little Sass.",
            techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
            
        },
        {
            previewphoto: homePage,
            title: "My Portfolio website",
            description: "This is my first project, which i built using React, tailwindCSS and a little Sass.",
            techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
            
        },
        {
            previewphoto: homePage,
            title: "My Portfolio website",
            description: "This is my first project, which i built using React, tailwindCSS and a little Sass.",
            techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
            
        },
        {            previewphoto: homePage,
            title: "My Portfolio website",
            description: "This is my first project, which i built using React, tailwindCSS and a little Sass.",
            techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
        }
        
    ]
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center items-center bg-amber-950">
        
            {project.map((p, index) => (<div className="group relative bg-[hsla(0,0%,10%,0.5)] w-[375px] h-[325px] rounded-t-[28px] rounded-b-[16px] z-2 selected-project hover:scale-[1.5] hover:rounded-b-[0px] hover:z-10 duration-500" key={index}>
                <img className="rounded-t-[28px] w-[100%] h-[80%]" src={p.previewphoto} alt={p.title}></img>
                <div className="absolute top-65 h-[20%] w-[100%] rounded-b-[16px] p-[16px]">
                    <h2 className="text-bottom absolute">{p.title}</h2>
                    <div className="flex items-right justify-right ml-55">
                        {p.techstack.map((tech, index) => (
                    <img key={index} className=" w-[24px] h-[24px] m-1 invert" src={tech} alt={'Technology ${index +1}'}></img>
                    ))}
                    </div>
                </div>
                <div className="absolute opacity-0 bg-[hsla(0,0%,10%,0.5)] w-[375px] h-[200px] rounded-b-[16px] duration-500 z-2 group-hover:translate-y-[100%] group-hover:opacity-100 bottom-0">
                    <p className="text-gray-200 text-[1.25rem] p-5">{p.description}</p>
                    <Link to={p.Link} className="absolute bottom-5 right-5 bg-[hsl(41,100%,47%)] hover:bg-[hsl(41,100%,42%)] text-gray-200 px-4 py-2 rounded-lg"> View The Project</Link>
                </div>
            </div>
            ))}
        
        
    </div>)
}
export default Project
 // Exporting for potential use in other components