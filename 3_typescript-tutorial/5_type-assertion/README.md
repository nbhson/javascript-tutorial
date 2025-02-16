 # Type Assertion
> Chuyển đổi các kiểu dữ liệu qua lại với nhau (ép kiểu dữ liệu)

```ts
let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number
```

```ts
let mVariable: any = 'Typescript training'; // đang kiểu any
// let total = (<string>mVariable).length  // cách 1 
let total = (mVariable as string).length // cách 2
console.log(total);
```
