class KeyValuePair<T, V> {
  private key: T;
  private value: V;

  constructor(key: T, value: V) {
    this.key = key;
    this.value = value;
  }
}
let kvp = new KeyValuePair<number, string>(1, "Sơn");
console.log(kvp);


export abstract class BaseServiceet<T> { 
  protected model!: T;

  find(): T[] {
    return [this.model]; 
  }
  findOne(): T {
    return this.model;
  }
}

interface Dog { bark(): void };
interface Cat { neon(): void };

export class DogService extends BaseServiceet<Dog>{ }
export class CatService extends BaseServiceet<Cat>{ }

const dogService = new DogService();
const catService = new CatService();

dogService.findOne().bark()
catService.findOne().neon()