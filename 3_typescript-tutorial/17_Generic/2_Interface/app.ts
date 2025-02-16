interface KeyPair<T, U> {
  key: T;
  value: U;
}
let employee: KeyPair<number, string> = { key: 1, value: "Sơn" };
let banking: KeyPair<number, number> = { key: 2, value: 8569846854713168 };

/** Generic Interface as Function Type */
interface KeyValueProcessor<T, U> {
  (key: T, val: U): void;
}

function processNumKeyPairs(key: number, value: number): void {
  console.log("processNumKeyPairs: key = " + key + ", value = " + value);
}
let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345
