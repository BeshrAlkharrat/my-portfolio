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
    return(<div className="flex  bg-[hsla(0,0%,100%,0.04)] w-[415px] h-[415] rounded-t-[28px] rounded-b-[16px] z-2 selected-project">
        {project.map((p, index) => (<div key={index}>
            <img className="rounded-t-[28px] w-[100%] h-[80%]  hover:w-[100%]" src={p.previewphoto} alt={p.title}></img>
            <p className="opacity-0 text-[0px] hover:opacity-100 hover:text-[2rem]">{p.description}</p>
            <div className="flex rounded-b-[16px] p-[16px]">
                <h2 className="text-bottom">{p.title}</h2>
                
            </div>
        </div>
        ))}
    </div>)
}
export default Project