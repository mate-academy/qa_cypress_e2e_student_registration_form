import { faker } from '@faker-js/faker';

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const randomIndex = Math.ceil(Math.random() * 3);
  const gender = ['Male', 'Female', 'Other'];
  const phoneNumber = faker.phone.number('380#######');
  const birthDate = {
    day: Math.floor(Math.random() * 15),
    month: faker.date.month(),
    year: Math.floor(Math.random() * 100) + 1920,
  }
  const street = faker.address.streetAddress();
  const subject = ['Sports', 'Reading', 'Music'];

  return {
    firstName,
    lastName,
    email,
    randomIndex,
    gender,
    phoneNumber,
    birthDate,
    street,
    subject,
  }
};

module.exports = { generateUser }
