import React, { useState } from "react";
import formatCurrency from "../utils/FormatCurrency";

const DateRange = props => {
  const { dateRange, handleDateChange } = props;

  const onFocus = e => {
    e.currentTarget.type = "date";
  };

  const onBlur = e => {
    e.currentTarget.type = "text";
  };
  //   console.log("date", dateRange);
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ marginTop: "12px" }}>
        {" "}
        <p style={{ display: "inline", padding: "16px" }}>Maturity Date : </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="From"
          onFocus={e => onFocus(e)}
          onBlur={e => onBlur(e)}
          onChange={e => handleDateChange(e.target.value, "from")}
          value={dateRange.from}
          style={{ margin: "16px", padding: "6px", width: "135px" }}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="To"
          onFocus={e => onFocus(e)}
          onBlur={e => onBlur(e)}
          onChange={e => handleDateChange(e.target.value, "to")}
          value={dateRange.to}
          style={{ margin: "16px", padding: "6px", width: "135px" }}
        ></input>
      </div>
    </div>
  );
};

export default DateRange;
