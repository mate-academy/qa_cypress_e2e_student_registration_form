const username = 'user'+Math.floor(Math.random(1000)*1000);
const user = {
  firstName: 'Firstname',
  secondName: 'SecondName',
  email: username+'@mail.com',
  adress: 'adress',
  hobbies: 'hobbies',
  subjects: 'dwefcwe',
  mobile: '1234567890'+Math.random(10)
};

module.exports = {user}