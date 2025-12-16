// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', () => {
  return false;
});

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
};

function generateRandomNumber(rangeEnd = 2, fromOne = false) {
  const oneIf = +fromOne;

  if (rangeEnd < 2) {
    throw new Error('"rangeEnd" must be greater than 1');
  } else if (rangeEnd === 2 && fromOne) {
    throw new Error('"rangeEnd" cannot be equal 2 when "fromOne" === true');
  }

  const randomNumber = Math.floor(Math.random() * rangeEnd + oneIf);

  if (randomNumber === rangeEnd) {
    return randomNumber - 1;
  }

  return randomNumber;
}

function generateRandomEmail() {
  const domain = '@ogar.com';
  let name = '';
  let number = '';

  for (let i = 0; i < 4; i++) {
    const asciiLetter = Math.floor(Math.random() * 25 + 97);
    const asciiNumber = Math.floor(Math.random() * 10 + 48);

    name += String.fromCharCode(asciiLetter);
    number += String.fromCharCode(asciiNumber);
  }

  return name + number + domain;
}

/**
 *
 * @param {number} number
 * @param {boolean} shortVersion // 2 always digit
 * @returns {string}
 */

function transformNumberFormat(number = 1, shortVersion = false) {
  if (number < 1) {
    throw new Error('"Number" must be greater than 0');
  } else if (number > 99) {
    throw new Error('"Number" must have one or two digit');
  } else if (!Number.isInteger(number)) {
    throw new Error('"Number" must be integer');
  }

  if (number >= 10 && !shortVersion) {
    return `0${number}`;
  } else if (number >= 10 && shortVersion) {
    return `${number}`;
  } else if (!shortVersion) {
    return `00${number}`;
  } else {
    return `${number}`;
  }
}

/**
 * @param {number} succesHold, integer from 1 to 100 (probability of success)
 * @returns {boolean}
 */
function randomSwitch(succesRate = 50) {
  switch (true) {
    case succesRate <= 0:
      throw new Error('"succesRate" must be greater than 0');
    case succesRate >= 100:
      throw new Error('"succesRate" cannot be greater than 100 or equal 100');
    case !Number.isInteger(succesRate):
      throw new Error('"succesRate" must be integer');
  }

  const succesHold = 100 - succesRate;
  const randomNumber = Math.floor(Math.random() * 100);
  const result = randomNumber >= succesHold;

  return result;
}

/**
 * @param {number} maxTimes,
 * @param {number} maxNumber is excluded,
 * @param {boolean} fromOne,
 * @returns {array}
 */
// eslint-disable-next-line max-len
function generateNumberRandomTimes(maxTimes = 1, maxNumber = 2, fromOne = false, randomSuccessRate = 85) {
  const amountOfNumber = maxNumber - fromOne;

  switch (true) {
    case maxTimes < 1:
      throw new Error('"maxTimes" must be greater than 0');
    case maxTimes > amountOfNumber:
      throw new Error(
        '"maxTimes" cannot be greater than ' +
        '"maxNumber" - "fromOne" (possible amount of number)'
      );
    case maxNumber < 2:
      throw new Error('"maxNumber" must be greater than 1');
    case maxNumber === 2 && fromOne === true:
      throw new Error('"maxNumber" cannot be equal 2 when "fromOne" === true');
    case randomSuccessRate <= 0:
      throw new Error('"randomSuccessRate" must be greater than 0');
    case randomSuccessRate >= 100:
      // eslint-disable-next-line max-len
      throw new Error('"randomSuccessRate" cannot be greater than 100 or equal 100');
    case !Number.isInteger(randomSuccessRate):
      throw new Error('"randomSuccessRate" must be integer');
  }

  const numbers = [];
  let isLucky;
  let currentResult;

  do {
    isLucky = randomSwitch(randomSuccessRate);
    currentResult = generateRandomNumber(maxNumber, fromOne);
    if (numbers.includes(currentResult)) {
      do {
        currentResult = generateRandomNumber(maxNumber, fromOne);
      } while (numbers.includes(currentResult));
    }

    numbers.push(currentResult);
  } while (isLucky && numbers.length < maxTimes);

  return numbers;
}
const users = {
  firstName: ['Damian', 'Aleksandra', 'Witold', 'Jadwiga', 'Janeczka'],
  lastName: ['Mugik', 'Liczydała', 'Bryk', 'Owalna', 'Kocipoł'],
  address: [
    'Wielka Aleja 32 27-056 Rusiowisko Kurdystan',
    'Big street 54/443 777-02 Rysstin England',
    'Zitontumantu 34 urr 554 88-002 Migudurur Nibums Rumbinff',
    'Kaloszowe brzozowisko nad ciemnym ruczajem 669 09-943 Nibylandia Karmonia',
    'Pichacani, Peru'
  ]
};

const month = ['January',
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

export {
  generateRandomNumber,
  users,
  month,
  generateRandomEmail,
  transformNumberFormat,
  generateNumberRandomTimes,
  randomSwitch
};
