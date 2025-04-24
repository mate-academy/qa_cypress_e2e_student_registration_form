/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    // Visit the registration form before each test
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill form, submit, and verify modal data', () => {
    // Test data
    const testData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male', // Matches DOM value exactly (case-sensitive)
      phone: '1234567890',
      dateOfBirth: {
        day: '15',
        month: 'May',
        year: '1995'
      },
      subjects: ['Maths', 'English'],
      hobbies: ['Sports', 'Reading'],
      address: '123 Main Street, City',
      state: 'NCR',
      city: 'Delhi'
    };

    // Fill form fields
    cy.get('#firstName').type(testData.firstName);
    cy.get('#lastName').type(testData.lastName);
    cy.get('#userEmail').type(testData.email);

    // Select gender
    cy.get(`input[name="gender"][value="${testData.gender}"]`).parent().click();

    cy.get('#userNumber').type(testData.phone);

    // Date of birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(
      testData.dateOfBirth.month
    );
    cy.get('.react-datepicker__year-select').select(testData.dateOfBirth.year);
    cy.get(
      `.react-datepicker__day--${testData.dateOfBirth.day.padStart(2, '0')}`
    ).click();

    // Subjects
    testData.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    });

    // Hobbies - Map hobby names to their corresponding values
    const hobbyValues = {
      Sports: '1',
      Reading: '2',
      Music: '3'
    };
    testData.hobbies.forEach((hobby) => {
      cy.get(`#hobbies-checkbox-${hobbyValues[hobby]}`).parent().click();
    });

    // Current Address
    cy.get('#currentAddress').type(testData.address);

    // State and City
    cy.get('#state').click();
    cy.contains('.react-select__option', testData.state).click();
    cy.get('#city').click();
    cy.contains('.react-select__option', testData.city).click();

    // Submit form
    cy.get('#submit').click();

    // Verify modal appears
    cy.get('.modal-content').should('be.visible');

    // Verify data in modal
    cy.get('tbody').within(() => {
      // Row 0: Student Name
      cy.get('tr')
        .eq(0)
        .should('contain', `${testData.firstName} ${testData.lastName}`);
      // Row 1: Student Email
      cy.get('tr').eq(1).should('contain', testData.email);
      // Row 2: Gender
      cy.get('tr').eq(2).should('contain', testData.gender);
      // Row 3: Mobile
      cy.get('tr').eq(3).should('contain', testData.phone);
      // Row 4: Date of Birth
      cy.get('tr')
        .eq(4)
        .should(
          'contain',
          `${testData.dateOfBirth.day} ${testData.dateOfBirth.month}, ${testData.dateOfBirth.year}`
        );
      // Row 5: Subjects
      cy.get('tr').eq(5).should('contain', testData.subjects.join(', '));
      // Row 6: Hobbies
      cy.get('tr').eq(6).should('contain', testData.hobbies.join(', '));
      // Row 7: Address
      cy.get('tr').eq(7).should('contain', testData.address);
      // Row 8: State and City
      cy.get('tr')
        .eq(8)
        .should('contain', `${testData.state} ${testData.city}`);
    });

    // Close modal
    cy.get('#closeLargeModal').click();
  });
});
