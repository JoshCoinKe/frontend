import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Base_Url } from "../constants/network";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: Yup.string().required("Please enter a valid phone number"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(`${Base_Url}/register`, values);

      if (response && response.data) {
        formik.resetForm();
        navigate("/login");
      } else {
        console.log("Registration failed");
      }
    } catch (err) {
      if (err && err.response) formik.setFieldError(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-5">
        {/* text */}
        <div className="w-full h-full basis-1/2 self-center lg:p-10">
          <div className="p-6 text-white">
            <h1>Welcome</h1>
            <p>
              Create your account and send money anytime, anywhere instantly in
              three simple steps.
            </p>
          </div>

          <div
            id="div03"
            className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg "
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
            className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg  "
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
            className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg "
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
          <p className="text-white">Privacy Policy</p>
        </div>
        {/* form */}
        <div className="basis-1/2 p-8 rounded shadow-md w-50 mt-20 mb-5 bg-white  max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Create your REMIPAI account
          </h2>
          <p>Send money anytime, anywhere instantly</p>

          <form onSubmit={formik.handleSubmit}>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
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
                  name: "phone",
                  required: true,
                }}
                country="ke"
                containerClass="mt-1 w-full"
                onChange={(value) => formik.setFieldValue("phone", value)}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500">{formik.errors.phone}</div>
              ) : null}
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

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md pr-10"
                placeholder="confirm your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer mt-5"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </span>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue active:bg-green-800 w-full"
              disabled={!formik.isValid}
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
      <Footer />
    </>
  );
};

export default Register;
