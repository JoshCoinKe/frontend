import { useState } from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="bg-gray-800 fixed top-0  z-10 w-full">
      <div className="flex items-center justify-between m-auto h-20 p-4 max-w-screen-lg">
        <Link
          to="/"
          className=" hover:border rounded hover:border-yellow-500 hover:bg-black px-4 py-2 flex items-center text-white"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="font-bold text-xl">Bitcoin</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} className="text-white" />
          ) : (
            <FaBars size={30} className="text-white" />
          )}
        </div>

        {/* Links */}
        <ul
          className={`${
            click
              ? "flex flex-col absolute top-20 left-0 w-full bg-gray-800"
              : "hidden"
          } lg:flex lg:items-center lg:w-auto lg:flex-row`}
        >
          <NavItem to="#" onClick={closeMenu}>
            Blogs
          </NavItem>
          <NavItem to="#" onClick={closeMenu}>
            About
          </NavItem>
          <NavItem to="#" onClick={closeMenu}>
            Contact
          </NavItem>
          <NavItem to="#" onClick={closeMenu}>
            FAQs
          </NavItem>

          {/* Login and Sign up Buttons */}
          <div className="lg:flex lg:items-center">
            <NavItem to="/login" onClick={closeMenu}>
              Login
            </NavItem>
            <NavItem to="/register" onClick={closeMenu}>
              Sign up
            </NavItem>
          </div>
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ to, children, onClick }) => (
  <li className="p-4 font-medium">
    <Link
      to={to}
      className="hover:border rounded hover:border-yellow-500 hover:bg-black px-4 py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
