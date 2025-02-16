# Type Alias và Conditional Type

Kế tiếp, chúng ta sẽ tìm hiểu 1 ví dụ về `Type Alias` và `Conditional Type` nhé.

```typescript
type ObjectDictionary<T> = { [key: string]: T };
type ArrayDictionary<T> = { [key: string]: T[] };
export type Dictionary<T> = T extends []
  ? ArrayDictionary<T[number]>
  : ObjectDictionary<T>;

type StringDictionary = Dictionary<string>; // {[key: string]: string}
type NumberArrayDictionary = Dictionary<number[]>; // {[key: string]: number[]}
type UserEntity = Dictionary<User>; // {[key: string]: User}
```

Ở ví dụ trên, chúng ta có 3 `Type Alias`: `ObjectDictionary`, `ArrayDictionary`, và`Dictionary`.Trong đó, `Dictionary` có thể được xem là ** True Type ** (type được `export` ra cho bên ngoài sử dụng), còn `ObjectDictionary` và `ArrayDictionary` có thể được xem là ** Support Type ** (type dùng để hỗ trợ cho ** True Type **). Và code thì khá dễ hiểu, nếu mình truyền vào 1 type dạng `number[]` cho `type parameter T` ở `Dictionary<T>` thì `T extends []` sẽ được đính giá(evaluate) là `truthy` và `Dictionary<number[]>` sẽ trả về type`ArrayDictionary<number>`

Với `Type Alias` và`Conditional Type`, ** TS ** ngoài việc cung cấp cho chúng ta khả năng tạo những dạng type thú vị như trên và kết hợp chúng lại với nhau, thì ** TS ** còn cung cấp cho chúng ta 1 số _built - in_ type rất hay.Chúng ta cùng điểm qua một số _built - in_ types hay dùng nhé:

- `Exclude`
  - `Extract`
  - `Readonly`
  - `Partial`
  - `Nullable`
  - `Pick`
  - `Record`
  - `ReturnType`
  - `Omit`(Omit là`Type Alias` của`Pick` và`Exclude`)

    ```typescript
// Exclude/Extract
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.

// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T

type Readonly<T> = { readonly [P in keyof T]: T[P] }; // làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
type Partial<T> = { [P in keyof T]?: T[P] }; // làm tất cả các props trong type thành optional. Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
type Nullable<T> = { [P in keyof T]: T[P] | null }; // cái này tương tự như Partial, Partial sẽ trả về T[P] | undefined. Còn Nullable sẽ trả về T[P] | null

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick: Pick từ trong T những type có key là K
type Person = {
  firstName: string;
  lastName: string;
  password: string;
};

type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
// { prop1: string, prop2: string, prop3: string }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// ReturnType: trả về type của giá trị mà function T trả về.
type Result = ReturnType<() => string>; // string

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Omit: loại bỏ type có key là K trong T
type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}
```
