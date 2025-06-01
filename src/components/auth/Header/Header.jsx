import { Input, Dropdown } from 'antd';
import { IoSettingsSharp, IoNotificationsOutline } from 'react-icons/io5';
import { FaBlog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiRefreshCw } from 'react-icons/fi';

function Header() {
  const menu = {
    items: [
      {
        key: 'logout',
        label: 'Log out',
        onClick: () => alert('Log out clicked'),
      },
    ],
  };

  return (
    <header className="w-full m-auto h-auto py-[5px] px-[20px] shadow-md">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <FaBlog className="text-[32px] text-[rgb(13,109,252)]" />
        </Link>
        <div className="w-[600px] h-[50px]">
          <Input
            placeholder="Search group and join..."
            size="large"
            allowClear
            style={{ height: '100%' }}
          />
        </div>

        <div className="flex items-center gap-[30px]">
          <FiRefreshCw className="text-[#000] text-[24px] cursor-pointer" />
          <div className="relative">
            <IoNotificationsOutline className="text-[#000] text-[24px] cursor-pointer" />
            <div className="absolute top-[-10px] right-[-13px] px-[7px] rounded-[20px] bg-[#dc3545]">
              <p className="text-[12px] font-medium text-white">9+</p>
            </div>
          </div>
          <div className="relative">
            <Dropdown menu={menu} trigger={['click']} placement="bottomRight" overlayClassName='w-[150px]'>
              <div className="cursor-pointer">
                <IoSettingsSharp className="text-[#000] text-[24px]" />
              </div>
            </Dropdown>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
