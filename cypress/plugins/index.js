/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  
};

import { faker } from '@faker-js/faker';

function randomUser() {

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phone = faker.phone.number('##########');
  const address = faker.address.streetAddress()

  return {firstName, lastName, email, phone, address}
};

module.exports = {randomUser};

// function getRandomDate() {
//   const maxDate = Date.now();
//   const timestamp = Math.floor(Math.random() * maxDate);
//   return new Date(timestamp).toLocaleDateString('en-GB', { month: 'short', day: '2-digit', year: 'numeric'});
// }
// module.exports = {getRandomDate};