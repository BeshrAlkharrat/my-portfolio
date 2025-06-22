import { Link } from "react-router"
import NavigationBar from "../components/NavigationBar"
import '../styles/tailwind.css'
function Home(){
    return(<>
    <NavigationBar />
    <div>
        <h1 className="font-bold text-gray-200 text-[2rem]">Hi! My name is Beshr Alkharrat, and I am a <span className="flex text-[#4286F4] text-[4.5<rem]">Front-end Developer</span></h1>
    </div>
    
    <div className="flex relative">
        <div className='flex w-35 h-12 bg-[hsl(41,100%,47%)] hover:bg-[hsl(41,100%,42%)] rounded-lg text-gray-200 items-center justify-center m-5 text-[1.5rem] font-bold'>
            <Link to="/Contact">Hire Me</Link>
        </div>
        <div className="flex h-12 w-45 mt-5 bg-[#121212] outline-solid outline-gray-200 hover:outline-gray-300 justify-center items-center rounded-lg text-gray-200 ">
            <Link to="/Projects">Download CV</Link>
        </div>
        <div>
            {/* inner circle*/}
            <div className="absolute rounded-full h-125 w-125 top-15 right-35 bg-[#4286F4]  opacity-30"></div>
            {/* outer circle */}
            <div className="absolute rounded-full h-155 w-155 top-0 right-20 bg-[#4286F4]  opacity-25"></div>
        </div>
    </div>
    </>)
}
export default Home