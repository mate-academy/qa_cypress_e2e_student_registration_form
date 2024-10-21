const pickRandomly = require('./pickRandomly');

const subjects = [
  'English',
  'Computer Science',
  'Commerce',
  'Economics',
  'Accounting',
  'Maths',
  'Arts',
  'Social Studies',
  'Physics',
  'Chemistry',
  'Civics',
  'History',
  'Biology',
  'Hindi'
];

const getSubjects = () => {
  return pickRandomly(subjects);
};

module.exports = getSubjects;
