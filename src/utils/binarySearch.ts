function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 타겟이 발견되지 않은 경우
  return -1;
}

function binarySearchWithSort(arr: number[], target: number): number {
  const list = arr.sort((a, b) => Number(a) - Number(b));
  return binarySearch(list, target);
}


export default binarySearch;
export { binarySearch, binarySearchWithSort };