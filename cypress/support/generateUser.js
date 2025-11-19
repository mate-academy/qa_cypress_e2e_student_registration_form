/* eslint-disable max-len */
const { faker } = require('@faker-js/faker');

function generateUser() {
  // const randomNumber = Math.random().toString().slice(2, 6);
  const sex = faker.helpers.arrayElement(['male', 'female', 'other']);
  const userName = faker.person.firstName(sex);
  const lastName = faker.person.lastName(sex);
  const hobbies = faker.helpers.arrayElements(['Sports', 'Reading', 'Music'], {
    min: 1,
    max: 3
  });
  const cityByState = {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  };
  const subjectByLetter = {
    a: ['Arts', 'Accounting', 'Social Studies', 'Maths'],
    b: ['Biology'],
    c: [
      'Physics',
      'Computer Science',
      'Chemistry',
      'Civics',
      'Commerce',
      'Accounting',
      'Economics',
      'Social Studies'
    ],
    e: [
      'Economics',
      'English',
      'Chemistry',
      'Computer Science',
      'Commerce',
      'Social Studies'
    ],
    g: ['English', 'Biology', 'Accounting'],
    h: ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry', 'History'],
    i: ['Hindi', 'English', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Accounting', 'Economics', 'Social Studies', 'History', 'Cyvics'],
    l: ['English', 'Biology', 'Social Studies'],
    m: ['Maths', 'Chemistry', 'Computer Science', 'Commerce', 'Economics'],
    n: ['Hindi', 'English', 'Computer Science', 'Accounting', 'Economics'],
    o: ['Biology', 'Computer Science', 'Commerce', 'Accounting', 'Economics', 'Social Studies', 'History'],
    p: ['Physics', 'Computer Science'],
    r: ['Chemistry', 'Computer Science', 'Arts', 'History', 'Commerce'],
    s: ['English', 'Maths', 'Physics', 'Chemistry', 'Computer Science', 'Economics', 'Arts', 'Social Studies', 'History', 'Civics'],
    t: ['Maths', 'Computer Science', 'Chemistry', 'Accounting', 'Arts', 'Social Studies', 'History'],
    u: ['Computer Science', 'Accounting', 'Social Studies'],
    y: ['Physics', 'Biology', 'Chemistry', 'History']
  };
  const state = faker.helpers.arrayElement(Object.keys(cityByState));
  const city = faker.helpers.arrayElement(cityByState[state]);

  const address = faker.location.streetAddress({ useFullAddress: true });

  // const userName = `Test_user#_${randomNumber}`;
  // const email = faker.internet.email();
  const email = `${userName}@example.com`;
  // const password = 'Password1234';
  const phoneNumber = faker.phone.number('##########');
  const birthday = faker.date.birthdate({ min: 10, max: 100, mode: 'age' });
  // const alphabet = 'abceghilmnoprstuy';
  // const lettersSelect = faker.helpers.arrayElement(alphabet.split(''));
  const letterSelect = faker.helpers.arrayElement(Object.keys(subjectByLetter));

  const subjects = faker.helpers.arrayElement(subjectByLetter[letterSelect], { min: 1, max: 3 }).toString();
  const subjectsPool = [
    'Maths', 'Arts', 'Social Studies', 'English',
    'Chemistry', 'Biology', 'Economics', 'Computer Science', 'Hindi', 'Music', 'Physical Education', 'Education'
  ];
  /* const subjectsByLetter = faker.helpers.arrayElements(
    subjectsPool.filter((subj) => subj.toLowerCase().startsWith(letterSelect) || subj.toLowerCase().includes(letterSelect)),
    { min: 1, max: 2 }
  ).toString(); */
  return {
    userName,
    lastName,
    email,
    sex,
    phoneNumber,
    birthday,
    hobbies,
    address,
    state,
    city,
    subjects,
    letterSelect,
    subjectsPool
  };
}

module.exports = { generateUser };
