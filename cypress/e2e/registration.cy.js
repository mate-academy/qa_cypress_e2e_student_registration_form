/// <reference types='cypress' />

const formatDate = (day, month, year) => {
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
    'December'
  ];
  const monthName = monthNames[month];
  return `${day} ${monthName},${year}`;
};

const USER = {
  name: 'Max',
  lastName: 'Testing',
  userEmail: 'Max.Testing@testing.com',
  gender: 'Male',
  mobile: '1234567890',
  birth: {
    day: '03',
    month: 3,
    year: '1933',
    formatDate: formatDate('03', 3, '1933')
  },
  subjects: ['Math', 'Computer Science'],
  hobbies: [1, 2],
  picture: {
    path: 'C:/Users/Andrew/OneDrive/Рабочий стол/time.png',
    name: 'time.png'
  },
  currentAddress:
    'Khrustalnyy Per., bld. 6, appt. 2, Odessa, Odesskaya oblast, Ukraine',
  state: 'Rajasthan',
  city: 'Jaiselmer'
};
const regNumber = /^[0-9]*$/;
const regDate = /\d{2} \w+ \d{4}/;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
    cy.location('protocol').should('eq', 'https:');
  });

  it('should fill in all fields in the forms', () => {
    cy.fillInput('#firstName', USER.name);
    cy.fillInput('#lastName', USER.lastName);
    cy.fillInput('#userEmail', USER.userEmail);

    cy.selectRadioButton(USER.gender);

    cy.get('#userNumber').type(USER.mobile);
    cy.get('#userNumber').invoke('val').should('match', regNumber);

    cy.get('#dateOfBirthInput').click();
    cy.findByDate('month', USER.birth.month);
    cy.findByDate('year', USER.birth.year);
    cy.findByDate('day', USER.birth.day);
    cy.get('#dateOfBirthInput').invoke('val').should('match', regDate);

    USER.subjects.forEach((subject) => {
      cy.get('#subjectsContainer').click();
      cy.get('#subjectsContainer').type(`${subject}{enter}`);
    });
    USER.subjects.forEach((subject) => {
      cy.get('#subjectsContainer').should('contain.text', subject);
    });

    USER.hobbies.forEach((hobby) => {
      cy.get(`label[for=hobbies-checkbox-${hobby}]`).click();
      cy.checkValueInCheckbox(hobby);
    });

    cy.uploadFile(USER.picture.path, USER.picture.name);

    cy.fillInput('#currentAddress', USER.currentAddress);

    cy.selectStateAndCity('#state', USER.state);
    cy.selectStateAndCity('#city', USER.city);

    cy.get('#submit').click();
    cy.contains('Thanks for submitting the form').should('be.visible');

    cy.get('.modal-body').within(() => {
      cy.get('td').eq(1).contains(`${USER.name} ${USER.lastName}`);
      cy.get('td').eq(3).contains(USER.userEmail);
      cy.get('td').eq(5).contains(USER.gender);
      cy.get('td').eq(7).contains(USER.mobile);
      cy.get('td').eq(9).contains(USER.birth.formatDate);
      cy.get('td')
        .eq(11)
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.include(USER.subjects[0]);
          expect(text.trim()).to.include(USER.subjects[1]);
        });
      cy.get('td').eq(13).contains('Sports, Reading');
      cy.get('td').eq(15).contains(USER.picture.name);
      cy.get('td').eq(17).contains(USER.currentAddress);
      cy.get('td').eq(19).contains(`${USER.state} ${USER.city}`);
    });
  });
});
