const { faker } = require('@faker-js/faker');

function generateRegistration() {
  const randomNumber = Math.floor(Math.random()*(4-1)+1);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${firstName}@test1.com`;
  const phoneNumber = Math.random().toString().slice(2,12);
  const streetName = faker.address.streetName();
  const city = faker.address.city();
  const country = faker.address.country();
  const address = `${randomNumber}, ${streetName}, ${city}, ${country} `;
  
  const listOfSex = ['Female', 'Male',  'Other'];
  const sex1 = listOfSex[Math.random()*listOfSex.length | 0]

  const listOfState = ['NCR','Uttar Pradesh', 'Haryana',  'Rajasthan'];
  const state = listOfState[Math.random()*listOfState.length | 0]

    //city
  const city1 = GetCity(state);
  function GetCity(){
    if (state === 'NCR') {
      const cityoflist = ['Delhi','Gurgaon', 'Noida'];
      return cityoflist[Math.random()*cityoflist.length | 0]
    };
    if (state === 'Uttar Pradesh') {
      const cityoflist = ['Agra','Lucknow', 'Merrut'];
      return cityoflist[Math.random()*cityoflist.length | 0]
    };
    
    if (state === 'Haryana') {
      const cityoflist = ['Karnal','Panipat'];
      return cityoflist[Math.random()*cityoflist.length | 0]
    };
    if (state === 'Rajasthan') {
      const cityoflist = ['Jaipur','Jaiselmer'];
      return cityoflist[Math.random()*cityoflist.length | 0]
    };
  };

  //SUBJECT
   const listOfSubjects = ['Maths','English','History', 'Chemistry', 'Physics', 'Hindi', 'Biology', 'Computer Science', 'Accounting', 'Commerce', 'Economics', 'Arts', 'Social Studies'];

   const subject1 = listOfSubjects[Math.random()*listOfSubjects.length | 0];

   let listOfSubjects2 = getNewListOfSubjects(listOfSubjects,subject1);

   function getNewListOfSubjects(listOfSubjects, subject1) {
     let Array = [];
     for (let i = 0; i < listOfSubjects.length; i++){
      if (listOfSubjects[i] !== subject1){
        Array.push(listOfSubjects[i])
      };
     }
     return Array
   };
  const subject2 = listOfSubjects2[Math.random()*listOfSubjects2.length | 0];

  //HOBBIES

  let hobbi = getGobbi(randomNumber)
  function getGobbi(randomNumber) {
    if (randomNumber === 1) {
      return 'Sports';
    }
    else if (randomNumber === 2){
      return 'Reading'
    }
    return 'Music'
  }



  return {firstName,
          lastName, 
          email,
          phoneNumber,
          address,
          randomNumber,
          sex1,
          state,
          subject1,
          subject2,
          city1,
          hobbi
        };

};

module.exports = {generateRegistration}
