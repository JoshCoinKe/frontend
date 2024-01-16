import { EditOutlined } from "@mui/icons-material";

const Profile = () => {
  return (
    <div className="ml-10 mt-10 max-w-md p-4  rounded shadow-lg text-black">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <p className="text-sm">
        You have full control to manage your own account settings.
      </p>
      <hr className="my-4 border-t border-gray-300" />

      <div className="mb-4 flex items-center">
        <label htmlFor="fullName" className="mr-2 w-1/3 font-semibold">
          Full Name:
        </label>
        <p id="fullName" className="flex-grow">
          John Doe <EditOutlined className="cursor-pointer ml-auto" />
        </p>
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="mobile" className="mr-2 w-1/3 font-semibold">
          Mobile Number:
        </label>
        <p id="mobileNumber" className="flex-grow">
          +254 741000000 <EditOutlined className="cursor-pointer ml-auto" />
        </p>
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="email" className="mr-2 w-1/3 font-semibold">
          Email address:
        </label>
        <p id="email" className="flex-grow">
          johndoe@example.com{" "}
          <EditOutlined className="cursor-pointer ml-auto" />
        </p>
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="password" className="mr-2 w-1/3 font-semibold">
          Password:
        </label>
        <button className="px-4 py-2 text-white bg-green-500 rounded">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
