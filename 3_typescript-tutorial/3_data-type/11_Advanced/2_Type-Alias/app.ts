interface User {
  firstName: string,
  lastName: string,
  age?: number
}

/**----------------------------------------MỘT SỐ HÀM BUILD-IN------------------------------------- */
// Exclude: Bỏ 
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.
let b: SomeDiff = "a";

// Extract: Giữ
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.
let c: SomeFilter = "c";

// Dùng Exclude để tạo type alias NonNullable
let d: NonNullable<number | string | undefined | null> = 'null';

// Readonly<T> làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
let e: Readonly<User> = {
  firstName: 'Son',
  lastName: 'Nguyen'
}

// Required<T> làm tất cả các props trong type thành bắt buộc
let f: Required<User> = {
  firstName: 'Son',
  lastName: 'Nguyen',
  age: 20
}

// type Partial<T> làm tất cả các props trong type thành optional
let j: Partial<User> = {}

// Pick: Pick từ trong T những type có key là K
type PersonWithNames = Pick<User, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

// Omit: loại bỏ type có key là K trong T, ngược lại với Pick
type PersonWithoutPassword = Omit<User, 'age'>; // {firstName: string, lastName: string}

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;

// ReturnType: trả về type của giá trị mà function T trả về.
function sum(a: number, b: number): number {
  return a + b;
}
type Result = ReturnType<typeof sum>; // number

