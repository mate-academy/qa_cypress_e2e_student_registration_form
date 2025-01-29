import { faker } from '@faker-js/faker';

function generateUser() {
  const dateOfBirth = faker.date.past({
    years: 18,
    refDate: new Date(2003, 0, 1),
  });

  const formattedDateOfBirth = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateOfBirth);
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    mobileNumber: faker.string.numeric(10),
    dateOfBirth: formattedDateOfBirth,
    subjects: ['Maths', 'English', 'Computer Science'],
    hobbies: ['Sports', 'Reading', 'Music'],
    address: faker.location.streetAddress(),
    state: 'NCR',
    city: 'Delhi',
  };
}

export default { generateUser };
