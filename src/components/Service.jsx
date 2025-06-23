import responsiveLogo from "../assets/responsive.svg"
import reactLogo from "../assets/react-logo.svg"
import UXLogo from "../assets/app-website-ui.svg"
import porftolioLogo from "../assets/template.svg"

function ServiceCard(){
    const services = [{
        logo: responsiveLogo,
        title: "Responsive Web Design",
        description: "Crafting moduleRunnerTransform, accessible, and mobile-friendly websites that adapt beutifully across all screen sizes."
    },
    {
        logo: reactLogo,
        title: "Custom Fron-End Development",
        description: "Building pixel-perfect interfaces using React and modern JavaScript frameworks, with a focus on performance and maintainability."
    },
    {
        logo: UXLogo,
        title: "UI/UX Implementation",
        description: "Translating design systems and mockups into interactive, user-friendly experiences with attention to detail and design precision."
    },
    {
        logo: porftolioLogo,
        title: "Portfolio & Personal Website Development",
        description: "Creating sleek, branded portfolios and personal websites to help professionals showcase their work and identity online."
    },]
    return(<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {services.map((service, index) => (
    <div key={index} className="flex flex-col w-75 h-100 bg-[rgba(255,255,255,0.04)] rounded-[24px] items-center">
        <img src={service.logo} alt={service.title} className="w-30 invert p-3"/>
        <h3 className="text-gray-200 text-[1.5rem] p-5">{service.title}</h3>
        <p className="text-[#B8B8B8] p-5">{service.description}</p>
    </div>)
)}
</div>)
}
export default ServiceCard