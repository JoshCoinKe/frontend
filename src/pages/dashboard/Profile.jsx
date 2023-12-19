import { EditOutlined } from "@mui/icons-material";
const Profile = () => {
  return (
    <div className="ml-10 mt-10 max-w-md p-4 bg-white rounded shadow text-black">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <p className="text-sm">
        You have full control to manage your own account setting
      </p>
      <br className="border bg-gray-600" />
      <div className="mb-4 flex items-center">
        <label htmlFor="FullName" className="mr-2 w-50 font-semibold">
          Full Name:
        </label>
        <p id="fullName" className="flex-grow">
          John Doe <EditOutlined className="cursor-pointer ml-auto" />
        </p>
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="mobile" className="mr-2 w-24 font-semibold">
          MObile Number:
        </label>
        <p id="mobileNumber" className="flex-grow">
          +254 741000000 <EditOutlined className="cursor-pointer ml-auto" />
        </p>
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="email" className="mr-2 w-24 font-semibold">
          Email address:
        </label>
        <p id="fullName" className="flex-grow">
          johndoe@example.com{" "}
          <EditOutlined className="cursor-pointer ml-auto" />
        </p>
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="password" className="mr-2 w-24 font-semibold">
          Password:
        </label>
        <button className="px-4 text-green-500">Change Password</button>
      </div>
    </div>
  );
};

export default Profile;