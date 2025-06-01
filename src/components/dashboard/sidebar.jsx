import { useState } from "react"
import { FaUser, FaUserGroup } from "react-icons/fa6"
import { IoMdAdd } from "react-icons/io"
import { useNavigate } from "react-router-dom"

function Sidebar() {
    const [Dropdown, setDropDown] = useState(false)
    const navigate = useNavigate()
    function handleClickProfile() {
        navigate('/dashboard')
    }
  return (
    <>
        <div onClick={handleClickProfile} className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[15px]">
            <FaUser className="text-[#0d6efd]" />
            <p>Profile</p>
        </div>
        <div onClick={() => setDropDown(false)} className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[15px]">
            <FaUserGroup className="text-[#0d6efd]" />
            <p>Group</p>
        </div>   
        <div className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer">
            <IoMdAdd className="text-[#0d6efd]" />
            <p>Group</p>
        </div>   
    </>
  )
}

export default Sidebar