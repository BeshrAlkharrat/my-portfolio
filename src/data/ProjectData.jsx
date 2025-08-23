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
        article: "This is my very first project, which I built using React, and TailwindCSS. In this project, I wanted to showcase my skills and projects in a visually appealing way. This project will always be a work in progress, as I will continue to add and improvre on to it as I learn new things, and gain more expreience, and I will also add more projects to it as I build them. This project took me a lot of time to build, as I had to get to be familiar with React, and TailwindCSS, which made creating this portfolio a lot more fun, and I hope This project will be the worst project I will ever build, as I will continue to improve and learn new things.",
        techstack: [JavaScriptLogo, reactLogo, tailwindCSSLogo, sassLogo],
        Link: "/Projects/1"
    },
    
    // Add more projects as needed
]
export const getProjectById = (id) => {
    return projectData.find(project => project.id === id);
}
export const getProjectByRoute = (route) => {
    return projectData.find(project => project.Link === route);
}