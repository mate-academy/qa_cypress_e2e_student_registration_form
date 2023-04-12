function randomHobby() {
    let randomIndex = Math.floor(Math.random() *2)
    let hobbies = ['Sports', 'Reading', 'Music']

    return hobbies[randomIndex]
}

module.exports = { randomHobby };