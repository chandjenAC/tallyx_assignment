import React, { useState } from "react";
import formatCurrency from "../utils/FormatCurrency";

const AmountRange = props => {
  const { amountRange, handleAmountChange } = props;
  //   console.log("ammotn", amountRange);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexFlow: "row wrap",
        justifyContent: "center"
      }}
    >
      <div style={{ marginTop: "12px" }}>
        <p style={{ display: "inline", padding: "16px" }}>Invoice Amount :</p>
      </div>
      <div>
        <input
          placeholder="From"
          onChange={e => handleAmountChange(e.target.value, "from")}
          value={amountRange.from}
          style={{ margin: "16px", padding: "6px", width: "150px" }}
        ></input>
      </div>
      <div>
        <input
          placeholder="To"
          onChange={e => handleAmountChange(e.target.value, "to")}
          value={amountRange.to}
          style={{ margin: "16px", padding: "6px", width: "150px" }}
        ></input>
      </div>
    </div>
  );
};

export default AmountRange;
