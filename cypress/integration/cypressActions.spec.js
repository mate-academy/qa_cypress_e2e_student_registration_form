/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form


describe('demoqa.com basic test', () => {
    it('Go to practice page', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Fill all fields in forms except "picture"', () => {
      cy.get('#firstName').type('Donald');
      cy.get('#lastName').type('Duck');
      cy.get('#userEmail').type('makduck@gmail.com');
      cy.contains('.custom-control-label', 'Male').click();      
      cy.get('#userNumber').type('0645374653');
      cy.get('#dateOfBirthInput').type('{selectall}').type('03 Sep 2003{enter}');
      cy.get('.subjects-auto-complete__control').type('e{enter}h{enter}');
      cy.contains('.custom-control-label', 'Reading').click();      
      const currAddr = 'City:  Krivoy Rog\nStreet:  22 Partsezda Ul., bld. 19, appt. 76';
      cy.get('#currentAddress').type(currAddr);
      cy.contains('.css-1wa3eu0-placeholder', 'Select State').type('{enter}');
      cy.contains('.css-1wa3eu0-placeholder', 'Select City').type('{enter}');

      cy.get('#submit').click();
      
    });

    it('Validate inputed data in modal window', () => {      
      cy.contains('td', 'Student Name').next().should('contain', 'Donald Duck');
      cy.contains('td', 'Student Email').next().should('contain', 'makduck@gmail.com');
      cy.contains('td', 'Gender').next().should('contain', 'Male');
      cy.contains('td', 'Mobile').next().should('contain', '0645374653');
      cy.contains('td', 'Date of Birth').next().should('contain', '03 September,2003');
      cy.contains('td', 'Subjects').next().should('contain', 'English, Hindi');
      cy.contains('td', 'Hobbies').next().should('contain', 'Reading');
      cy.contains('td', 'Address').next().should(
        'contain', 'City:  Krivoy Rog\nStreet:  22 Partsezda Ul., bld. 19, appt. 76');
      cy.contains('td', 'State and City').next().should('contain', 'NCR Delhi');
    });

});