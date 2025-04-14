/* eslint-disable max-len */
import { faker } from '@faker-js/faker';

function createUserData() {
  const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
  const firstName = faker.person.firstName(gender.toLowerCase());
  const lastName = faker.person.lastName(gender.toLowerCase());
  const email = createEmail(firstName);
  const phoneNumber = generatePhoneNumber();
  const birthDate = generateBirthDate();
  const subjects = randomSubject();
  const hobbies = faker.helpers.arrayElement(['Sports', 'Reading', 'Music']);
  const address = faker.location.streetAddress();
  const stateAndCity = [
    {
      state: 'NCR',
      cities: ['Delhi', 'Gurgaon', 'Noida']
    },
    {
      state: 'Uttar Pradesh',
      cities: ['Agra', 'Lucknow', 'Merrut']
    },
    {
      state: 'Haryana',
      cities: ['Karnal', 'Panipat']
    },
    {
      state: 'Rajasthan',
      cities: ['Jaipur', 'Jaiselmer']
    }
  ];

  return {
    gender,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    subjects,
    hobbies,
    address,
    stateAndCity
  };
}

function createEmail(firstName) {
  const randomNumber = Math.floor(Math.random() * 1000);
  const domain = faker.internet.domainWord();
  const topDomain = faker.internet.domainSuffix();
  return `${firstName}${randomNumber}@${domain}.${topDomain}`;
}

function generatePhoneNumber() {
  const operators = [
    '097', '096', '098', '099', '050',
    '063', '067', '066', '073'
  ];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomNumbers = faker.random.numeric(7);
  const operator = operators[randomIndex];
  return `${operator}${randomNumbers}`;
}

function generateBirthDate() {
  const generatedDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
  const date = new Date(generatedDate);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month},${year}`;
}

function randomSubject() {
  const subject = [
    'Chemistry', 'Maths', 'Computer Science', 'Commerce',
    'Economics', 'Physics', 'Accounting', 'Arts', 'Social Studies',
    'History', 'Biology', 'English', 'Hindi', 'Civics'
  ];
  const randomIndex = Math.floor(Math.random() * subject.length);
  return subject[randomIndex];
}

export default createUserData;
