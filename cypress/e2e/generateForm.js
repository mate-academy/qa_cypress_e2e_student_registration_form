const { faker } = require('@faker-js/faker');
const { range } = require('../support/range');
const { subjects } = require('../support/subjects');

function generateForm() {
  // name and lastName
  const name = faker.person.firstName();
  const lastName = faker.person.lastName();
  const randomNumber = String(Math.random()).slice(2, 6);
  // email
  const email = name + randomNumber + '@example.com';
  // gender
  const gendersArray = ['Male', 'Female', 'Other'];
  const randomGender = Math.floor(Math.random() * gendersArray.length);
  const gender = gendersArray[randomGender];
  // phoneNumber
  const phoneNumber = faker.phone.number('##########');
  // dateOfBirth
  const months = range(1, 12, 1);
  const randomMonthIndex = Math.floor(Math.random() * months.length);
  const years = range(1900, 2026, 1);
  const randomYearIndex = Math.floor(Math.random() * years.length);
  const randomYear = years[randomYearIndex];
  const days = range(1, 31, 1);
  const randomDaysIndex = Math.floor(Math.random() * days.length);
  const stringedDay = String(days[randomDaysIndex]);

  const day = `.react-datepicker__day--${stringedDay.padStart(3, '0')}`;

  const randomSubjectsAmount = Math.floor(Math.random() * subjects.length);
  // hobbies
  const randomHobbiesIndex = Math.floor(Math.random() * 3);
  // currentAddress
  const currentAddress = faker.location.streetAddress({ useFullAddress: true });
  // state
  const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
  const randomStateIndex = Math.floor(Math.random() * states.length);
  const state = states[randomStateIndex] === undefined
    ? 'NCR'
    : states[randomStateIndex];
  // city

  const assignCityToState = (stateName = 'NCR') => {
    switch (stateName) {
      case 'NCR':
        return ['Delhi', 'Gurgaon', 'Noida'];
      case 'Uttar Pradesh':
        return ['Agra', 'Lucknow', 'Merrut'];
      case 'Haryana':
        return ['Karnal', 'Panipat'];
      case 'Rajasthan':
        return ['Jaipur', 'Jaiselmer'];
      default:
        return [];
    }
  };

  const cities = assignCityToState(state);
  const randomCityIndex = Math.floor(Math.random() * cities.length);

  return {
    name,
    lastName,
    email,
    gender,
    phoneNumber,
    randomYear,
    randomSubjectsAmount,
    randomMonthIndex,
    randomDaysIndex,
    randomCityIndex,
    randomStateIndex,
    randomHobbiesIndex,
    day,
    currentAddress,
    states,
    cities
  };
}

module.exports = { generateForm };
