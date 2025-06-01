import { Modal } from "antd"
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { FaUser, FaUserGroup } from "react-icons/fa6"
import { IoMdAdd } from "react-icons/io"
import { useNavigate } from "react-router-dom"

function Sidebar() {
    const {t} = useTranslation()
    const [Dropdown, setDropDown] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const navigate = useNavigate()
   
    function handleClickProfile() {
        navigate('/dashboard')
    }
    function handleClickShow() {
        setDropDown(prev => prev ? false : true)
    }
  return (
    <>
        <div onClick={handleClickProfile} className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[15px]">
            <FaUser className="text-[#0d6efd]" />
            <p>{t("profile")}</p>
        </div>
        <div onClick={() => handleClickShow(true)} className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[15px]">
            <FaUserGroup className="text-[#0d6efd]" />
            <p>{t("groups")}</p>
        </div>   

        {Dropdown && <div>
            <div onClick={showModal} className="flex items-center gap-[5px] px-[10px] py-[5px] relative rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer">
                <IoMdAdd className="text-[#0d6efd]" />
                <p>{t("addGroup")}</p>
            </div>
             <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>}
    </>
  )
}

export default Sidebar