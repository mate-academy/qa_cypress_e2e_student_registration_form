export default class Form {
  firstName = "#firstName";
  lastName = "#lastName";
  email = "#userEmail";
  mobile = "#userNumber";
  birthDate = "#dateOfBirthInput";
  subjects = "#subjectsInput";
  address = "#currentAddress";
  state = "#state";
  city = "#city";
  form = "#userForm";

  typeFName(firstname) {
    cy.get(this.firstName).type(firstname);
  }

  typeLName(lastname) {
    cy.get(this.lastName).type(lastname);
  }

  typeEmail(email) {
    cy.get(this.email).type(email);
  }

  selectGender(gender) {
    cy.contains(`${gender}`).click();
  }

  typePhone(mobilePhone) {
    cy.get(this.mobile).type(mobilePhone);
  }

  typeDOB(dob) {
    cy.get(this.birthDate).type(`{selectAll} ${dob} {enter}`);
  }

  typeSubjests(subject) {
    cy.get(this.subjects).type(subject);
  }

  selectHobbies(hobby) {
    cy.contains(`${hobby}`).click();
  }

  typeAddress(address) {
    cy.get(this.address).type(address);
  }

  typeState(stateName) {
    cy.contains("Select State").click().type(`${stateName} {enter}`);
  }

  typeCity(cityName) {
    cy.contains("Select City").click().type(`${cityName} {enter}`);
  }

  submitForm() {
    cy.get(this.form).submit();
  }
}
