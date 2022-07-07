const faker = require('faker');


function generateUser() {

  // const random = Math.random().toString().slice(2, 6);

  const firstName = faker.name.firstName(); 
  const lastName = faker.name.lastName();
  const email = `${firstName}@mail.com`;
  const address = faker.address.streetAddress(true);
  const mobile = Math.floor((Math.random() * 100000000) + 1);

  

  return {firstName, lastName, email, address, mobile};

}

module.exports = { generateUser };