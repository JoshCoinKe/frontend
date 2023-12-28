import { useState } from "react";

const Wallet = () => {
  const [balance, setBalance] = useState(100); // Default balance

  const deposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const withdraw = (amount) => {
    if (balance >= amount) {
      setBalance((prevBalance) => prevBalance - amount);
    } else {
      alert("Insufficient funds!");
    }
  };

  return (
    <div className="mx-auto max-w-lg p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="text-xl font-bold text-center mb-4">My Wallet</div>
      <div className="text-3xl font-bold text-center mb-4">ksh {balance}</div>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="w-full px-4 py-2 rounded-lg bg-green-500 text-white shadow-sm hover:bg-green-700"
          onClick={() => deposit(10)}
        >
          Deposit 10 coins
        </button>
        <button
          className="w-full px-4 py-2 rounded-lg bg-red-500 text-white shadow-sm hover:bg-red-700"
          onClick={() => withdraw(10)}
        >
          Withdraw 10 coins
        </button>
      </div>
    </div>
  );
};

export default Wallet;
