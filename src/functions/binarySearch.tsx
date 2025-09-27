export default function binarySearch(arr: number[], num: number) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;

    while (left <= right) {
      steps++;
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) return { index: mid, steps };
      if (arr[mid] < num) left = mid + 1;
      else right = mid - 1;
    }

    return { index: -1, steps };
  }

 