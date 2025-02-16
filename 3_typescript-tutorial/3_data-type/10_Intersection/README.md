# Intersection

Khác với union là a "hoặc" b (a | b) thì Intersection là a "và" b

```ts
function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
  return { ...o1, ...o2 };
}
let result = merge({ foo: 'bar' }, { bar: 'foo' });
console.log(result.foo) // bar
console.log(result.bar) // foo
```

Ngoài những cách sử dụng thông thường trong function hoặc trong những đoạn code mà khái niệm OOP thông thường không áp dụng được thì Intersection Type được dùng rất nhiều trong việc thiết kế hệ thống type cho những thư viện UI Components. Ví dụ:

```ts
type StyleProp = {
  backgroundColor: string;
  color: string;
  margin: string;
  padding: string;
  ...
}

type ButtonProps = {
  onClick: (event: MouseEvent) => void;
} & StyleProps;

type TextProps = {
  fontSize: string;
  fontWeight: number;
  ...
} & StyleProps;
```

Những Component này có những type Style khác nhau, nhưng cũng có những type cơ bản giống nhau. Ví dụ như Text sẽ có thêm fontSize, fontWeight còn Button sẽ có onClick. Tác giả của những thư viện UI này sẽ sử dụng Intersection Type để viết thư viện UI của họ mà không phải lặp đi lặp lại nhiều 1 số type giống nhau. Cách dùng Intersection Type này còn có tên gọi khác là Type Composition.

> Type Composition là 1 chủ đề rất hay, và rộng lớn trong TS. Các bạn nên google để tự tìm hiểu thêm nhé.