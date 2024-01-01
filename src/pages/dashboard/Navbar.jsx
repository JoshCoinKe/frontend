import { useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Base_Url } from "../../constants/network";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state && location.state.user;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      const token = location.state && location.state.token.token;

      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        await axios.post(`${Base_Url}/dashboard/logout`, null, { headers });
        navigate("/login");
      } else {
        console.error("Not Authorized");
      }
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center relative">
      <div className="text-white mb-2 sm:mb-0">Remipai</div>
      <div className="relative">
        <div
          className="text-white cursor-pointer mb-2 sm:mb-0"
          onClick={handleDropdownToggle}
        >
          {user.name}
        </div>
        {isDropdownOpen && (
          <div className="mt-2 sm:mt-0 bg-white p-2 rounded shadow-lg absolute right-0 text-black w-40 left-auto">
            <ul className="">
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
