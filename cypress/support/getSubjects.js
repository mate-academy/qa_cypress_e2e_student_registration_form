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
  return subjects.filter(() => Math.random() * 10 > 5);
};

module.exports = getSubjects;
