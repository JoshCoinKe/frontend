import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
//import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
//import { useUser } from "../state/UserContext";
import { Base_Url } from "../constants/network";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(`${Base_Url}/login`, values);
      if (response) {
        alert("Welcome back. Authenticating...");
        const user = response.data.user;
        const token = response.data.authorization;
        navigate("/dashboard", { state: { user, token } });
      }
    } catch (err) {
      if (err && err.response) formik.setFieldError(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handlePhoneChange = (value) => {
  //   setPhoneNumber(value);
  // };

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

          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4 relative">
              <label htmlFor="email" className="block text-sm font-bold ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="e.g johndoe@example.com"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            {/* <div className="mb-4 relative">
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
            </div> */}

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md pr-10"
                placeholder="********"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer mt-5"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
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
