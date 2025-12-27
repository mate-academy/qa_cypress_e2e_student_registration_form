/// <reference types='cypress' />

const { createRandomUser } = require('../support/createRandomUser');
const { formatDate } = require('../support/formatDate');

describe('Student Registration Page', () => {
  let user;

  before(() => {
    user = createRandomUser();
  });

  beforeEach(() => {
    cy.visit('/');
  });

  context('Personal Information', () => {
    it('should fill in first and last name', () => {
      cy.get('#firstName').type(user.firstName);
      cy.get('#lastName').type(user.lastName);
    });

    it('should fill in email address', () => {
      cy.get('#userEmail').type(user.email);
    });

    it('should fill in mobile number', () => {
      cy.get('#userNumber').type(user.mobile.replace(/[-\s]/g, ''));
    });

    it('should select gender', () => {
      cy.get('.custom-radio').contains('label', user.gender).click();
    });

    it('should select date of birth', () => {
      const day = user.dateOfBirth.getDate();
      const dayString = day < 10 ? `00${day}` : `0${day}`;

      cy.get('.react-datepicker-wrapper').click();
      cy.get('.react-datepicker__month-select')
        .select(user.dateOfBirth.getMonth().toString());
      cy.get('.react-datepicker__year-select')
        .select(user.dateOfBirth.getFullYear().toString());
      cy.get('.react-datepicker__week')
        .find(`.react-datepicker__day--${dayString}`)
        .not('.react-datepicker__day--outside-month')
        .click();
    });
  });

  context('Academic Information', () => {
    it('should choose subjects correctly', () => {
      user.subjects.forEach((subject) => {
        cy.get('.subjects-auto-complete__value-container').type(subject);
        cy.get('.subjects-auto-complete__option').contains(subject).click();
      });
    });

    it('should select hobbies correctly', () => {
      user.hobbies.forEach((hobby) => {
        cy.get('.custom-control').contains('label', hobby).click();
      });
    });
  });

  context('Address Information', () => {
    it('should fill in current address', () => {
      cy.get('#currentAddress').type(user.address);

      if (user.state) {
        cy.get('#state').click();
        cy.get('.css-26l3qy-menu').contains(user.state).click();
      }

      if (user.city) {
        cy.get('#city').click();
        cy.get('.css-26l3qy-menu').contains(user.city).click();
      }
    });
  });

  context('Register user', () => {
    it('should register a new student successfully', () => {
      cy.get('#firstName').type(user.firstName);
      cy.get('#lastName').type(user.lastName);
      cy.get('#userEmail').type(user.email);
      cy.get('#userNumber').type(user.mobile.replace(/[-\s]/g, ''));

      cy.get('.custom-radio').contains('label', user.gender).click();

      const day = user.dateOfBirth.getDate();
      const dayString = day < 10 ? `00${day}` : `0${day}`;

      cy.get('.react-datepicker-wrapper').click();
      cy.get('.react-datepicker__month-select')
        .select(user.dateOfBirth.getMonth().toString());
      cy.get('.react-datepicker__year-select')
        .select(user.dateOfBirth.getFullYear().toString());
      cy.get('.react-datepicker__week')
        .find(`.react-datepicker__day--${dayString}`)
        .not('.react-datepicker__day--outside-month')
        .click();

      user.subjects.forEach((subject) => {
        cy.get('.subjects-auto-complete__value-container').type(subject);
        cy.get('.subjects-auto-complete__option').contains(subject).click();
      });

      user.hobbies.forEach((hobby) => {
        cy.get('.custom-control').contains('label', hobby).click();
      });

      cy.get('#currentAddress').type(user.address);

      if (user.state) {
        cy.get('#state').click();
        cy.get('.css-26l3qy-menu').contains(user.state).click();
      }

      if (user.city) {
        cy.get('#city').click();
        cy.get('.css-26l3qy-menu').contains(user.city).click();
      }

      cy.get('#submit').click();

      cy.get('#example-modal-sizes-title-lg')
        .should('contain.text', 'Thanks for submitting the form');

      cy.get('td').contains('Student Name').next('td').should('have.text', `${user.firstName} ${user.lastName}`);
      cy.get('td').contains('Student Email').next('td').should('have.text', `${user.email}`);
      cy.get('td').contains('Gender').next('td').should('have.text', `${user.gender}`);
      cy.get('td').contains('Mobile').next('td').should('have.text', `${user.mobile}`);
      cy.get('td')
        .contains('Date of Birth')
        .next('td')
        .should('have.text', `${formatDate(user.dateOfBirth)}`);
      cy.get('td')
        .contains('Subjects')
        .next('td')
        .then(($td) => {
          user.subjects.forEach((subject) => {
            expect($td.text()).to.include(subject);
          });
        });
      cy.get('td')
        .contains('Hobbies')
        .next('td')
        .then(($td) => {
          user.hobbies.forEach((hobbie) => {
            expect($td.text()).to.include(hobbie);
          });
        });

      cy.get('td').contains('Picture').next('td').should('have.text', '');
      cy.get('td').contains('Address').next('td').should('have.text', `${user.address}`);
      cy.get('td').contains('State and City').next('td').should('have.text', `${user.state} ${user.city}`);
    });
  });
});
