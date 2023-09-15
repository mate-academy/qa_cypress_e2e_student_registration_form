const faker = require('faker');

function createRegistrationData () {
  const registrationPage = '/automation-practice-form';
  const firstName = faker.name.firstName('male');
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const mobilePhone = faker.phone.phoneNumber('1#########');
  const currentAddress = faker.address.streetAddress();
  const randomSubject = faker.lorem.words();
  const randomHobby = Math.floor(Math.random() * 3) + 1;
  const randomYear = getRandomNumber(1980, 2010);
  const randomDate = getRandomNumber(10, 30);
  return {
    registrationPage,
    firstName,
    lastName,
    email,
    mobilePhone,
    currentAddress,
    randomSubject,
    randomHobby,
    randomYear,
    randomDate
  };
};

function getRandomNumber(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1)) + min;
  value = value.toString();
  return value;
}

function fillIn(id, data) {
  cy.get(`[id=${id}]`).type(data);
};

function assertData(section, data) {
  cy.contains('tr', section).should('contain', data);
};

module.exports = { createRegistrationData, fillIn, assertData };
