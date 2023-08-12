export function encodePostId(num: number): string {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const base = chars.length;
  const encoded = [];

  if (num === 0) {
    return chars[0];
  }

  while (num > 0) {
    const remainder = num % base;
    encoded.unshift(chars[remainder]);
    num = Math.floor(num / base);
  }

  return encoded.join('');
}
