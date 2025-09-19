export default function countCharacters(str: string) {
  const result: Record<string, number> = {};

  for (const char of str) {
    if (result[char]) {
      result[char]++;       
    } else {
      result[char] = 1;     
    }
  }

  return result;
}