import { Link } from 'react-router'
import '../styles/navigationbar.css'
function NavigationBar() {
    return(
    <>
        <div className="bg-[#3f3d56] w-100 mx-auto h-20 text-gray-200 flex items-center justify-center gap-10 " >
            <Link to="/About">About</Link>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Projects">Projects</Link>
        </div>
    </>)
}

export default NavigationBar