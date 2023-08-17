export function displayCount(count: string | number) {
  let integer = parseInt(count as string);
  let unit = '';
  if (integer >= 1000 * 1000) {
    integer /= 1000 * 1000;
    unit = 'm';
  } else if (integer >= 1000) {
    integer /= 1000;
    unit = 'k';
  }

  if (unit) {
    return `${integer < 100 ? integer.toFixed(1) : integer.toFixed(0)}${unit}`;
  }

  return isNaN(integer) ? 0 : integer;
}

export function displayCurreny(amount?: string | number) {
  const text = `${parseInt(`${amount || 0}`)}`;
  return text.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
