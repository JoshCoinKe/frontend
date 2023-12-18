// src/components/TransferForm.js
import { useState, useEffect } from "react";
import axios from "axios";

const TransferForm = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    // Fetch exchange rate when the component mounts or when currencies change
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/exchange-rate?from=${fromCurrency}&to=${toCurrency}`
        );
        setExchangeRate(response.data.rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleTransfer = () => {
    // Calculate the amount to be received based on the exchange rate
    const receivedAmount = (parseFloat(amount) * exchangeRate).toFixed(2);
    setConvertedAmount(receivedAmount);

    // Implement logic to send the transfer request to the backend
    console.log(
      `Transfer ${amount} ${fromCurrency} to ${recipient}. You will receive ${receivedAmount} ${toCurrency}`
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Money Transfer</h2>
      <div className="mb-4">
        <label
          htmlFor="recipient"
          className="block text-sm font-medium text-gray-600"
        >
          Recipient
        </label>
        <input
          type="text"
          id="recipient"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter recipient's name or account number"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-600"
        >
          Amount
        </label>
        <input
          type="text"
          id="amount"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="fromCurrency"
          className="block text-sm font-medium text-gray-600"
        >
          From Currency
        </label>
        <select
          id="fromCurrency"
          className="mt-1 p-2 w-full border rounded-md"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {/* Add options for different currencies */}
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="toCurrency"
          className="block text-sm font-medium text-gray-600"
        >
          To Currency
        </label>
        <select
          id="toCurrency"
          className="mt-1 p-2 w-full border rounded-md"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {/* Add options for different currencies */}
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleTransfer}
      >
        Transfer Money
      </button>
      {convertedAmount && (
        <p className="mt-4 text-green-600">
          You will receive approximately {convertedAmount} {toCurrency}.
        </p>
      )}
    </div>
  );
};

export default TransferForm;
