export function getFormattedHobbies(hobbies) {
  return ['Sports', 'Reading', 'Music'].filter((_, i) => hobbies[i]).join(', ');
}
