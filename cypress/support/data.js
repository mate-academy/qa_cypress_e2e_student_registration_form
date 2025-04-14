const randomizeNumber = Math.random().toString().slice(2);

const textData = {
  // used my own values for more convenience
  firstName: 'Tom',
  lastName: 'Cool',
  userEmail: `tomcool${randomizeNumber}@gmail.com`,
  userNumber: '1234567890',
  // Didn't change the date, as the whole page went blank when I tried to remove the already declared date, and type my own
  // dateOfBirthInput: '05 June 2000',
  subjectsContainer: ['Computer Science'],
  currentAddress: 'city Non-existent, street 0',
  state: 'NCR',
  city: 'Delhi'
};

const optionData = {
  gender: 'Male',
  hobbies: ['Sports', 'Reading', 'Music']
};

module.exports = { textData, optionData };
