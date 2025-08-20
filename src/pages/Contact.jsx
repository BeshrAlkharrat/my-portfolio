import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
function Contact(){
    return(<>
    <NavigationBar />
    <h>This is a contact page.</h>
    <div className="absolute bottom-0 w-full"> <Footer /> </div>
    </>)
}
export default Contact