export function formatCurrency(nStr, format) {
  let decimal = nStr.split(".");
  if (decimal.length - 1 > 0) {
    if (!isNaN(decimal[1])) {
      if (
        ((format === "en-US" || format === "en-IN") && decimal[1].length > 2) ||
        (format === "de-DE" && decimal[1].length > 3) ||
        (format === "ja-JP" && decimal[1].length === 0)
      ) {
        return nStr.slice(0, -1);
      }
      return nStr;
    } else return nStr.slice(0, -1);
  }
  nStr = nStr.toString();
  nStr = nStr.replace(/\,/g, "");
  nStr = parseInt(nStr, 10);
  if (!isNaN(nStr)) {
    return new Intl.NumberFormat(format ? format : "en-IN").format(nStr);
  } else return 0;
}

export function addCommas(nStr, ccy) {
  switch (ccy) {
    case "USD":
      return new Intl.NumberFormat("en-US").format(nStr);
      break;
    case "EUR":
      return new Intl.NumberFormat("de-DE").format(nStr);
      break;
    case "INR":
      return new Intl.NumberFormat("en-IN").format(nStr);
      break;
    case "JPY":
      return new Intl.NumberFormat("ja-JP").format(nStr);
      break;
  }
}
