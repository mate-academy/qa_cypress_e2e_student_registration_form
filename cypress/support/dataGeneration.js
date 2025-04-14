const { faker } = require("@faker-js/faker");

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = `${firstName}${lastName}@test.test`;
const phoneNumber = faker.string.numeric(10);

const birthDay = Math.floor(Math.random() * 28) + 1;
const birthMonth = faker.date.month();
const birthYear = faker.date
  .birthdate({ max: 70, min: 1, mode: "age" })
  .getFullYear();

const address = faker.location.streetAddress();

const genders = ["Male", "Female", "Other"];
const genderRandom = genders[Math.floor(Math.random() * 3)];

const hobbies = ["Sports", "Reading", "Music"];
const hobbyRandom = Math.floor(Math.random() * hobbies.length);
const hobbyRandom1 = hobbyRandom + 1;
const hobby = hobbies[hobbyRandom];

const subjects = [
  "Hindi",
  "English",
  "Maths",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Commerce",
  "Accounting",
  "Economics",
  "Arts",
  "Social Studies",
  "History",
  "Civics",
];
const randomSubject = Math.floor(Math.random() * 14);
const subject = subjects[randomSubject];

const states = ["NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];
const stateRandom = Math.floor(Math.random() * states.length);
const state = states[stateRandom];

let cityLength = 0;

function randomiseCity(stateRandom) {
  let cityLength = 0;
  if (stateRandom === 0 || stateRandom === 1) {
    cityLength = 2;
  } else cityLength = 1;

  return cityLength;
}

const cityRandom = Math.floor(Math.random() * cityLength);

module.exports = {
  firstName,
  lastName,
  email,
  phoneNumber,
  birthDay,
  birthMonth,
  birthYear,
  address,
  genderRandom,
  hobbyRandom,
  subjects,
  randomSubject,
  subject,
  hobby,
  hobbyRandom1,
  randomiseCity,
  stateRandom,
  cityRandom,
  state,
};
