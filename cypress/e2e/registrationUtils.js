const faker = require('faker');

export const firstName = faker.name.firstName();
export const lastName = faker.name.lastName();
export const email = faker.internet.email();
export const mobileNumber = faker.random.number({ min: 1000000000, max: 9999999999 }).toString();
export const year = faker.random.number({ min: 2004, max: 2020 }).toString();
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];
export const month = faker.random.arrayElement(months);
export const day = faker.random.number({ min: 1, max: 28 });
export const hobbie = faker.random.arrayElement(['Sports', 'Music', 'Reading']);
export const subjects = faker.random.arrayElement(['Physics', 'Maths', 'Chemistry', 'Biology']);
export const currentAddress = faker.address.streetAddress();
export const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
const cities = {
  NCR: ['Dehli', 'Gurgaon', 'Noida'],
  'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
  Haryana: ['Karnal', 'Panipat'],
  Rajasthan: ['Jaipur', 'Jaiselmer']
};
export const randomState = faker.random.arrayElement(states);
export const randomCity = faker.random.arrayElement(cities[randomState]);

export function setBirth(year, month, day) {
  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__month-select').select(month);
  cy.get('.react-datepicker__year-select').select(year);
  cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
    .contains(day).click();
}
export function setSubject(subject) {
  cy.get('#subjectsInput').type(subject);
  cy.get('.subjects-auto-complete__menu-list').contains(subject).click();
}
export function setHobbie(hobbie) {
  cy.get('label[for^="hobbies-checkbox"]').contains(hobbie).click();
}
export function setRandomStateCity() {
  cy.get('#state').type(randomState + '{enter}');
  cy.get('#city').click();
  cy.get('#city').type(randomCity + '{enter}');
}
export function setGender(gender) {
  cy.get('[for^="gender-radio-"]').contains(gender).click();
}
export function setFirstName(name) {
  cy.get('#firstName').type(name);
}
export function setLastName(lName) {
  cy.get('#lastName').type(lName);
}
export function setEmail(mail) {
  cy.get('#userEmail').type(mail);
}
export function setMobile(mobNumber) {
  cy.get('#userNumber').type(mobNumber);
}
export function setAddress(address) {
  cy.get('#currentAddress').type(address);
}
export function clickSubmit() {
  cy.get('#submit').click();
}
export function validateName (name, lName) {
  cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', `${name} ${lName}`);
}
export function validateEmail(email) {
  cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', email);
}
export function validateGender(gender) {
  cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', gender);
}
export function validateMobile(mobile) {
  cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', mobile);
}
export function validateBirth(day, month, year) {
  cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain.text', `${day} ${month},${year}`);
}
export function validateSubjects(subject) {
  cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain.text', subject);
}
export function validateHobbies(hobbie) {
  cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain.text', hobbie);
}
export function validateAddress(address) {
  cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text', address);
}
export function validateStateCity(state, city) {
  cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', `${state} ${city}`);
}
