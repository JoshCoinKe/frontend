import { useEffect, useState } from "react";
import axios from "axios";
import { Base_Url } from "../constants/network";

const Users = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${Base_Url/dashboard/users}`);
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    };
    fetchUsers()
  }, [])
  return <div className="max-w-4xl mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">Registered users</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Date Created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">{user.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
};

export default Users;
