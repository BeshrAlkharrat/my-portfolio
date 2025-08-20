import React from "react";
import "../styles/tailwind.css";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <p className="text-xs">Built with React and Tailwind CSS</p>
        </footer>
    );
}
export default Footer;