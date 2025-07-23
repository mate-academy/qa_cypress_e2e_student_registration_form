import genDate from './genDate';

const { faker } = require('@faker-js/faker');

function genPerson() {
  const person = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: null,
    mobileNumber: faker.string.numeric(10),
    dob: genDate(),
    subject: null,
    hobby: null,
    address: faker.location.streetAddress(),
    state: null,
    city: null
  };

  return person;
}
export default genPerson;
