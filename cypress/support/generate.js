module.exports = { generateRandomString, 
                   generateRandomEmail,
                   generateRandomPhoneNumber,
                   generateRandomAddress,
                   getRandomGender,
                   getRandomHobby 
                };


function generateRandomString() {
    return Math.random().toString(36).substring(7);
  }
  
  function generateRandomEmail() {
    return generateRandomString() + '@gmail.com';
  }
  
  function generateRandomPhoneNumber() {
    return Math.floor(Math.random() * 10000000000).toString();
  }
  
  function generateRandomAddress() {
    return (
      Math.floor(Math.random() * 1000) +
      ' ' +
      generateRandomString() +
      ' St, ' +
      generateRandomString() +
      ' City, ' +
      generateRandomString() +
      ' Country'
    );
  }
  
  function getRandomGender() {
    const genders = ['Male', 'Female', 'Other'];
    return genders[Math.floor(Math.random() * genders.length)];
  }
  
  function getRandomHobby() {
    const hobbies = ['Sports', 'Reading', 'Music'];
    return hobbies[Math.floor(Math.random() * hobbies.length)];
  }