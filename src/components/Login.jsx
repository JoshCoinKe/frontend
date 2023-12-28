import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Welcome to REMIPAI</h2>
          <p>
            We make it easy for everyone to send money instantly anywhere,
            anytime.
          </p>

          <form className="mt-4">
            <div className="mb-4 relative">
              <label htmlFor="phone" className="block text-sm font-bold ">
                Mobile Number
              </label>
              <PhoneInput
                inputProps={{
                  id: "phone",
                  name: "phone",
                  required: true,
                }}
                country="ke"
                value={phoneNumber}
                onChange={handlePhoneChange}
                containerClass="mt-1 w-full"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md pr-10"
                placeholder="Enter your password"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer mt-5"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>

            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-green-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue active:bg-green-800 w-full"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm">
            Do not have an account?{" "}
            <Link to="/register" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
