import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

function generateUser(){
    const randomNumber = Math.random().toString().slice(2, 6)
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = `${firstName + randomNumber}@gmail.com`
    const password = 'Test123@'
    const mobile = faker.phone.number('##########')
    const dateOfBirth = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
    const arr = ['Male', 'Female', 'Other',]
    let rand = Math.floor(Math.random() * arr.length);
    const gender = (arr[rand])
    const arrHobby = ['1', '2', '3',];
    let randH = Math.floor(Math.random() * arr.length);
    const hobbies = (arrHobby[randH])
    let hobby = ''
    if (hobbies === '1') {
        hobby = 'Sports'
    }else if (hobbies === '2') {hobby = 'Reading'
        }else{
             hobby = 'Music'
    };
    const adress = faker.address.streetAddress()
    
    return{firstName, lastName, email, mobile, dateOfBirth, hobbies, hobby, adress, password, gender};
}
module.exports = { generateUser };