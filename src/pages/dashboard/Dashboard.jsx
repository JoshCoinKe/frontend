import { useState, createElement } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Transactions from "../../components/Transactions";
import AllTransactions from "../../components/AllTransactions";
import Users from "../../components/Users";
import Profile from "../../components/Profile";
import Wallet from "../../components/Wallet";
import Refer from "../../components/Refer";
import Help from "../../components/Help";

const components = {
  transactions: Transactions,
  allTransactions: AllTransactions,
  users: Users,
  profile: Profile,
  wallet: Wallet,
  refer: Refer,
  help: Help,
};

const Dashboard = ({ userRole }) => {
  const [selectedComponent, setSelectedComponent] = useState(
    components.transactions
  );

  // In Dashboard component
  const handleSidebarItemClick = (item) => {
    console.log("Clicked item key:", item);
    const component = components[item];
    console.log("Selected component:", component);
    setSelectedComponent(createElement(component));
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        userRole={userRole}
        onSidebarItemClick={handleSidebarItemClick}
      />
      <div className="flex flex-col flex-1 overflow-hidden bg-white m-5">
        <Navbar userRole={userRole} />
        {selectedComponent}
      </div>
    </div>
  );
};

export default Dashboard;
