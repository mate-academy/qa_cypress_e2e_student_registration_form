import setElement from "./setElement";
export default function setStateAndCity() {
  let city;
  const states = ["NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];
  const state = setElement(states);

  if (state === "NCR") {
    const cities = ["Delhi", "Gurgaon", "Noida"];
    city = setElement(cities);
  } else if (state === "Uttar Pradesh") {
    const cities = ["Agra", "Lucknow", "Merrut"];
    city = setElement(cities);
  } else if (state === "Haryana") {
    const cities = ["Karnal", "Panipat"];
    city = setElement(cities);
  } else if (state === "Rajasthan") {
    const cities = ["Jaipur", "Jaiselmer"];
    city = setElement(cities);
  }

  return { state, city };
}
