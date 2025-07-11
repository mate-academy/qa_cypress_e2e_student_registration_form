const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];

const cities = {
  NCR: ['Delhi', 'Gurgaon', 'Noida'],
  'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
  Haryana: ['Karnal', 'Panipat'],
  Rajasthan: ['Jaipur', 'Jaiselmer']
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function stateAndCity() {
  const stateIndex = getRandomInt(states.length);
  const cityIndex = getRandomInt(cities[states[stateIndex]].length);

  const state = states[stateIndex];
  const city = cities[states[stateIndex]][cityIndex];

  return { stateIndex, cityIndex, state, city };
}
