const faker = require('faker');

const generateRandomUserData = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const genders = ['Male', 'Female', 'Other'];
  const hobbies = ['Sports', 'Reading', 'Music'];
  const randomDate = faker.date.past();
  const randomYear = randomDate.getFullYear();
  const randomMonthNumber = randomDate.getMonth() + 1;
  const randomMonthString = randomMonthNumber.toString().padStart(2, '0');
  const randomDayNumber = randomDate.getDate();
  const randomDayString = randomDayNumber.toString().padStart(2, '0');
  const randomDateString = `${randomDayString}-${randomMonthString}-${randomYear}`;

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: genders[randomIndex],
    phoneNumber: Math.floor(Math.random() * 10000000000),
    randomDate: randomDateString,
    randomYear,
    randomMonth: faker.date.month(),
    randomDay: randomDayNumber,
    subjects: faker.lorem.words(),
    hobbies: hobbies[randomIndex],
    userAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country()
  };
};

module.exports = {
  generateRandomUserData
};
