const faker = require('faker');

const generateRandomUser = () => {
  const randomFirstName = faker.name.firstName();
  const randomLastName = faker.name.lastName();
  const randomEmail = faker.internet.email();
  const randomPhone = faker.random.number({ min: 1000000000, max: 9999999999 }).toString();
  const randomDateOfBirth = '01 Jul 1990';
  const randomAddress = faker.address.streetAddress();

  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    email: randomEmail,
    phone: randomPhone,
    dateOfBirth: randomDateOfBirth,
    address: randomAddress,
  };
};

module.exports = {
  generateRandomUser,
};

