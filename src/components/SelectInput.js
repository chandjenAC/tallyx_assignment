import React from "react";

const SelectInput = props => {
  // const symbol=props.currency==="USD"? "&#36;"

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ marginTop: "12px" }}>
        <p style={{ display: "inline", marginRight: "16px" }}>Currency :</p>
      </div>
      <select
        onChange={e => props.handleCurrencyChange(e.target.value)}
        style={{ minWidth: "150px", padding: "6px" }}
      >
        <option value="" disabled selected>
          Select Currency
        </option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="EUR">EUR</option>
      </select>
      {props.currency === "USD" ? (
        <p style={{ display: "inline", marginLeft: "16px" }}> &#36;</p>
      ) : props.currency === "INR" ? (
        <p style={{ display: "inline", marginLeft: "16px" }}> &#8377;</p>
      ) : props.currency === "EUR" ? (
        <p style={{ display: "inline", marginLeft: "16px" }}> &#8364;</p>
      ) : props.currency === "JPY" ? (
        <p style={{ display: "inline", marginLeft: "16px" }}> &#165;</p>
      ) : null}
    </div>
  );
};

export default SelectInput;
