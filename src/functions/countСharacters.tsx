export default function countCharacters(str: string) {
  let result: Record<string, number> = {};

  for (let char of str) {
    if (result[char]) {
      result[char]++;       
    } else {
      result[char] = 1;     
    }
  }

  return result;
}