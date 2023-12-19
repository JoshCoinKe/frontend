import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  }

  return (
    <div className="container mt-20 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* text */}
        <div className="w-full h-full basis-1/2 self-center lg:p-10">
          <div className="p-6">
            <h1>Welcome</h1>
            <p>
              Create your account and send money anytime, anywhere instantly in
              three simple steps.
            </p>
          </div>

          <div
            id="div03"
            className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black "
          >
            <p
              className="bg-green-500"
              style={{
                borderRadius: "50%",
                width: "15%",
                height: "100%", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </p>
            <div id="div05">
              <h1 className="text-xl font-medium text-black">
                Quick & Free sign up
              </h1>
              <p className="text-slate-500">
                Enter your email address to create an account, your information
                is secured.
              </p>
            </div>
          </div>
          <div
            id="div03"
            className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black "
          >
            <p
              className="bg-green-500"
              style={{
                borderRadius: "50%",
                width: "15%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              2
            </p>
            <div id="div05">
              <h1 className="text-xl font-medium text-black">
                Verify your KYC
              </h1>
              <p className="text-slate-500">
                Complete your KYC verification in easy steps to sending money
                anywhere.
              </p>
            </div>
          </div>
          <div
            id="div03"
            className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black "
          >
            <p
              className="bg-green-500"
              style={{
                borderRadius: "50%",
                width: "15%",
                height: "100%", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              3
            </p>
            <div id="div05">
              <h1 className="text-xl font-medium text-black">
                Send money instant
              </h1>
              <p className="text-slate-500">
                Enter receiver bank details and send money instant, send money
                anytime, anywhere.
              </p>
            </div>
          </div>
          <p className="">Privacy Policy</p>
        </div>
        {/* form */}
        <div className="basis-1/2 p-8 rounded shadow-md w-50 mt-20 mb-5 bg-white text-black max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Create your BITCOIN account
          </h2>
          <p>Send money anytime, anywhere instantly</p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="e.g John Doe"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="e.g johndoe@example.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
                Mobile Number
              </label>
              <PhoneInput
              inputProps={{
                id: "phone",
                name: "phoe",
                required: true,
              }}
              country="ke"
              value={phoneNumber}
              onChange={handlePhoneChange}
              containerClass="mt-1 w-full"
            />
              {/* <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter mobile number"
              /> */}
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
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

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
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

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue active:bg-green-800 w-full"
            >
              Create account
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
