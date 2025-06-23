import "../styles/tailwind.css"

function ActivityTracker() {
    return(<div className="flex w-125 h-40 mt-30 ml-5 bg-[rgba(255,255,255,0.04)] text-gray-200 justify-center items-center">
        <div>
            <p className="text-gray-200 text-[2rem]">Projects</p>
        </div>
        <hr className="bg-gray-200 rotate-90 w-20"></hr>
        <div>
            <p className="text-gray-200 text-[2rem]">Experience</p>
        </div>
        
    </div>)
}
export default ActivityTracker