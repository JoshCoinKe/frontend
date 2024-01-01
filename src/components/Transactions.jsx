// Transactions.js

import { useState } from "react";

const Transactions = () => {
  // Updated dummy data
  const dummyData = [
    {
      id: 1,
      type: "received",
      status: "complete",
      amount: 100,
      date: "2024-01-01",
      address: "John Doe",
      source: "PayPal",
    },
    {
      id: 2,
      type: "sent",
      status: "pending",
      amount: 50,
      date: "2024-01-02",
      address: "Jane Smith",
      source: "Bank",
    },
    {
      id: 3,
      type: "received",
      status: "cancelled",
      amount: 75,
      date: "2024-01-03",
      address: "Bob Johnson",
      source: "M-Pesa",
    },
    // Add more dummy data as needed
  ];

  // State to store transactions
  const [transactions] = useState(dummyData);

  // useEffect to simulate fetching data from the server
  // useEffect(() => {
  //   setTransactions(dummyData);
  // }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Type</th>
            <th className="py-2 px-4 border-r">Amount</th>
            <th className="py-2 px-4 border-r">Address</th>
            <th className="py-2 px-4 border-r">Source/Destination</th>
            <th className="py-2 px-4 border-r">Status</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="py-2 px-4 border-r">{transaction.type}</td>
              <td className="py-2 px-4 border-r">{`$${transaction.amount}`}</td>
              <td className="py-2 px-4 border-r">{transaction.address}</td>
              <td className="py-2 px-4 border-r">{transaction.source}</td>
              <td
                className={`py-2 px-4 border-r text-${
                  transaction.status === "complete"
                    ? "green"
                    : transaction.status === "cancelled"
                    ? "red"
                    : "yellow"
                }-500`}
              >
                {transaction.status.charAt(0).toUpperCase() +
                  transaction.status.slice(1)}
              </td>
              <td className="py-2 px-4">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
