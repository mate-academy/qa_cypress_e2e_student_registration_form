import { faker } from '@faker-js/faker';

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phone = faker.phone.number('##########');
  const address = faker.address.streetAddress();
  const randomIndex = Math.floor(Math.random() * 3);
  const genders = ['Male', 'Female', 'Other']
  const gender = genders[randomIndex];
  const birthMonth = faker.date.month();
  const birthYear = Math.floor(1990 + Math.random() * 20);
  const birthDay = Math.floor(20 + Math.random() * 9);
  const hobbies = ['Sports', 'Reading', 'Music'];
  const hobby = hobbies[randomIndex];
  return { 
    firstName, 
    lastName, 
    email, 
    phone, 
    address, 
    gender, 
    birthMonth, 
    birthYear, 
    birthDay, 
    hobby
   };
} 

module.exports = { generateUser };