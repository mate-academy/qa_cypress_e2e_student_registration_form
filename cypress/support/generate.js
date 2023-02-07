const { faker } = require('@faker-js/faker');

function dataGenerator() {
const firstName = faker.name.firstName();
const mail = faker.internet.email().toLowerCase(); 
const lastName = faker.name.lastName();
const number = faker.phone.number('097#######');
const day = Math.floor(Math.random() * 31);
if(day.lenght < 2) {day = `0${day}`}; // сподіваюсь цього ніхто не побачить
const month = faker.date.month({ abbr: false });
const dateShort = `${day} ${month} 2000`;
const dateLong = `${day} ${month},2000`;
const rand = Math.round(Math.random() * 2)+1;
const address = `${faker.address.streetAddress()}`;
const gen = ['Male', 'Female', 'Other'];
const hob = ['Sports', 'Reading', 'Music']

return { firstName, mail, lastName, number, dateShort, rand, address, gen, hob, dateLong };
};


module.exports = { dataGenerator };