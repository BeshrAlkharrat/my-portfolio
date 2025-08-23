
import { getProjectById, getProjectByRoute } from "../data/ProjectData";
import React, { useEffect, useRef } from "react";
import "../styles/main.scss";
import "../styles/tailwind.css";
import Footer from "./Footer.jsx";


function ProjectArticle({ id }) {
    const project = getProjectById(id);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    const entries = e => {
        const [entry] = e;
        setIsVisible(entry.isIntersecting);
    }
    const options = {
        threshold: 0.2
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [])

    if (!project) {
        return <div className="text-gray-200 text-center">Project not found</div>;
    }
    return (
        <>
        {/* Project Details Section */}
        <div className="flex flex-col justify-center items-center z-1">
                <div className="h-1/4  w-1/2 border-2 rounded-[10px]" >
                    <img src={project.previewphoto} alt="photo of the home page" className="w-full h-full rounded-[10px]"></img>
                </div>
                <h1 className="lg:text-[5rem] md:text-[3rem] sm:text-[2rem] text-center text-gray-200">{project.title}</h1>
                <p className="text-[2rem] text-center mb-10">{project.description}</p>
                <div className="flex flex-col items-center justify-center text-center w-[80%] ml-5">
                    <p className="text-[1.5rem] justify-center items-center text-center mb-10">{project.article}</p>
                </div>
                
            </div>
            {/* Animation Section */}
            <div ref={containerRef}  className="flex items-center overflow-hidden" >
                
                <div className = {`flex justify-center w-full h-1/2 transition-all duration-2000 overflow-hidden ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                <img src={project.previewphoto} alt="photo of the home page" className="w-full h-full object-cover"></img>
                </div>
                <div className={` overflow-hidden h-1/2 w-full transition-all duration-2000 text-center ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <p className="text-[2rem]">This is the home page. The buttons and the social links were not hard to program, although it took me a while to get used to React-router, even the two circles were not hard to but cropping the photo was hardest becuase it wat the first time i ever did something like that.</p>
                </div>
                </div>
                <div className="w-full">
                <Footer />
                </div>
            </>
    )

}
export default ProjectArticle;