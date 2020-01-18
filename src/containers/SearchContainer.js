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
  const [filteredData, setFilteredData] = useState(null);

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
    let filteredByCurrency = data.filter(o => o.ccy === currency);
    console.log("filtered data by currency", filteredByCurrency);
    let from = amountRange.from.replace(/\,/g, "");
    let to = amountRange.to.replace(/\,/g, "");

    console.log("fro amounnt", from);
    console.log("amounnt to", to);
    let filteredByAmount = filteredByCurrency.filter(
      o => o.invoiceAmount > from && o.invoiceAmount < to
    );

    console.log("filtered data by ammouunt", filteredByAmount);

    let fromDate = new Date(dateRange.from).getTime();
    let toDate = new Date(dateRange.to).getTime();

    let filteredByDate = filteredByAmount.filter(o => {
      let date =
        o.invoiceDate.slice(6, 10) +
        o.invoiceDate.slice(2, 6) +
        o.invoiceDate.slice(0, 1);
      console.log("slice test", date);
      let time = new Date(date).getTime();
      return fromDate < time && time < toDate;
    });

    console.log("filtered data", filteredByDate);
    setFilteredData(filteredByDate);
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
      {filteredData && (
        <DisplaySearchResults
          currency={currency}
          amountRange={amountRange}
          dateRange={dateRange}
          data={filteredData}
        />
      )}
    </div>
  );
};

export default SearchContainer;
