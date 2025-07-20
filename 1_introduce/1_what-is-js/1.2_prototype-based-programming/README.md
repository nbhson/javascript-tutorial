# Prototype-based programming

Prototype-based programming là một phong cách lập trình hướng đối tượng trong đó các lớp không được định nghĩa rõ ràng mà được bắt nguồn bằng cách thêm các thuộc tính và phương thức vào một thể hiện của một lớp khác hoặc ít thường xuyên hơn là thêm chúng vào một đối tượng rỗng. 

Nói một cách đơn giản: kiểu phong cách này cho phép tạo một đối tượng mà không cần định nghĩa lớp của nó trước.

## Ví dụ minh họa

### 1. Tạo đối tượng từ đối tượng rỗng

```javascript
// Tạo một đối tượng rỗng
const person = {};

// Thêm thuộc tính và phương thức trực tiếp
person.name = "Nguyễn Văn A";
person.age = 25;
person.sayHello = function() {
    console.log(`Xin chào, tôi là ${this.name}`);
};

// Sử dụng đối tượng
person.sayHello(); // Output: Xin chào, tôi là Nguyễn Văn A
```

### 2. Tạo đối tượng từ đối tượng khác (prototype)

```javascript
// Tạo đối tượng gốc (prototype)
const animal = {
    name: "Unknown",
    makeSound: function() {
        console.log("Some sound");
    }
};

// Tạo đối tượng mới từ animal
const dog = Object.create(animal);
dog.name = "Buddy";
dog.makeSound = function() {
    console.log("Woof! Woof!");
};

// Tạo đối tượng khác từ animal
const cat = Object.create(animal);
cat.name = "Whiskers";
cat.makeSound = function() {
    console.log("Meow!");
};

dog.makeSound(); // Output: Woof! Woof!
cat.makeSound(); // Output: Meow!
```

### 3. Sử dụng constructor function

```javascript
// Constructor function (không phải class)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Thêm phương thức vào prototype
Person.prototype.sayHello = function() {
    console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi`);
};

Person.prototype.haveBirthday = function() {
    this.age++;
    console.log(`Tôi vừa có sinh nhật! Bây giờ tôi ${this.age} tuổi`);
};

// Tạo đối tượng mới
const person1 = new Person("Trần Thị B", 30);
const person2 = new Person("Lê Văn C", 25);

person1.sayHello(); // Output: Xin chào, tôi là Trần Thị B, 30 tuổi
person2.haveBirthday(); // Output: Tôi vừa có sinh nhật! Bây giờ tôi 26 tuổi
```

### 4. Kế thừa prototype

```javascript
// Đối tượng cơ sở
const vehicle = {
    brand: "Unknown",
    start: function() {
        console.log(`${this.brand} đang khởi động...`);
    }
};

// Tạo car từ vehicle
const car = Object.create(vehicle);
car.brand = "Toyota";
car.drive = function() {
    console.log(`${this.brand} đang chạy trên đường`);
};

// Tạo motorcycle từ vehicle
const motorcycle = Object.create(vehicle);
motorcycle.brand = "Honda";
motorcycle.ride = function() {
    console.log(`${this.brand} đang chạy trên đường`);
};

car.start(); // Output: Toyota đang khởi động...
car.drive(); // Output: Toyota đang chạy trên đường

motorcycle.start(); // Output: Honda đang khởi động...
motorcycle.ride(); // Output: Honda đang chạy trên đường
```

## Đặc điểm chính

1. **Không cần định nghĩa class**: Có thể tạo đối tượng trực tiếp
2. **Prototype chain**: Đối tượng có thể kế thừa từ đối tượng khác
3. **Dynamic**: Có thể thêm/sửa thuộc tính và phương thức bất cứ lúc nào
4. **Flexible**: Linh hoạt trong việc tạo và mở rộng đối tượng

Đây chính là cách JavaScript hoạt động theo mô hình prototype-based programming!