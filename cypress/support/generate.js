const faker = require('faker');

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const random = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + random;
  const email = `${username}@mail.com`;

  const randomGenderNumber = Math.round(Math.random() * 2);
  const genders = ['Male', 'Female', 'Other'];
  const gender = genders[randomGenderNumber];

  const phoneNumber = faker.phone.phoneNumber('##########')

  const hasHobbies = Math.round(Math.random());

  const hobbies = [];

   if (hasHobbies) {
    const randomHobbiesNumber = Math.round(Math.random() * 2);
    let hobbiesCopy = ['Sports', 'Reading', 'Music'];

    for (let i = 0; i <= randomHobbiesNumber; ++i) {
        const rnd = Math.round(Math.random() * (randomHobbiesNumber - i));

        hobbies.push(hobbiesCopy[rnd]);
        hobbiesCopy.splice(rnd, 1);
    }
   }

  const date = {
      month: faker.date.month(),
      year: Math.round(Math.random() * 200) + 1900,
      day: Math.round(Math.random() * 3) + 15,
   };

  const address = faker.address.streetAddress();

  return { 
    firstName, 
    lastName, 
    email, 
    gender,
    phoneNumber,
    hobbies,
    date,
    address,
  };

}

module.exports = { generateUser };