const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const mobileNumber = Math.random().toString().slice(2, 10);
  const address = faker.location.city();

  return { email, lastName, firstName, mobileNumber, address };
}

function generateGender() {
  const genderArr = ['Male', 'Female', 'Other'];
  const gender = genderArr[(Math.floor(Math.random() * genderArr.length))];

  return gender;
}

function generateHobbies() {
  const hobbiesArr = ['Sports', 'Reading', 'Music'];
  const hobbie = hobbiesArr[(Math.floor(Math.random() * hobbiesArr.length))];

  return hobbie;
}

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

module.exports = { generateUser, generateGender, generateHobbies, generateDate, convertShortMonthToFull };
