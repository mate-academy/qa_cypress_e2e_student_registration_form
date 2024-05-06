function UserInfo() {
  const randomNumber = Math.random().toString().slice(2);
  const firstName = `alex${randomNumber}`;
  const lastName = `qaTest${randomNumber}`;
  const userEmail = `qa${randomNumber}@gmail.com`;
  const userNumber = `${Math.random().toString().slice(2, 11)}`;
  const subject = 'Arts';
  const addres = '13 Sebastiana, Krakow, Poland';

  return { firstName, lastName, userEmail, userNumber, subject, addres };
}

module.exports = { UserInfo };
