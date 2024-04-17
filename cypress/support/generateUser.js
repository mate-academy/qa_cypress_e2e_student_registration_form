const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  };
  const email = `_${username.firstName}.${username.lastName}@gmail.com`;
  const gender = ['Male', 'Female', 'Other'];
  const mobile = faker.string.numeric(10);
  const birthdate = birthDate();
  const subjects = [
    'Maths',
    'Economics',
    'English',
    'History',
    'Computer Science',
    'Arts',
    'Physics',
    'Biology',
    'Chemistry',
    'Social Studies',
    'Commerce'
  ];
  const hobbies = [
    'Sports',
    'Reading',
    'Music'
  ];
  const location = [
    {
      state: 'NCR',
      city: [
        'Delphi',
        'Gurgaon',
        'Noida'
      ]
    },
    {
      state: 'Uttar Pradesh',
      city: [
        'Agra',
        'Lucknow',
        'Merrut'
      ]
    },
    {
      state: 'Haryana',
      city: [
        'Karnal',
        'Panipat'
      ]
    },
    {
      state: 'Rajasthan',
      city: [
        'Jaipur',
        'Jaiselmer'
      ]
    }
  ];
  const randomSubjects = getRandomItems(subjects,
    getRandomCount(subjects.length));
  const randomHobbies = getRandomItems(hobbies,
    getRandomCount(hobbies.length));
  const randomGenders = getRandomGenders(gender);
  const userLocation = getLocation(location);
  const address = faker.location.streetAddress(true);

  return {
    username,
    email,
    randomGenders,
    birthdate,
    mobile,
    randomSubjects,
    randomHobbies,
    address,
    userLocation
  };
}

function getRandomCount(n) {
  return Math.floor(Math.random() * n);
}

function getRandomItems(array, n) {
  return Array.from({ length: n }, () => {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array.splice(randomIndex, 1)[0];
  });
}

function getLocation(location) {
  const randomLocation = location[Math.floor(Math.random() * location.length)];
  const randomCity = randomLocation.city[Math
    .floor(Math.random() * randomLocation.city.length)];
  const userLocation = { state: randomLocation.state, city: randomCity };

  return userLocation;
}

function getRandomGenders(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

function birthDate() {
  const randomYear = Math.floor(Math.random() * 66 + 1940);
  const randomDay = Math.floor(Math.random() * 29);
  const monthsIndex = Math.floor(Math.random() * 12);
  const formattedDay = randomDay < 10 ? '0' + randomDay : randomDay;
  const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
  return `${formattedDay} ${months[monthsIndex]} ${randomYear}`;
}

module.exports = { generateUser };
