const faker = require('faker')

function generateUser() {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const email = faker.internet.email()
  const gender = faker.random.arrayElement(['Male', 'Female', 'Other'])
  const phoneNumber = faker.phone.phoneNumber('##########')
  const subject = faker.random.arrayElement(['English','Chemistry','Economics'])
  const hobbie = faker.random.arrayElement(['Sports', 'Reading', 'Music'])

  return {
    firstName,
    lastName,
    email,
    gender,
    phoneNumber,
    subject,
    hobbie
  }
}

module.exports = { generateUser }
