const { faker } = require('@faker-js/faker');

function generateUserData() {
  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();
  const email = faker.internet.email();
  const genderNumber = Math.ceil(Math.random() * 3);
  let gender = '';

  if (genderNumber === 1) {
    gender = 'Male';
  }
  if (genderNumber === 2) {
    gender = 'Female';
  }  
  if (genderNumber === 3) {
    gender = 'Other';
  }  

  const phoneNumber = faker.phone.number('##########');
  const birthDate = faker.date.birthdate({ min: 16, max: 50, mode: 'age', refDate: Date });
  const subjectsList = [
    'Math',
    'Physics',
    'Chemistry',
    'English',
    'Computer Science',
    'Economics',
    'Commerce',
    'Social Studies',
    'History',
    'Arts'
  ];
  const subject = subjectsList[Math.floor(Math.random() * 10)]
  const address = faker.address.streetAddress(true);
  
  return { firstname, lastname, email, genderNumber, gender, phoneNumber, birthDate, subject, address };
}

module.exports = { generateUserData };
