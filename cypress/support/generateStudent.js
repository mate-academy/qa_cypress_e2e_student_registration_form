const { faker } = require('@faker-js/faker')

export const generateStudent = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const mobile = faker.phone.number('##########');
  const address = faker.address.streetAddress();

  return { firstName, lastName, email, mobile, address };
}

module.exports = { generateStudent };
