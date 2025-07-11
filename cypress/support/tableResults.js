export default function tableResults (
  firstName,
  lastName,
  email,
  gender,
  phone,
  year, month, day,
  subjects,
  hobby,
  address,
  state,
  city
) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return {
    'Student Name': `${firstName} ${lastName}`,
    'Student Email': `${email}`,
    Gender: `${gender}`,
    Mobile: `${phone}`,
    'Date of Birth': `${day} ${monthNames[month - 1]},${year}`,
    Subjects: `${subjects.join(', ')}`,
    Hobbies: `${hobby}`,
    Picture: '',
    Address: `${address}`,
    'State and City': `${state} ${city}`
  };
};
