import { Button, Form, Input, Modal } from "antd"
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { FaUser, FaUserGroup } from "react-icons/fa6"
import { IoIosArrowDown, IoMdAdd } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { useQuery } from "@tanstack/react-query"

function Sidebar() {
    const {t} = useTranslation()
    const [Dropdown, setDropDown] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
   
    function handleClickShow() {
        setDropDown(prev => prev ? false : true)
    }

    function handleGroupClick() {

    }
    
    const handleOk = async (values) => {
        const {name, password} = values
        await axios.post(`https://nt-shopping-list.onrender.com/api/groups`, {password, name}, {
            headers: {
                "X-auth-token": token
            }
        }).then(() => {
            setIsModalOpen(false)
            toast.success('The group added successfully')
        }).catch(() => {
            toast.error('Something went wrong')
        })
    };

    async function getGroups() {
        try {
            const res = await axios.get(`https://nt-shopping-list.onrender.com/api/groups`, { 
                headers: {
                "X-auth-token": token
            }})
            return res.data
        } 
        catch(err) {console.log(err)}
    }
    const { data: groups } = useQuery({
      queryKey: ["groups"],
      queryFn: getGroups,
    });
    console.log(groups)
  return (
    <>
        <div onClick={() => navigate('/dashboard')} className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[15px]">
            <FaUser className="text-[#0d6efd]" />
            <p>{t("profile")}</p>
        </div>
        <div onClick={() => handleClickShow(true)} className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[15px]">
            <FaUserGroup className="text-[#0d6efd]" />
            <p>Group</p>
            {!Dropdown && <IoIosArrowDown/>}
            {Dropdown && <IoIosArrowDown className="rotate-[180deg]"/>}
        </div>   

        {Dropdown && <div>
            <div onClick={showModal} className="flex items-center gap-[5px] px-[10px] py-[5px] relative rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer mb-[10px]">
                <IoMdAdd className="text-[#0d6efd]" />
                <p>{t("addGroup")}</p>
            </div>
            {groups?.map(item => (
                <div onClick={() => handleGroupClick(item._id)} key={item._id} className="flex items-center gap-[5px] px-[10px] py-[5px] relative rounded-[5px] translate-all duration-200 hover:bg-[#f0f0f0] cursor-pointer pl-[20px]">
                    <p>{item.name}</p>
                </div>
            ))}
            <Modal
                title="Group name and password"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"
                    onFinish={handleOk}
                    style={{ width: '100%'}}
                    initialValues={{
                        name: "",
                        password: ""
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        style={{width: '100%'}} 
                        rules={[{ required: true, message: 'Please enter your name!'}]}
                    >
                        <Input  placeholder='Group name'/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        style={{width: '100%'}} 
                        rules={[{ required: true, message: 'Please enter your password!'}]}
                    >
                        <Input  placeholder='Group password'/>
                    </Form.Item>
                    
                    <div className="flex gap-[7px] items-center ">
                        <Button htmlType="submit"
                            style={{
                                width: '100%',
                                backgroundColor: '#0d6efd',
                                color: 'white',
                                border: 'none',
                                padding: '10px 0',
                                marginTop: '30px'
                            }}
                        >
                            Create
                        </Button>
                        <Button htmlType="button"
                            style={{
                                width: '100%',
                                backgroundColor: '#fff',
                                color: '#000',
                                border: '1px solid #0d6efd',
                                padding: '10px 0',
                                marginTop: '30px'
                            }}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>}
    </>
  )
}

export default Sidebar