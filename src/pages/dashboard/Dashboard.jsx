import { useState } from "react";

const Transaction = ({ amount, type, date }) => (
  <div className="flex items-center justify-between border-b py-2">
    <div className="flex items-center">
      <span className="mr-2">{type === "deposit" ? "+" : "-"}</span>
      <span className="font-bold">{amount} coins</span>
    </div>
    <div className="text-gray-500">{date}</div>
  </div>
);

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const sendMoney = (amount) => {
    // Implement logic to send money (API call, update balance)
    // Update transactions list after successful send
    setTransactions([
      ...transactions,
      { amount: -amount, type: "withdrawal", date: new Date().toISOString() },
    ]);
  };

  return (
    <div
      className="p-4 rounded-lg shadow-md bg-gray-100 text-black
    "
    >
      <div className="text-lg font-bold mb-4">Transactions</div>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Transaction key={transaction.date} {...transaction} />
        ))
      ) : (
        <p className="">No transactions yet.</p>
      )}
      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-sm hover:bg-blue-700"
          onClick={() => sendMoney(10)} // Change amount as needed
        >
          Send Money
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
