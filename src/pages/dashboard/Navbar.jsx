import { useState } from "react";
import {
  AccountBalanceWalletOutlined,
  LogoutOutlined,
  OfflineShareOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <nav className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center relative">
      <div className="text-white mb-2 sm:mb-0">
        <Link to="/dashboard">Logo</Link>
      </div>
      <div className="relative">
        <div
          className="text-white cursor-pointer mb-2 sm:mb-0"
          onClick={handleDropdownToggle}
        >
          User name
        </div>
        {isDropdownOpen && (
          <div className="mt-2 sm:mt-0 bg-white p-2 rounded shadow-lg absolute right-0 text-black w-40 left-auto">
            <ul className="">
              <li className="flex items-center space-x-2 cursor-pointer whitespace-nowrap pb-2">
                <Person2Outlined />
                <span>Profile</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer whitespace-nowrap pb-2">
                <AccountBalanceWalletOutlined />
                <span>Wallet</span>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer whitespace-nowrap pb-2">
                <OfflineShareOutlined />
                <span>Refer and Earn</span>
              </li>
              <li
                className="flex items-center space-x-2 cursor-pointer whitespace-nowrap pb-2"
                onClick={handleLogout}
              >
                <LogoutOutlined />
                <span>Log Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
