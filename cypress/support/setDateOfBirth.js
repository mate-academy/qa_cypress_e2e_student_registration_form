import setElement from "./setElement";

export default function setYear() {
  const year = Math.floor(Math.random() * (2100 - 1900)) + 1900;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = setElement(months);
  const shortMonth = month.slice(0, 3);
  let day = Math.floor(Math.random() * 28) + 1;
  if (day < 10) {
    day = "0" + `${day}`;
  }

  return { year, month, shortMonth, day };
}
