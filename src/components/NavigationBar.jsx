import { Link } from 'react-router'
import '../styles/tailwind.css'
function NavigationBar() {
    return(
    <div className='flex justify-center m-10'>
        <div className=''>
            <p className='text-[3rem] font-(family-name:--font-kapakana) bg-linear-to-r from-[hsl(214,75%,50%)] to-[hsl(214,86%,67%)] bg-clip-text text-transparent'>MBA</p>
        </div>
        <div className="sticky bg-linear-to-r from-[hsl(214,75%,50%)]  to-[hsl(214,86%,67%)] w-100 mx-auto my-5 h-15 text-gray-200 text-[1.25rem] flex items-center justify-center gap-7 rounded-full shadow-xl" >
            <Link to="/" className='hover:text-gray-300'>Home</Link>
            <Link to="/Projects" className='hover:text-gray-300'>Projects</Link>
            <Link to="/Contact" className='hover:text-gray-300'>Contact</Link>
            <Link to="/About"  className='hover:text-gray-300'>About</Link>
        </div>
        <Link to="/Contact">
            <div className='flex w-35 h-12 bg-linear-to-r from-[hsl(214,75%,50%)] to-[hsl(214,86%,67%)] hover:from-[hsl(214,75%,45%)] hover:to-[hsl(214,86%,62%)] rounded-lg text-gray-200 items-center justify-center m-5 text-[1.5rem] font-bold'>
                <p>Hire Me</p>
            </div>
        </Link>
    </div>)
}

export default NavigationBar