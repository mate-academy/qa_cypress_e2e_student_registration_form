const faker = require('faker');

function generateUser() {
  const Index = Math.floor(Math.random() * 2)
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const genders = ['Male', 'Female', 'Other'];
  const gender = genders[Index];
  const phoneNumber = faker.phone.phoneNumber ('##########');
  const subjects = ['English', 'Chemistry', 'History'];
  const subject = subjects[Index];
  const birthDate = {
    month: faker.date.month(),
    year: Math.floor(2000 + Math.random() * 22),
    day: Math.floor(Math.random() * 28)
  }
  const hobbies = ['Sports', 'Reading'];
  const hobbie = hobbies[Math.floor(Math.random() * 1)];
  const address = faker.address.streetAddress();

  return { 
    firstName, lastName, email, gender, phoneNumber, subject, birthDate, hobbie, address 
  };
}

module.exports = { generateUser };
