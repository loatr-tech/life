const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function encodePostId(num: number): string {
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

export function decodePostId(encoded: string): number {
  const base = chars.length;
  const charToIndex = new Map();
  for (let i = 0; i < chars.length; i++) {
    charToIndex.set(chars[i], i);
  }

  let num = 0;
  for (let i = 0; i < encoded.length; i++) {
    const char = encoded.charAt(i);
    const charIndex = charToIndex.get(char);
    if (charIndex === undefined) {
      throw new Error(`Invalid character in encoded string: ${char}`);
    }
    num = num * base + charIndex;
  }

  return num;
}
