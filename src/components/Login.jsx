import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded shadow-md w-50 max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Welcome to BITCOIN</h2>
        <p>
          We make it easy for everyone to send money instantly anywhere,
          anytime.
        </p>

        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-bold ">
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter mobile number"
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
  );
};

export default Login;
