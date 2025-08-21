import {useRef} from "react"
import "../styles/tailwind.css"
import homePage from "../assets/home-page.png"
import JavaScriptLogo from "../assets/javascript.svg"
import reactLogo from "../assets/react-logo.svg"
import tailwindCSSLogo from "../assets/tailwind.svg"
import sassLogo from "../assets/sass.svg"


function Project(){
    const project = [
        {
            previewphoto: homePage,
            title: "My Portfolio website",
            description: "This is my first project, which i built using React, tailwindCSS and a little Sass.",
            techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
            
        }
    ]
    return(<div className="flex  bg-[hsla(0,0%,100%,0.04)] w-[415px] h-[415] rounded-t-[28px] rounded-b-[16px] z-2 selected-project hover:scale-[1.5] duration-500 z-1">
        {project.map((p, index) => (<div key={index}>
            <img className="rounded-t-[28px] w-[100%] h-[80%]  hover:height-[60%]" src={p.previewphoto} alt={p.title}></img>
            <div className="flex rounded-b-[16px] p-[16px]">
                <h2 className="text-bottom reltive">{p.title}</h2>
                <div className="flex items-right justify-right ml-29">
                    {p.techstack.map((tech, index) => (
                <img key={index} className=" w-[24px] h-[24px] m-1 invert" src={tech} alt={'Technology ${index +1}'}></img>
                ))}
                </div>
            </div>
        </div>
        ))}
    </div>)
}
export default Project