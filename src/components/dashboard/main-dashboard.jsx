import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"

function MainDashboard() {
  return (
    <div className="relative flex main_bg ">
        <div className="md:w-[300px] bg-[#fff] p-[20px] absolute h-[100vh] left-0 z-[10]">
            <Sidebar/>
        </div>
        <div className="md:w-[100%] main_bg absolute right-0 top-0  h-[100vh] bg-[red]">
            <Outlet/>
        </div>  
    </div>
  )
}

export default MainDashboard