/// <reference types='cypress' />

export default class RegistrationPage {
  get firstNameField() {
    return cy.get('#firstName');
  }

  fillFirstNameField(firstName) {
    return this.firstNameField.type(firstName);
  }

  get lastNameField() {
    return cy.get('#lastName');
  }

  fillLastNameField(lastName) {
    return this.lastNameField.type(lastName);
  }

  get emainField() {
    return cy.get('#userEmail');
  }

  fillEmailField(email) {
    return this.emainField.type(email);
  }

  chooseGender(gender) {
    return cy.contains('.custom-control-label', gender)
      .click();
  }

  get mobileField() {
    return cy.get('#userNumber');
  }

  fillMobileField(number) {
    return this.mobileField.type(number);
  }

  get birthDateField() {
    return cy.get('#dateOfBirthInput').click();
  }

  get birthYearSelector() {
    return cy.get('.react-datepicker__year-select');
  }

  get birthMonthSelector() {
    return cy.get('.react-datepicker__month-select');
  }

  birthDaySelector(day) {
    return cy.get(`.react-datepicker__day--${day}`).first();
  }

  fillBirthDateField({ day, month, year }) {
    this.birthDateField.click();
    this.birthYearSelector.select(year);
    this.birthMonthSelector.select(month);
    this.birthDaySelector(day).click();
  }

  get subjectField() {
    return cy.get('#subjectsContainer');
  }

  fillSubjectsField(subject) {
    return this.subjectField
      .type(`${subject}{Enter}`);
  }

  chooseHobbie(hobbie) {
    return cy.contains('label.custom-control-label', hobbie)
      .click();
  }

  get adressField() {
    return cy.get('#currentAddress');
  }

  fillAdressField(adress) {
    return this.adressField.type(adress);
  }

  get stateField() {
    return cy.get('#state');
  }

  getStateOption(stateName) {
    return cy.contains('.css-11unzgr div', stateName);
  }

  selectState(stateName) {
    this.stateField.click();
    this.getStateOption(stateName).click();
  }

  get cityField() {
    return cy.get('#city');
  }

  get selectorCityNoida() {
    return cy.get('#react-select-4-option-2').should('be.visible');
  }

  selectCity() {
    this.cityField.click();
    this.selectorCityNoida.click();
  }

  get submitBtn() {
    return cy.get('#submit');
  }

  submitForm() {
    return this.submitBtn.click();
  }

  get submitWindow() {
    return cy.get('.modal-content');
  }

  assertSubmitWindow() {
    return this.submitWindow
      .should('be.visible');
  }

  get windowStudentNameValue() {
    return cy.contains('td', 'Student Name').next();
  }

  get windowStudentEmailValue() {
    return cy.contains('td', 'Student Email').next();
  }

  get windowStudentGenderValue() {
    return cy.contains('td', 'Gender').next();
  }

  get windowStudentMobileValue() {
    return cy.contains('td', 'Mobile').next();
  }

  get windowStudentBirthdayValue() {
    return cy.contains('td', 'Date of Birth').next();
  }

  get windowStudentSubjectValue() {
    return cy.contains('td', 'Subjects').next();
  }

  get windowStudentHobbiesValue() {
    return cy.contains('td', 'Hobbies').next();
  }

  get windowStudenAdressValue() {
    return cy.contains('td', 'Address').next();
  }

  get windowStudenStateCityValue() {
    return cy.contains('td', 'State and City').next();
  }

  assertWindowData({
    firstName, lastName, email, gender, mobileNumber,
    dateOfBirth, subject, hobbie, adress, state, city
  }) {
    const { day, month, year } = dateOfBirth;

    this.windowStudentNameValue
      .should('have.text', `${firstName} ${lastName}`);
    this.windowStudentEmailValue
      .should('have.text', email);
    this.windowStudentGenderValue
      .should('have.text', gender);
    this.windowStudentMobileValue
      .should('have.text', mobileNumber);
    this.windowStudentBirthdayValue
      .should('have.text', `${day.slice(1)} ${month},${year}`);
    this.windowStudentSubjectValue
      .should('have.text', subject);
    this.windowStudentHobbiesValue
      .should('have.text', hobbie);
    this.windowStudenAdressValue
      .should('have.text', adress);
    this.windowStudenStateCityValue
      .should('have.text', `${state} ${city}`);
  }
}
