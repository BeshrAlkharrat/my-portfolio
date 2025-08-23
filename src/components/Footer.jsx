import React from "react";
import { Link } from "react-router";
import githubIcon from "../assets/github.svg";
import linkdinIcon from "../assets/linkdin.svg";
import "../styles/tailwind.css";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center mt-10">
            {/* Footer content */}
            <div className="flex flex-row justify-center">   
                {/* Logo and Social Media Section */} 
                <div className="flex flex-col items-center justify-center">    
                    <p to="/"  className='text-[3rem] w-27 font-(family-name:--font-kapakana) bg-linear-to-r from-[hsl(214,75%,50%)] to-[hsl(214,86%,67%)] bg-clip-text text-transparent'>MBA</p>
                    {/* Social Media Icons */}
                    <div className="flex flex-row mb-5 w-[40%] h-[50%] items-center justify-center scale-125">
                        <button className="flex justify-center w-3/4 h-3/4 rounded-[100%] mx-2 bg-gray-200 cursor-pointer z-1" onClick={() => window.open('https://github.com/BeshrAlkharrat', '_blank')}>
                            <img src={githubIcon} />
                        </button>
                        <button className="flex items-center brightness-150 w-[80%] mx-2 cursor-pointer z-1" onClick={() => window.open('https://www.linkedin.com/in/besher-alkharrat/', '_blank')}>
                            <img src={linkdinIcon} alt="LinkdIn link"/>
                        </button>
                    </div>
                    <p className="text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                    <p className="text-xs">Built with React and Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 ml-10">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <Link to="/" className="mx-2 hover:underline">Home</Link>
                    <Link to="/Projects" className="mx-2 hover:underline">Projects</Link>
                    <Link to="/Contact" className="mx-2 hover:underline">Contact</Link>
                    <Link to="/About" className="mx-2 hover:underline">About</Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;