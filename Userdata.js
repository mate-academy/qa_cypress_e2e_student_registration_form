
// CJS
import { faker } from '@faker-js/faker';

function createRandomUser() {
  const randomIndex = Math.floor(Math.random() * 3);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const phone = faker.phone.number('##########');
  const email = faker.internet.email();
  const hobbies = ['Sports', 'Reading', 'Music'];
  const subjects = ['Math', 'History', 'Art'];
  const address = `${faker.location.street()} ${faker.location.buildingNumber()}`;
  const state = 'NCR';
  const city = 'Delhi';
  const gender = ['Male', 'Female', 'Other'];

  return {
    firstName,
    lastName,
    phone,
    email,
    hobbies: hobbies[randomIndex],
    birth: {
      year: Math.floor(2000 + Math.random() * 20),
      month: faker.date.month(),
      day: Math.ceil(Math.random() * 29)
    },
    subjects: subjects[randomIndex],
    address,
    state,
    city,
    gender: gender[randomIndex]
  };
};

module.exports = { createRandomUser };
