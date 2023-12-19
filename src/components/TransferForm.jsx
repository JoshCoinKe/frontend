import { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';

const TransferForm = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("KES");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch list of countries when the component mounts
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countriesData = response.data.map(country => ({
          value: country.currencies[0].code,
          label: country.currencies[0].name,
        }));
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    // Fetch exchange rate when the component mounts or when currencies change
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        setExchangeRate(response.data.rates[targetCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    if (baseCurrency && targetCurrency) {
      fetchExchangeRate();
    }
  }, [baseCurrency, targetCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleBaseCurrencyChange = (selectedOption) => {
    setBaseCurrency(selectedOption.value)
  }

  const handleTargetCurrencyChange = (selectedOption) => {
    setTargetCurrency(selectedOption.value)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md text-black">
      <div className="mb-4">
        <label
          className="block text-sm font-bold mb-2 text-gray-700"
        >
          Amount:
        </label>
        <input
          type="number"
          id="recipient"
          className="w-full mt-1 p-2 border rounded border-gray-300"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-bold  mb-2 text-gray-700"
        >
          From Currency:
        </label>
        <Select
          value={{value: baseCurrency, label: baseCurrency}}
          onChange={handleBaseCurrencyChange}
          options={[
            {value: 'USD', label: 'USD'},
            {value: 'EUR', label: 'EUR'},
            {value: 'KES', label: 'KES'},
            {value: 'TZS', label: 'TZS'},
            {value: 'UGX', label: 'UGX'},
            {value: 'ZMW', label: 'ZMW'},
            {value: 'XAF', label: 'XAF'},
            {value: 'NGN', label: 'NGN'},
            {value: 'GHS', label: 'GHS'},
          ]}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="fromCurrency"
          className="block text-sm font-bold mb-2 text-gray-700"
        >
         To Currency:
        </label>
        <Select
          value={{value: targetCurrency, label:targetCurrency}}
          onChange={handleTargetCurrencyChange}
          options={[
            {value: 'KES', label: 'KES'},
            {value: 'TZS', label: 'TZS'},
            {value: 'UGX', label: 'UGX'},
            {value: 'ZMW', label: 'ZMW'},
            {value: 'XAF', label: 'XAF'},
            {value: 'NGN', label: 'NGN'},
            {value: 'GHS', label: 'GHS'},
          ]}
        />
      </div>

      <div>
        <p className="text-gray-700 font-bold">
          {exchangeRate !== null &&
            `You send ${amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${baseCurrency} and they will receive ${
              (amount * exchangeRate).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
            } ${targetCurrency}`
          }
        </p>
      </div>

    </div>
  );
};

export default TransferForm;
