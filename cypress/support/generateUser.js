import { faker } from '@faker-js/faker';

const SUBJECTS = [
  'Maths',
  'Accounting',
  'Arts',
  'Social Studies',
  'English',
  'Chemistry',
  'Computer Science',
  'Economics',
  'Physics',
  'Biology',
  'History',
  'Civics',
  'Hindi'
];

export function generateUser() {
  const gender = faker.person.sex().replace(/^\w/, (c) => c.toUpperCase());

  const firstName = faker.person.firstName(gender).replace(/[^a-zA-Z]+/g, '');
  const lastName = faker.person.lastName(gender).replace(/[^a-zA-Z]+/g, '');

  const phoneNumber = faker.phone.number('0#########');
  const email = `${firstName}_${lastName}@gmail.com`;

  const dateOfBirth = faker.date
    .between({
      from: '1980-01-01',
      to: Date.now()
    })
    .toISOString()
    .slice(0, 10);

  const subjects = Cypress._.sampleSize(
    SUBJECTS,
    Math.floor(Math.random() * SUBJECTS.length) + 1
  );

  const hobbies = [
    Math.random() < 0.5,
    Math.random() < 0.5,
    Math.random() < 0.5
  ];

  const address = faker.location.streetAddress({ useFullAddress: true });

  return {
    firstName,
    lastName,
    gender,
    phoneNumber,
    email,
    dateOfBirth,
    subjects,
    hobbies,
    location: {
      address
    }
  };
}
