import React from "react";
import SelectCurrencySymbol from "./SelectCurrencySymbol";
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
      <SelectCurrencySymbol currency={props.currency} />
    </div>
  );
};

export default SelectInput;
