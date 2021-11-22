

describe('', () => {
    
      let user;
    
      before(() => {
        cy.task('newUser').then((newUser) => {
          user = newUser;
        });
      });
    
      it('', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('[placeholder="First Name"]')
          .type(user.userFirstName);
        cy.get('[placeholder="First Name"]')
          .type(user.userLastName); 
        cy.get('#userEmail')
          .type(user.email);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
          .click({ multiple: true });
        cy.get('[placeholder="Mobile Number"]')
          .type('1234567890');
        cy.get('#dateOfBirthInput')
          .click();
        cy.get('.react-datepicker__month-select')
          .each(($el, index, $list) => {
            let monthName = $el.text()
            if(monthName == 'March')
            {
                cy.wrap($el).click()
            }     
            })
        cy.get('.react-datepicker__year-select')
        .each(($el, index, $list) => {
            let monthName = $el.text()
            if(monthName == '1990')
            {
                cy.wrap($el).click()
            }     
            })  
        cy.get('.react-datepicker__day')
          .each(($el, index, $list) => {
          let dateName = $el.text()
          if(dateName == '14')
            {
              cy.wrap($el).click()
            }  
        });
        cy.get('#dateOfBirthInput')
        .should('have.value', '14 Mar 2005') 
    })
})
// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

// Advanced level:
// Check next test cases:
// 1. Pagination 
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all worker
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values

// https://demoqa.com/webtables