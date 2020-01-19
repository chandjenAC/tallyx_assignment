import React from "react";
import SelectCurrencySymbol from "../utils/SelectCurrencySymbol";

const SelectCurrency = props => {
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
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select Currency
        </option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="EUR">EUR</option>
      </select>
      <div style={{ marginLeft: "12px" }}>
        <SelectCurrencySymbol currency={props.currency} />
      </div>
    </div>
  );
};

export default SelectCurrency;
