// Footer.js
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
const Footer = () => {
  return (
    <div className="container w-full h-auto text-white">
      <div className="mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center p-10">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center text-white">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="font-bold text-xl">REMIPAI</span>
        </Link>
        {/* Links on the right */}
        <div className="flex flex-col md:flex-row md:space-x-6 lg:flex-row">
          {/* Navigate */}
          <div className="mb-4 md:mb-0">
            <span className="block font-bold">Navigate</span>
            <ul className="list-none p-0">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mb-4 md:mb-0">
            <span className="block font-bold">Support</span>
            <ul className="list-none p-0">
              <li>
                <Link href="/help">Help</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-4 md:mb-0">
            <span className="block font-bold">Legal</span>
            <ul className="list-none p-0">
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <span className="block font-bold">Social Media</span>
            <ul className="list-none p-0">
              <li>
                <Link href="/facebook">Facebook</Link>
              </li>
              <li>
                <Link href="/twitter">Twitter</Link>
              </li>
              {/* Add other social media icons and links */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
