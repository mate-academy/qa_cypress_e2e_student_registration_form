/// <reference types='cypress' />

import { CITY, HOBBIES, SEX, STATE } from '../support/constant';

describe('Student Registration page', () => {
  const user = {
    name: 'Artem',
    surname: 'Zakharchuk',
    email: 'Artem.Zakharchuk@ukr.net',
    sex: SEX.male,
    tel: '0500505050',
    birthday: '05-05-1989',
    subject: 'JS',
    hobbies: [HOBBIES.sport],
    address: 'UA',
    state: STATE.Uttar,
    city: CITY.Agra
  };

  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should submit form', () => {
    cy.fillForm(user);
    cy.get('#submit').click();
  });
});
