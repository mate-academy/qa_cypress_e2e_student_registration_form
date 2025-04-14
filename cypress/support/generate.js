function generateDate() {
  const randomYear = Math.floor(Math.random() * (2023 - 1950 + 1)) + 1950;
  const randomMonth = String(Math.floor(Math.random() * 12) + 1)
    .padStart(2, '0');
  const randomDay = String(Math.floor(Math.random() * 27) + 1).padStart(2, '0');
  const date = `${randomYear}-${randomMonth}-${randomDay}`;
  return date;
}

function convertShortMonthToFull(shortMonth) {
  const monthMap = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
  };

  const month = monthMap[shortMonth];
  return month;
}

module.exports = { generateDate, convertShortMonthToFull };
