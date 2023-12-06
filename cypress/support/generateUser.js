module.exports = { generateUser, generatePhone };

function generateUser() {
  const generateNumber = Math.floor((Math.random() * 1000) + 1);
  const firstName = 'name' + generateNumber;
  const lastName = 'test' + generateNumber;
  const userEmail = `${firstName}@test.pl`;
  const userAddress = `testAddress ${generateNumber}, test`;

  return { firstName, lastName, userEmail, userAddress };
};

function generatePhone() {
  let number = '';

  for (let i = 0; i < 10; ++i) {
    const generateNumber = Math.floor((Math.random() * 9) + 1);
    number += generateNumber;
  }

  return { number };
};
