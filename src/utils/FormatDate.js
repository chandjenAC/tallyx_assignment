export function reverseformatDate(date) {
  return date.slice(6, 10) + date.slice(2, 6) + date.slice(0, 1);
}

export function formatDate(date) {
  return date.slice(8, 10) + date.slice(4, 8) + date.slice(0, 4);
}
