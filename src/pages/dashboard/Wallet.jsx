import { useState } from "react";

const Wallet = () => {
  const [balance, setBalance] = useState(100); // Default balance

  const deposit = (amount) => {
    setBalance(balance + amount);
  };

  const withdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    } else {
      alert("Insufficient funds!");
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-100 flex flex-col text-black">
      <div className="text-lg font-bold text-center">My Wallet</div>
      <div className="text-3xl font-bold text-center mb-4">ksh {balance}</div>
      <div className="flex flex-row justify-between mb-4">
        <button
          className="px-4 py-2 rounded-lg bg-green-500 text-white shadow-sm hover:bg-green-700"
          onClick={() => deposit(10)}
        >
          Deposit 10 coins
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-sm hover:bg-red-700"
          onClick={() => withdraw(10)}
        >
          Withdraw 10 coins
        </button>
      </div>
    </div>
  );
};

export default Wallet;
