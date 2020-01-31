import React from "react";
import { addCommas } from "../utils/FormatCurrency";
import { formatDate } from "../utils/FormatDate";
import SelectCurrencySymbol from "../utils/SelectCurrencySymbol";

const DisplaySearchResults = props => {
  const { currency, amountRange, dateRange, data } = props;
  const tableColumnHeadings = [
    "Invoice ID",
    "Reference",
    "Maturity Date",
    "Invoice Amount",
    "Ccy",
    "Buyer",
    "Supplier",
    "Invoice Date"
  ];

  return data.length > 0 ? (
    <div className="container">
      <p className="search-result-title">
        {currency} invoices with value between{" "}
        <SelectCurrencySymbol currency={currency} /> {amountRange.from} --
        <SelectCurrencySymbol currency={currency} /> {amountRange.to} maturing
        between {formatDate(dateRange.from)} and {formatDate(dateRange.to)}
      </p>
      <div className="responsiveTbl">
        <table>
          <thead>
            <tr>
              {tableColumnHeadings.map((th, index) => {
                return <th key={index}>{th}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map(data => {
              return (
                <tr key={data.invoiceId}>
                  <td>{data.invoiceId}</td>
                  <td>{data.reference}</td>
                  <td>{data.maturityDate} </td>
                  <td style={{ textAlign: "right" }}>
                    {addCommas(data.invoiceAmount, data.ccy)}
                  </td>
                  <td>{data.ccy}</td>
                  <td>{data.buyer}</td>
                  <td>{data.supplier}</td>
                  <td>{data.invoiceDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div style={{ marginTop: "20px" }}>No results found</div>
  );
};

export default DisplaySearchResults;
