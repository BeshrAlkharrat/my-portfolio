import { Link } from "react-router"
import NavigationBar from "../components/NavigationBar"
import ActivityTracker from "../components/ActivityTracker"
import ServiceCard from "../components/Service"
import backgroundBlurr from "../assets/Vector.svg"
import githubIcon from "../assets/github.svg"
import linkdinIcon from "../assets/linkdin.svg"
import personalPic from "../assets/profile-pic1.png"
import { skillsLogos } from "../data/SkillsLogos"
import '../styles/tailwind.css'
import "../styles/main.scss"
import Footer from "../components/Footer"
import { ReactTyped } from "react-typed"


function Home(){
    return(<div ><div className="relative ">
        <div className="z-1 "><NavigationBar/></div>
        <div className="flex w-125 ml-10">
            <h1 className="font-bold text-gray-200 text-[2rem] mx-5">Hi! My name is Beshr Alkharrat, and I am a <span className="flex text-[#4286F4] text-[3rem] font-bold"><ReactTyped strings={["Front-end Developer"]} typeSpeed={150} /></span></h1>
        </div>
        <div className="flex ml-10" >
            {/*background blurr behind the buttons*/}
            <img src={backgroundBlurr} className="absolute top-0 z-0 pointer-events-none select-none"/>
            <Link to="/Contact" className='z-1'>
                <div className='flex w-35 h-12 bg-[hsl(41,100%,47%)] hover:bg-[hsl(41,100%,42%)] rounded-lg text-gray-200 items-center justify-center m-5 text-[1.5rem] font-bold'>
                    <p>Hire Me</p>
                </div>
            </Link>
            <div className="flex h-12 w-45 mt-5 bg-[#121212] outline-solid outline-gray-200 hover:outline-gray-400 justify-center items-center rounded-lg text-gray-200 z-1">
                <Link to="/Projects">Download CV</Link>
            </div>
        </div>
        <div>
            {/*social media buttons */}
            <div className="flex z-1 ml-10 mt-3">
                <button className="flex w-15 h-15 rounded-full mx-5 bg-gray-200 cursor-pointer z-1" onClick={() => window.open('https://github.com/BeshrAlkharrat', '_blank')}>
                    <img src={githubIcon} />
                </button>
                <button className="flex brightness-150 w-15 h-15 rounded-full mx-5 cursor-pointer z-1" onClick={() => window.open('https://www.linkedin.com/in/besher-alkharrat/', '_blank')}>
                    <img src={linkdinIcon} alt="LinkdIn link"/>
                </button>
            </div>
            
        </div>

        {/* This is the photo section */}
            <div className="w-screen h-full">
                <img src={personalPic} alt="personal pic" className="absolute w-[800px] top-10 right-2 z-2 mask-bottom-circle"/>
                {/* inner circle*/}
                <div className="absolute rounded-full h-[520px] w-[520px] top-50 right-35 bg-[#4286F4] opacity-30"></div>
                {/* outer circle */}
                <div className="absolute rounded-full h-160 w-160 top-35 right-20 bg-[#4286F4] opacity-25"></div>
            </div>
            
        <ActivityTracker />

        {/* This is the skills animation section */}
        <div className="flex flex-col items-center justify-center">
            <h2 className="mt-20 mb-5 text-[5rem] text-gray-200">Skills</h2>
            <div className="overflow-hidden w-full">
                <div className="flex justify-center items-center gap-20 animate-scroll">
                {skillsLogos.map((skill) => (
                    <img key={skill.id} className="w-40 h-75 m-2 invert hover:scale-125 duration-300 translate-x-450" src={skill.logo} alt={skill.name} title={skill.name} />
                ))}
                {skillsLogos.map((skill) => (
                    <img key={skill.id} className="w-40 h-75 m-2 invert hover:scale-125 duration-300 translate-x-450" src={skill.logo} alt={skill.name} title={skill.name} />
                ))}
                {skillsLogos.map((skill, index) => (
                    <img key={index} className="w-40 h-75 m-2 invert hover:scale-125 duration-300 translate-x-450" src={skill.logo} alt={skill.name} title={skill.name} />
                ))}
                
            </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
            <h2 className="mt-20 mb-5 text-[5rem] text-gray-200">Services</h2>
            <p className="m-5 mb-5 text-[3rem]">These are the services that I can provide</p>
            <ServiceCard />
        </div>
        
        
        </div>
        <div className=" bottom-0 w-full"> <Footer /> </div>
    </div>)
}
export default Home