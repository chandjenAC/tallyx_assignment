export const formatCurrency = (amount, format) => {
  let decimal = amount.split(".");
  if (decimal.length > 1) {
    if (!isNaN(decimal[1])) {
      if (
        ((format === "USD" || format === "INR") && decimal[1].length > 2) ||
        (format === "EUR" && decimal[1].length > 3) ||
        (format === "JPY" && decimal[1].length === 0)
      ) {
        return amount.slice(0, -1);
      }
      return amount;
    } else return amount.slice(0, -1);
  }
  amount = amount.toString();
  amount = amount.replace(/,/g, "");
  amount = parseInt(amount, 10);
  if (!isNaN(amount)) {
    return addCommas(amount, format);
  } else return 0;
};

export const addCommas = (amount, format) => {
  return new Intl.NumberFormat(
    format === "USD"
      ? "en-US"
      : format === "EUR"
      ? "en-FR"
      : format === "JPY"
      ? "ja-JP"
      : "en-IN"
  ).format(amount);
};

export const formatCurrencyOnCurrencyChange = (amount, format) => {
  if (format === "JPY") {
    let decimal = amount.split(".");
    amount = decimal[0];
  }
  amount = amount.toString();
  amount = amount.replace(/,/g, "");
  amount = parseFloat(amount, 10);
  if (!isNaN(amount)) {
    return addCommas(amount, format);
  } else return 0;
};
