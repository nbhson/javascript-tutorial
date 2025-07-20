# Dynamic Typing

## 🔍 Dynamic Typing là gì?

Dynamic typing (kiểu động) là một đặc điểm của ngôn ngữ lập trình trong đó kiểu dữ liệu của biến được xác định **tại thời điểm chạy** (runtime) thay vì tại thời điểm biên dịch (compile time).

### So sánh với Static Typing

| Đặc điểm | Dynamic Typing | Static Typing |
|----------|----------------|---------------|
| **Thời điểm xác định kiểu** | Runtime | Compile time |
| **Kiểm tra lỗi** | Runtime | Compile time |
| **Hiệu suất** | Chậm hơn | Nhanh hơn |
| **Linh hoạt** | Cao | Thấp |
| **Ví dụ ngôn ngữ** | JavaScript, Python, Ruby | Java, C++, TypeScript |

## 📝 Ví dụ minh họa

### JavaScript (Dynamic Typing)

```javascript
let variable = 42;        // number
console.log(typeof variable); // "number"

variable = "Hello";       // string
console.log(typeof variable); // "string"

variable = true;          // boolean
console.log(typeof variable); // "boolean"

variable = [1, 2, 3];     // object (array)
console.log(typeof variable); // "object"

variable = { name: "John" }; // object
console.log(typeof variable); // "object"

variable = function() {}; // function
console.log(typeof variable); // "function"
```

### TypeScript (Static Typing)

```typescript
let variable: number = 42;
// variable = "Hello"; // ❌ Lỗi compile time

let dynamicVariable: any = 42;
dynamicVariable = "Hello"; // ✅ OK với any type
```

## 🎯 Đặc điểm của Dynamic Typing

### 1. Kiểu dữ liệu linh hoạt

```javascript
// Một biến có thể thay đổi kiểu dữ liệu
let data = 100;           // number
data = "one hundred";     // string
data = [100, 200, 300];   // array
data = { value: 100 };    // object
```

### 2. Tự động type conversion

```javascript
// JavaScript tự động chuyển đổi kiểu
console.log("5" + 3);     // "53" (string concatenation)
console.log("5" - 3);     // 2 (numeric subtraction)
console.log("5" * 3);     // 15 (numeric multiplication)
console.log("5" / 3);     // 1.666... (numeric division)

// Truthy/Falsy values
console.log(Boolean(""));     // false
console.log(Boolean("hello")); // true
console.log(Boolean(0));      // false
console.log(Boolean(42));     // true
```

### 3. Duck Typing

```javascript
// "If it walks like a duck and quacks like a duck, it's a duck"
function makeSound(animal) {
    return animal.sound();
}

const duck = {
    sound: () => "Quack!"
};

const dog = {
    sound: () => "Woof!"
};

console.log(makeSound(duck)); // "Quack!"
console.log(makeSound(dog));  // "Woof!"
```

## ✅ Ưu điểm của Dynamic Typing

### 1. Linh hoạt cao

```javascript
// Có thể tạo generic functions dễ dàng
function processData(data) {
    if (Array.isArray(data)) {
        return data.length;
    } else if (typeof data === 'string') {
        return data.length;
    } else if (typeof data === 'object') {
        return Object.keys(data).length;
    }
    return 0;
}

console.log(processData([1, 2, 3]));     // 3
console.log(processData("hello"));       // 5
console.log(processData({ a: 1, b: 2 })); // 2
```

### 2. Prototype-based programming

```javascript
// Có thể thêm properties và methods động
const person = { name: "John" };
person.age = 30;                    // Thêm property
person.greet = function() {          // Thêm method
    return `Hello, I'm ${this.name}`;
};

console.log(person.greet()); // "Hello, I'm John"
```

### 3. Rapid prototyping

```javascript
// Phát triển nhanh, không cần khai báo kiểu
function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

const user = createUser("Alice", 25);
console.log(user); // { name: "Alice", age: 25, isAdult: true }
```

## ❌ Nhược điểm của Dynamic Typing

### 1. Lỗi runtime

```javascript
function calculateArea(width, height) {
    return width * height;
}

