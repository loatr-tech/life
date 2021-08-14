export function displayCount(count: string | number) {
  const integer = parseInt(count as string);
  if (integer > 1000) return `${(integer/1000).toFixed(1)}k`;
  else if (integer > 1000000) return `${(integer/1000000).toFixed(1)}m`;
  return integer;
}