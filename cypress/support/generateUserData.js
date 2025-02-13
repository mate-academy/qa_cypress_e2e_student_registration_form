const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName });
  const phone = faker.phone.number('##########');

  return { firstName, lastName, email, phone };
}

const getGenderAccordingName = (name) => {
  const maleNames = ['John', 'Leo', 'Illia', 'Vasya', 'Robert'];
  const femaleNames = ['Anna', 'Emily', 'Lily', 'Olivia', 'Emma'];

  if (maleNames.includes(name)) {
    return 'male';
  }

  if (femaleNames.includes(name)) {
    return 'female';
  }

  return faker.person.sex();
};

function generateBirthDate() {
  const randomDate = faker.date.birthdate({ mode: 'age', min: 16, max: 75 });
  const date = randomDate.getDay();
  const month = randomDate.getMonth() + 1;
  const year = randomDate.getFullYear() + 1;

  return { date, month, year };
}

const randomSubjects = () => {
  const subjects = [
    'Mat', 'Phy', 'Che', 'Eng', 'Bio', 'Eco', 'Art', 'His', 'Sci'
  ];
  const selected = new Set();

  while (selected.size < 3) {
    selected.add(subjects[Math.floor(Math.random() * subjects.length)]);
  }

  return Array.from(selected);
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
  generateUser,
  getGenderAccordingName,
  generateBirthDate,
  randomSubjects,
  randomElement,
  randomState
};
