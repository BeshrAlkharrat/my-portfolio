import homePage from '../assets/home-page.png';
import JavaScriptLogo from '../assets/javascript.svg';
import reactLogo from '../assets/react-logo.svg';
import tailwindCSSLogo from '../assets/tailwind.svg';
import sassLogo from '../assets/sass.svg';

export const projectData = [
    {
        id: 1,
        previewphoto: homePage,
        title: "My Portfolio website",
        description: "This is my first project, which I built using React, TailwindCSS, and a little Sass.",
        techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
        Link: "/Projects/Project_1_Portfolio"
    }
    // Add more projects as needed
]
export const getProjectById = (id) => {
    return projectData.find(project => project.id === id);
}
export const getProjectByRoute = (route) => {
    return ProjectData.find(project => project.Link === route);
}