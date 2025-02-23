const { faker } = require('@faker-js/faker');

function generateData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName });
  const mobileNumber = faker.phone.number('##########');

  return { firstName, lastName, email, mobileNumber };
}

const getGenderAccordingToName = (firstName) => {
  const maleNames = ['John', 'James', 'David', 'Michael', 'Robert', 'Jimmy'];
  const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Patricia', 'Jessica'];

  if (maleNames.includes(firstName)) {
    return 'male';
  }

  if (femaleNames.includes(firstName)) {
    return 'female';
  }

  return faker.person.sex();
};

function generatedDateOfBirth() {
  const randomDate = faker.date.birthdate({ mode: 'age', min: 16, max: 30 });
  const date = randomDate.getDay();
  const month = randomDate.getMonth();
  const year = randomDate.getFullYear();

  return { date, month, year };
}

const randomSubject = () => {
  const arr = ['Mat', 'Phy', 'Che', 'Eng', 'Bio', 'Eco', 'Art', 'His', 'Sci'];
  const result = [];

  for (let i = 1; i <= 3; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (!result.includes(arr[randomIndex])) {
      result.push(arr[randomIndex]);
    }
  }

  return result;
};

const randomElement = () => {
  const arr = ['Sports', 'Reading', 'Music'];
  const result = [];

  for (let i = 1; i <= 3; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (!result.includes(arr[randomIndex])) {
      result.push(arr[randomIndex]);
    }
  }

  return result;
};

const randomState = () => {
  const possibleValues = ['NC', 'Ut', 'Ha', 'Raj'];
  const randomIndex = Math.floor(Math.random() * possibleValues.length);
  const randomItem = possibleValues[randomIndex];

  return randomItem;
};

module.exports = {
  generateData,
  getGenderAccordingToName,
  generatedDateOfBirth,
  randomSubject,
  randomElement,
  randomState
};
