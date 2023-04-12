export default function setElement(array) {
  const elementIndex = Math.floor(Math.random() * array.length);
  return array[elementIndex];
}
