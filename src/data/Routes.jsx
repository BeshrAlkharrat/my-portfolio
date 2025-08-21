import { Route, Routes } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Project_1_Portfolio from "../Projects/Project_1_Portfolio";

function RoutesCollector(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Projects/Project_1_Portfolio" element={<Project_1_Portfolio />} />
            {/* Add more routes as needed */}
        </Routes>
    )
}
export default RoutesCollector