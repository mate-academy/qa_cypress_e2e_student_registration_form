const { faker } = require('@faker-js/faker');

const getAddress = () => {
  const streetAddress = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zipCode = faker.location.zipCode();
  const country = faker.location.country();

  return `${streetAddress}, ${city}, ${state}, ${zipCode}, ${country}`;
};

module.exports = getAddress;
