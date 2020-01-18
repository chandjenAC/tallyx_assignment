import React from "react";

const SelectCurrencySymbol = props => {
  return props.currency === "USD" ? (
    <p style={{ display: "inline" }}> &#36;</p>
  ) : props.currency === "INR" ? (
    <p style={{ display: "inline" }}> &#8377;</p>
  ) : props.currency === "EUR" ? (
    <p style={{ display: "inline" }}> &#8364;</p>
  ) : props.currency === "JPY" ? (
    <p style={{ display: "inline" }}> &#165;</p>
  ) : null;
};

export default SelectCurrencySymbol;
