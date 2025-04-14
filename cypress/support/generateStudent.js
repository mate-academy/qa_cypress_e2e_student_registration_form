
import { faker } from '@faker-js/faker';

function generateStudent() {
  const randomIndex = Math.floor(Math.random() * 3);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const genders = ['Male', 'Female', 'Other'];
  const gender = genders[randomIndex];
  const mobilePhone = faker.phone.number('##########');
  const month = faker.date.month();
  const year = Math.floor(Math.random() * 50) + 1950;
  const day = Math.floor(Math.random() * 28) + 1;
  const dateOfBirth = `${day} ${month},${year}`;
  const subjects = ['Math', 'History', 'Art'];
  const subject = subjects[randomIndex];
  const hobbies = ['Sport', 'Reading', 'Music'];
  const hobby = hobbies[randomIndex];
  const currentAddress = `${faker.location.street()} ${faker.location.buildingNumber()}`;
  const state = 'NCR';
  const city = 'Delhi';

  return {
    firstName,
    lastName,
    email,
    gender,
    mobilePhone,
    dateOfBirth,
    subject,
    hobby,
    currentAddress,
    state,
    city
  };
}

module.exports = { generateStudent };
