import { Link } from 'react-router'
import '../styles/tailwind.css'
function NavigationBar() {
    return(
    <div className='flex justify-center m-10'>
        <div className="bg-[#3f3d56] w-85 mx-auto my-5 h-15 text-gray-200 flex items-center justify-center gap-7 rounded-full shadow-xl" >
            <Link to="/About" className="hover:text-[#A26769] text-[#F4A261]">About</Link>
            <Link to="/" className="hover:text-[#4A637D] text-[#B5838D]">Home</Link>
            <Link to="/Contact" className="hover:text-[#C5A880]">Contact</Link>
            <Link to="/Projects" className="hover:text-[#C5A880]">Projects</Link>
            
        </div>
        <div className='flex w-35 h-12 bg-linear-to-r from-[#2071DD] to-[#64A1F3] rounded-lg text-gray-200 items-center justify-center m-5 text-[1.5rem] font-bold'>
            <Link to="/Contact">Hire Me</Link>
        </div>
    </div>)
}

export default NavigationBar