export function displayCount(count: string | number) {
  const integer = parseInt(count as string);
  if (integer > 1000000) return `${(integer / 1000000).toFixed(1)}m`;
  else if (integer > 1000) return `${(integer / 1000).toFixed(1)}k`;
  return isNaN(integer) ? 0 : integer;
}

export function displayCurreny(amount?: string|number) {
  const text = `${parseInt(`${amount || 0}`)}`;
  return text.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}