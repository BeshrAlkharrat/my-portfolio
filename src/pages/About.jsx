import NavigationBar from "../components/NavigationBar"
import '../styles/tailwind.css'

function About(){
    return(<>
        <NavigationBar />
        <div className="flex items-center justify-center">
            <h1 className="text-[5rem]">About me</h1>
            <p>Fron-End Developer</p>
        </div>
    </>)
}
export default About