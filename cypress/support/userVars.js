import faker from 'faker';

const baseUrl = 'https://demoqa.com/automation-practice-form';
const name = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const mob = faker.phone.phoneNumberFormat(0);
const mobile = mob.replace(/-/g, '');
const subject = 'Computer Science';
const currentAddress = faker.address.streetAddress();
const randomGender = Math.floor(Math.random() * 3) + 1;
const randomHobbie = Math.floor(Math.random() * 3) + 1;

export {
  baseUrl,
  name,
  lastName,
  email,
  mobile,
  subject,
  currentAddress,
  randomGender,
  randomHobbie
};
