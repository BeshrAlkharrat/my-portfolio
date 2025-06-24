import NavigationBar from "../components/NavigationBar"
import '../styles/tailwind.css'
import '../styles/main.scss'

function About(){
    return(<>
        <NavigationBar />
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[5rem] text-gray-200">About me</h1>
            <p className="text-[1.5rem] text-[#d3d0d0]">I'm Beshr Alkharrat, a disciplined and passionate front-end developer creating elegant, performant, and accessible web experiences.</p>
        </div>
        <div className="flex absolute w-[40%] h-[100%] mt-10 right-15 justify-center items-center">
            <p className="text-[#aaa9a9] text-[1.5rem]">
                With a background in software development and a strong attention to design and detail, 
                I specialize in translating UI/UX design into smooth, 
                scalable code using modern technologies like React, and tailwind CSS.
                My focus is on clean, maintainable code and user-first interfaces.
                I build responsive, accessible websites and applications.
                My toolkit includes React, JavaScript, NEXT.js, TypeScript, Sass, and Tailwind Css.
                I enjoy working with design systems, creating reusable components, and solving layout challenges with precision. 
            </p>
        </div>
        <div className="background-profile-about flex absolute w-[50%] h-[100%] left-10 mt-10 justify-center items-center">
            <div className="justify-center items-center w-150 h-200 rounded-t-full rounded-b-lg bg-[rgba(255,255,255,0.04)]">

            </div>
        </div>
    </>)
}
export default About