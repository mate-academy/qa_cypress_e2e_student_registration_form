function randomState() {
    let randomIndex = Math.floor(Math.random() *2)
    let states = ['Uttar Pradesh', 'Haryana', 'Rajasthan']

    return states[randomIndex]
}

module.exports = { randomState };