import { Dropdown } from 'antd'
import { IoSettingsSharp, IoNotificationsOutline } from 'react-icons/io5'
import { FaBlog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FiRefreshCw } from 'react-icons/fi'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa6'
import { LuSearch } from 'react-icons/lu'

function Header() {
	const menu = {
		items: [
			{
				key: 'logout',
				label: (
					<div className='flex items-center gap-[5px] max-[500px]:gap-2'>
						<AiOutlineLogout className='text-[#000] text-[20px] max-[500px]:text-[16px]' />
						<p className='text-[14px] font-medium text-[#000] max-[500px]:text-[12px]'>
							Log out
						</p>
					</div>
				),
				onClick: () => alert('Log out clicked'),
			},
		],
	}

	return (
		<header className='w-full py-2 px-5 max-[620px]:py-[10px] shadow-md fixed top-0 left-0 z-50 bg-white'>
			<nav
				className='
          flex items-center justify-between gap-[50px]
          max-[800px]:gap-[30px]
          max-[620px]:grid max-[620px]:grid-cols-2 max-[620px]:gap-4
        '
			>
				<div className='flex items-center gap-[30px] max-[620px]:order-1 max-[500px]:gap-3'>
					<Link to='/'>
						<FaBlog className='text-[32px] text-[rgb(13,109,252)] max-[500px]:text-[24px]' />
					</Link>
					<div
						className='
            flex items-center justify-center cursor-pointer bg-[#0d6efd]
            w-[80px] h-[33px] rounded-[30px]
            max-[500px]:w-[60px] max-[500px]:h-[28px]
          '
					>
						<FaPlus className='text-[15px] text-[#fff] max-[500px]:text-[12px]' />
						<p className='text-[#fff] font-medium ml-1 max-[500px]:text-[12px]'>
							New
						</p>
					</div>
				</div>

				<div
					className='
    flex items-center gap-[5px]
     w-full max-w-[700px] h-[50px] max-[768px]:h-[40px] px-[10px]
          max-[620px]:order-3 max-[620px]:col-span-2 min-w-0
          max-[500px]:h-[36px]
    rounded-md border border-gray-300
    focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300
    focus-within:shadow-sm
    transition-all duration-200
    max-[500px]:text-sm max-[500px]:px-3 max-[500px]:py-1.5
  '
				>
					<LuSearch />
					<input
						type='text'
						placeholder='Search group and join...'
						className='
      w-full h-full
      outline-none
      bg-transparent
      max-[500px]:text-sm max-[500px]:px-3 max-[500px]:py-1.5
    '
					/>
				</div>

				<div
					className='
          flex items-center gap-[30px]
          max-[620px]:order-2 max-[620px]:col-span-1
          justify-end
          max-[500px]:gap-4
        '
				>
					<FiRefreshCw className='text-[#000] text-[24px] cursor-pointer max-[500px]:text-[18px]' />
					<div className='relative'>
						<IoNotificationsOutline className='text-[#000] text-[24px] cursor-pointer max-[500px]:text-[18px]' />
						<div className='absolute top-[-10px] right-[-13px] px-[7px] rounded-[20px] bg-[#dc3545] max-[500px]:px-[5px]'>
							<p className='text-[12px] font-medium text-white max-[500px]:text-[10px]'>
								9+
							</p>
						</div>
					</div>
					<Dropdown
						menu={menu}
						trigger={['click']}
						placement='bottomRight'
						overlayClassName='w-[150px]'
					>
						<div className='cursor-pointer'>
							<IoSettingsSharp className='text-[#000] text-[24px] max-[500px]:text-[18px]' />
						</div>
					</Dropdown>
				</div>
			</nav>
		</header>
	)
}

export default Header
