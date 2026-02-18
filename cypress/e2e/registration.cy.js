/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.openRegisterPage();
  });

  it('should register user', () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      sex,
      hobby,
      state,
      city
    } = generateUser();
    const genderMap = {
      male: '#gender-radio-1',
      female: '#gender-radio-2',
      other: '#gender-radio-3'
    };
    const hobbiesMap = {
      sports: '#hobbies-checkbox-1',
      reading: '#hobbies-checkbox-2',
      music: '#hobbies-checkbox-3'
    };
    const selectorHobby = hobbiesMap[hobby];
    const selectorSex = genderMap[sex];
    if (!selectorSex) {
      throw new Error(`Unknown sex value from generator: "${sex}". Expected one of: ${Object.keys(genderMap).join(', ')}`);
    }
    if (!selectorHobby) {
      throw new Error(`Unknown hobby value from generator: "${hobby}". Expected one of: ${Object.keys(hobbiesMap).join(', ')}`);
    }

    cy.contains('h5', 'Student Registration Form');

    cy.findById('firstName').type(firstName);
    cy.findById('lastName').type(lastName);
    cy.findById('userEmail').type(email);
    // eslint-disable-next-line cypress/no-force
    cy.get(selectorSex).check({ force: true });
    cy.findById('userNumber').type(phone);
    cy.selectDate('14', '4', '2012');
    cy.findById('subjectsInput').click();
    cy.findById('subjectsInput').type('Math');
    cy.get('.subjects-auto-complete__menu-list').should('be.visible');
    cy.get('.subjects-auto-complete__menu-list')
      .contains('Maths')
      .click();
    cy.get('.subjects-auto-complete__multi-value').should('contain', 'Maths');
    // eslint-disable-next-line cypress/no-force
    cy.get(selectorHobby).check({ force: true });
    cy.findById('currentAddress').type(address);

    cy.findById('state').click();
    cy.findById('react-select-3-input').type(`${state}{downarrow}{enter}`);
    cy.findById('state').should('contain.text', state);

    cy.findById('city').click();
    cy.findById('react-select-4-input').type(`${city}{downarrow}{enter}`);
    cy.findById('city').should('contain.text', city);
    cy.contains('button', 'Submit').click();

    cy.get('.modal-content', { timeout: 5000 }).should('be.visible');
    const expectedUser = {
      name: `${firstName} ${lastName}`,
      email,
      gender: sex.charAt(0).toUpperCase() + sex.slice(1),
      mobile: phone,
      dob: '14 May,2012',
      subjects: 'Maths',
      hobbies: hobby.charAt(0).toUpperCase() + hobby.slice(1),
      address,
      stateAndCity: `${state} ${city}`
    };
    cy.assertRow('Student Name', expectedUser.name);
    cy.assertRow('Student Email', expectedUser.email);
    cy.assertRow('Gender', expectedUser.gender);
    cy.assertRow('Mobile', expectedUser.mobile);
    cy.assertRow('Date of Birth', expectedUser.dob);
    cy.assertRow('Subjects', expectedUser.subjects);
    cy.assertRow('Hobbies', expectedUser.hobbies);
    cy.assertRow('Address', expectedUser.address);
    cy.assertRow('State and City', expectedUser.stateAndCity);
  });
});
