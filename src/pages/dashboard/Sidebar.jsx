import {
  AccountBalanceWalletOutlined,
  ContactSupportOutlined,
  OfflineShareOutlined,
  PaidOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import { useState } from "react";

const Sidebar = ({ userRole, onSidebarItemClick }) => {
  const [activeItem, setActiveItem] = useState("transactions");
  const sidebarItems = [
    { icon: <PaidOutlined />, text: "Transactions", key: "transactions" },
    {
      icon: <PaidOutlined />,
      text: "All Transactions",
      key: "allTransactions",
      visible: userRole === "admin",
    },
    {
      icon: <Person2Outlined />,
      text: "Users",
      key: "users",
      visible: userRole === "admin",
    },
    { icon: <Person2Outlined />, text: "My Account", key: "profile" },
    { icon: <AccountBalanceWalletOutlined />, text: "Wallet", key: "wallet" },
    { icon: <OfflineShareOutlined />, text: "Refer & earn", key: "refer" },
    { icon: <ContactSupportOutlined />, text: "Help", key: "help" },
  ];

  // In Sidebar component
  const handleItemClick = (item) => {
    console.log("Clicked sidebar item key:", item.key);
    setActiveItem(item.key);
    onSidebarItemClick(item.key);
  };

  return (
    <div className="text-black bg-gray-900 h-full w-40 flex flex-col">
      {sidebarItems.map((item) => (
        <div
          key={item.key}
          className={`flex text-white p-4 hover:bg-gray-700 transition duration-300 cursor-pointer ${
            activeItem === item.key ? "bg-blue-600" : ""
          }`}
          onClick={() => handleItemClick(item)}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
