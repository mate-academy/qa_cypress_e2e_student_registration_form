import { faker } from '@faker-js/faker';

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const randomIndex = Math.ceil(Math.random() * 3);
  const gender = ['Male', 'Female', 'Other'];
  const phoneNumber = faker.phone.number('380#######');
  const date = faker.date.birthdate({min: 18, max: 100, mode: 'age'})
    .toDateString()
    .slice(4);
  const birthDate = date.slice(4,7) + date.slice(0, 4) + date.slice(7, 12);
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
