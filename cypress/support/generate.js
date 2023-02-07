import { faker } from '@faker-js/faker';

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const randomIndex = Math.floor(Math.random() * 3);
  const genders = ['Male', 'Female', 'Other'];
  const phoneNumber = faker.phone.phoneNumber('##########');
  const hobbies = ['Sports', 'Reading', 'Music'];
  const address = faker.address.streetAddress();


  return {firstName, lastName, email, randomIndex, gender: genders[randomIndex], phoneNumber, hobby: hobbies[randomIndex], address,
    birth: {
      month: faker.date.month(),
      year: Math.floor(1990 + Math.random() * 30),
      day: Math.floor(10 + Math.random() * 10),
  },
};
}

module.exports = { generateUser };