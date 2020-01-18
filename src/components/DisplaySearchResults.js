import React from "react";
import { addCommas } from "../utils/FormatCurrency";
import "../styles/displaySearchResults.scss";

const DisplaySearchResults = props => {
  const { currency, amountRange, dateRange } = props;
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

  return (
    <div className="container">
      <p className="search-result-title">
        {currency} invoices with value between {amountRange.from}-
        {amountRange.to} maturing between {dateRange.from} and {dateRange.to}
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
            {props.data.map(data => {
              return (
                <tr key={data.invoiceId}>
                  <td>{data.invoiceId}</td>
                  <td>{data.reference}</td>
                  <td>{data.maturityDate} </td>
                  <td>{addCommas(data.invoiceAmount, data.ccy)}</td>
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
  );
};

export default DisplaySearchResults;
