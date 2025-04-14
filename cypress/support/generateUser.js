function generateUser() {
  const randomNumber = Math.round(Math.random(1000) * 1000);
  const username = `user${randomNumber}`;
  const email = `${username}@mail.com`;
  const password = 'Qwert123456!';

  return { username, email, password };
}
module.exports = { generateUser };