// Có thể gọi với sai kiểu dữ liệu
console.log(calculateArea("5", 10)); // 50 (không lỗi, nhưng có thể không mong muốn)
console.log(calculateArea("abc", 10)); // NaN (lỗi runtime)

// Với static typing, lỗi này sẽ được phát hiện ở compile time
```

### 2. Khó debug

```javascript
function processUser(user) {
    // Không biết chắc user có property 'name' không
    return user.name.toUpperCase(); // Có thể lỗi nếu user.name là undefined
}

// Lỗi chỉ xảy ra khi chạy
// processUser({}); // TypeError: Cannot read property 'toUpperCase' of undefined
```

### 3. Hiệu suất thấp hơn

```javascript
// JavaScript engine phải kiểm tra kiểu tại runtime
function add(a, b) {
    // Engine phải kiểm tra kiểu của a và b mỗi lần gọi
    return a + b;
}
```

## 🛠️ Cách xử lý Dynamic Typing

### 1. Type checking

```javascript
function safeAdd(a, b) {
    // Kiểm tra kiểu trước khi thực hiện
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new TypeError('Both arguments must be numbers');
}

console.log(safeAdd(5, 3));     // 8
// console.log(safeAdd("5", 3)); // TypeError
```

### 2. Default values

```javascript
function greet(name) {
    // Đảm bảo name luôn là string
    const safeName = String(name || 'Anonymous');
    return `Hello, ${safeName}!`;
}

console.log(greet("John"));     // "Hello, John!"
console.log(greet(123));        // "Hello, 123!"
console.log(greet(null));       // "Hello, Anonymous!"
```

### 3. Validation

```javascript
function validateUser(user) {
    const errors = [];
    
    if (!user || typeof user !== 'object') {
        errors.push('User must be an object');
    }
    
    if (!user.name || typeof user.name !== 'string') {
        errors.push('User must have a valid name');
    }
    
    if (typeof user.age !== 'number' || user.age < 0) {
        errors.push('User must have a valid age');
    }
    
    return errors;
}

const user1 = { name: "John", age: 30 };
const user2 = { name: 123, age: "invalid" };

console.log(validateUser(user1)); // []
console.log(validateUser(user2)); // ["User must have a valid name", "User must have a valid age"]
```

## 🔧 Tools và Best Practices

### 1. JSDoc comments

```javascript
/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 */
function calculateArea(width, height) {
    return width * height;
}
```

### 2. ESLint rules

```javascript
// .eslintrc.js
module.exports = {
    rules: {
        'valid-typeof': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'error'
    }
};
```

### 3. TypeScript (Static typing cho JavaScript)

```typescript
interface User {
    name: string;
    age: number;
    email?: string;
}

function processUser(user: User): string {
    return `${user.name} is ${user.age} years old`;
}

// TypeScript sẽ báo lỗi nếu truyền sai kiểu
// processUser({ name: "John", age: "30" }); // Error: age must be number
```

## 🎯 Kết luận

Dynamic typing là một đặc điểm quan trọng của JavaScript, mang lại:

**Ưu điểm:**
- ✅ Linh hoạt cao trong phát triển
- ✅ Rapid prototyping
- ✅ Dễ học và sử dụng
- ✅ Prototype-based programming

**Nhược điểm:**
- ❌ Lỗi runtime khó phát hiện
- ❌ Hiệu suất thấp hơn
- ❌ Khó maintain code lớn

**Best Practices:**
- 🔧 Sử dụng type checking
- 🔧 Validation input
- 🔧 JSDoc comments
- 🔧 ESLint rules
- 🔧 Consider TypeScript cho dự án lớn

Dynamic typing phù hợp cho:
- Prototyping nhanh
- Scripting
- Web development
- Small to medium projects

Static typing phù hợp cho:
- Large-scale applications
- Team development
- Critical systems
- Long-term maintenance
