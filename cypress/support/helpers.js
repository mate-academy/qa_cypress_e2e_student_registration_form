import faker from 'faker';

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const userEmail = faker.internet.email();
  const phoneNumber = faker.random.number({ min: 1000000000, max: 9999999999 });
  const userAddress = faker.address.streetAddress();

  return { firstName, lastName, userEmail, phoneNumber, userAddress };
}

module.exports = { generateUser };
