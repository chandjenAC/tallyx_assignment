import React, { useState, useEffect } from "react";
import SelectInput from "../components/SelectInput";
import AmountRange from "../components/AmountRange";
import DateRange from "../components/DateRange";
import DisplaySearchResults from "../components/DisplaySearchResults";
import "../styles/searchContainer.scss";
import { formatCurrency } from "../utils/FormatCurrency";
import data from "../data/data.json";
const SearchContainer = () => {
  const [currency, setCurrency] = useState(null);
  const [amountRange, setAmountRange] = useState({ from: "", to: "" });
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  useEffect(() => {
    if (amountRange.from !== "" && amountRange.from !== 0)
      setAmountRange(prevValues => ({
        ...prevValues,
        from: formatCurrency(amountRange.from, currency)
      }));
    if (amountRange.to !== "" && amountRange.to !== 0)
      setAmountRange(prevValues => ({
        ...prevValues,
        to: formatCurrency(amountRange.to, currency)
      }));
  }, [currency]);

  const handleCurrencyChange = value => {
    console.log(value);
    setCurrency(value);
  };

  const handleAmountChange = (value, field) => {
    setAmountRange(prevValues => ({
      ...prevValues,
      [field]: formatCurrency(value, currency)
    }));
  };

  const handleDateChange = (value, field) => {
    setDateRange(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  const handleSubmitSearch = () => {
    console.log("sbmitting");
  };

  return (
    <div>
      <p className="search-title">Please select the required fields</p>

      <div className="search-bar">
        <SelectInput
          handleCurrencyChange={handleCurrencyChange}
          currency={currency}
        />
        <AmountRange
          amountRange={amountRange}
          handleAmountChange={handleAmountChange}
        />
        <DateRange dateRange={dateRange} handleDateChange={handleDateChange} />
        <button
          onClick={() => {
            handleSubmitSearch();
          }}
          style={{ minWidth: "150px", padding: "6px", margin: "16px" }}
        >
          Search
        </button>
      </div>
      <DisplaySearchResults
        currency={currency}
        amountRange={amountRange}
        dateRange={dateRange}
        data={data}
      />
    </div>
  );
};

export default SearchContainer;
