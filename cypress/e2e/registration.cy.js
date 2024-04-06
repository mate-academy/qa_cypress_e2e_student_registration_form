/// <reference types='cypress' />

function getDate() {
  const date = new Date();

  const day = date.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  const monthIndex = date.getMonth();
  const month = monthNames[monthIndex];

  const year = date.getFullYear();

  return `${day} ${month},${year}`;
}

describe('Student Registration page', () => {
  it('should open modal window with same data upon valid data', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    const today = getDate();
    const data = {
      firstName: 'FirstName',
      lastName: 'LastName',
      userEmail: 'FirstName@email.test',
      userNumber: '0123456789',
      address: 'Peremohy Street, 4',
      state: 'NCR',
      city: 'Noida',
      gender: 'Female',
      subjects: ['English', 'Maths'],
      hobbies: ['Sports', 'Reading']
    };

    cy.fillForm(data);
    cy.contains('button', 'Submit').click();

    cy.contains('td', 'Student Name').next('td')
      .should('contain.text', data.firstName + ' ' + data.lastName);

    cy.contains('td', 'Student Email').next('td')
      .should('contain.text', data.userEmail);

    cy.contains('td', 'Gender').next('td')
      .should('contain.text', data.gender);

    cy.contains('td', 'Mobile').next('td')
      .should('contain.text', data.userNumber);

    cy.contains('td', 'Date of Birth').next('td')
      .should('contain.text', today);

    cy.contains('td', 'Subjects').next('td')
      .should('contain.text', data.subjects.join(', '));

    cy.contains('td', 'Hobbies').next('td')
      .should('contain.text', data.hobbies.join(', '));

    cy.contains('td', 'Address').next('td')
      .should('contain.text', data.address);

    cy.contains('td', 'State and City').next('td')
      .should('contain.text', data.state + ' ' + data.city);
  });
});
