import React, { useState, useEffect } from "react";
import SelectCurrency from "../components/SelectCurrency";
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
  }, [currency, amountRange.from, amountRange.to]);

  useEffect(() => {
    setFilteredData(null);
  }, [
    currency,
    amountRange.from,
    amountRange.to,
    dateRange.from,
    dateRange.to
  ]);

  const handleCurrencyChange = value => {
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
    let from = amountRange.from !== 0 ? amountRange.from.replace(/,/g, "") : 0;
    let to = amountRange.to !== 0 ? amountRange.to.replace(/,/g, "") : 0;
    let filteredByAmount = filteredByCurrency.filter(
      o => o.invoiceAmount > from && o.invoiceAmount < to
    );
    let fromDate = new Date(dateRange.from).getTime();
    let toDate = new Date(dateRange.to).getTime();
    let filteredByDate = filteredByAmount.filter(o => {
      let date =
        o.maturityDate.slice(6, 10) +
        o.maturityDate.slice(2, 6) +
        o.maturityDate.slice(0, 1);
      let time = new Date(date).getTime();
      return fromDate < time && time < toDate;
    });
    setFilteredData(filteredByDate);
  };

  return (
    <div>
      <p className="search-title">Please select the required fields</p>
      <div className="search-bar">
        <SelectCurrency
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
          disabled={
            currency === null ||
            amountRange.from === "" ||
            amountRange.to === "" ||
            dateRange.from === "" ||
            dateRange.to === ""
          }
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
