import React from "react";

const SelectCurrencySymbol = props => {
  return props.currency === "USD" ? (
    <> &#36;</>
  ) : props.currency === "INR" ? (
    <> &#8377;</>
  ) : props.currency === "EUR" ? (
    <> &#8364;</>
  ) : props.currency === "JPY" ? (
    <> &#165;</>
  ) : null;
};

export default SelectCurrencySymbol;
