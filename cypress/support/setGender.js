import setElement from "./setElement";

export default function setGender() {
  const genders = ["Male", "Female", "Other"];
  const gender = setElement(genders);
  return gender;
}
