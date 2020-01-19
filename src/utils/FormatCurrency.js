export function formatCurrency(nStr, format) {
  let decimal = nStr.split(".");
  if (decimal.length - 1 > 0) {
    if (!isNaN(decimal[1])) {
      if (
        ((format === "USD" || format === "INR") && decimal[1].length > 2) ||
        (format === "EUR" && decimal[1].length > 3) ||
        (format === "JPY" && decimal[1].length === 0)
      ) {
        return nStr.slice(0, -1);
      }
      return nStr;
    } else return nStr.slice(0, -1);
  }
  nStr = nStr.toString();
  nStr = nStr.replace(/,/g, "");
  nStr = parseInt(nStr, 10);
  if (!isNaN(nStr)) {
    return new Intl.NumberFormat(
      format === "USD"
        ? "en-US"
        : format === "EUR"
        ? "en-FR"
        : format === "JPY"
        ? "ja-JP"
        : "en-IN"
    ).format(nStr);
  } else return 0;
}

export function addCommas(nStr, ccy) {
  switch (ccy) {
    case "USD":
      return new Intl.NumberFormat("en-US").format(nStr);
    case "EUR":
      return new Intl.NumberFormat("en-FR").format(nStr);
    case "INR":
      return new Intl.NumberFormat("en-IN").format(nStr);
    case "JPY":
      return new Intl.NumberFormat("ja-JP").format(nStr);
    default:
      return null;
  }
}
