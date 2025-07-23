const { faker } = require('@faker-js/faker');

function genDate() {
  const randDate = faker.date.birthdate();
  const day = randDate.getDate();
  const month = randDate.getMonth() + 1;
  const year = randDate.getFullYear();
  const paddedMonth = String(month).padStart(2, '0');
  const paddedDay = String(day).padStart(2, '0');

  return `${paddedMonth}-${paddedDay}-${year}`;
}

export default genDate;
