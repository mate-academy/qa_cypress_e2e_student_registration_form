function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 11);
  const firstName = `Name${randomNumber}`;
  const lastName = `LastName${randomNumber}`;
  const email = `${firstName}@gmail.com`;
  const phoneNumber = `0${randomNumber}`;
  const randomDay = Math.floor(Math.random() * 30) + 1;

  const months = {
    January: '0',
    February: '1',
    March: '2',
    April: '3',
    May: '4',
    June: '5',
    July: '6',
    August: '7',
    September: '8',
    October: '9',
    November: '10',
    December: '11'
  };
  const randomMonthNumber = Math.floor(Math.random() * 12);
  const randomMonth = Object.keys(months)[randomMonthNumber];

  const minYear = 1900;
  const maxYear = 2100;
  const randomYear = Math.floor(Math.random() *
    (maxYear - minYear + 1)) + minYear;

  const subjects = ['Maths', 'Physics', 'History', 'Physics',
    'Chemistry', 'Arts', 'Computer Science'];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

  const genders = ['Male', 'Female', 'Other'];
  const randomGender = genders[Math.floor(Math.random() * genders.length)];

  const hobbies = ['Sports', 'Reading', 'Music'];
  const randomHobbie = hobbies[Math.floor(Math.random() * hobbies.length)];

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    randomDay,
    randomMonth,
    randomYear,
    randomSubject,
    randomGender,
    randomHobbie
  };
}

module.exports = { generateUser };
