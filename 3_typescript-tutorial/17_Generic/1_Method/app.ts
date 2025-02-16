function getArray<T>(arr: T[]): T[] {
  return new Array<T>().concat(arr);
}

const stringArr = getArray<number>([1,2,3]);
console.log(stringArr); // [ 1, 2, 3 ]
