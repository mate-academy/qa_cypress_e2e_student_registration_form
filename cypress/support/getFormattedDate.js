export function getFormattedDate(dateOfBirth) {
  const date = new Date(dateOfBirth);

  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month},${year}`;

  return formattedDate;
}
