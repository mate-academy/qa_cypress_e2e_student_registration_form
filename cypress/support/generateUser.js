function generateUser() {
  const randomNumber = Math.floor(Math.random(1000) * 10000);
  const username = `user${randomNumber}`;
  const email = `${username}@example.com`;
  const password = 'passwWrd!';

  return { username, email, password };
}

module.exports = { generateUser };
