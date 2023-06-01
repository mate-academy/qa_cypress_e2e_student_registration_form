const faker = require("faker");

function generateUser() {
  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();
  const email = `${firstname}_${lastname}@mail.com`.toLowerCase();
  const sex = faker.random.arrayElement([
    "Male",
    "Female",
    "Other",
  ]);
  const phonenumber = faker.phone.phoneNumber("066#######");
  const birth = {
    year: Math.floor(1960 + Math.random() * 60).toString(),
    month:faker.date.month(),
    day: Math.floor(Math.random() * 28),
  };
  const subject = faker.random.arrayElement(["Math", "Physics", "Computer Science"]);
  const hobbies = faker.random.arrayElement(["Sports", "Music", "Reading"]);
  const adress = faker.address.streetAddress()

  return { email, firstname, lastname, sex, phonenumber, birth, subject, hobbies, adress };
}

module.exports = { generateUser };
