# Garbage Collection

Garbage collection là thuật ngữ được sử dụng trong lập trình máy tính để mô tả quá trình tìm kiếm và xóa các đối tượng không còn được các đối tượng khác tham chiếu đến.

Nói cách khác, garbage collection là quá trình loại bỏ bất kỳ đối tượng nào không được bất kỳ đối tượng nào khác sử dụng. Thường được viết tắt là "GC", garbage collection là thành phần cơ bản của hệ thống quản lý bộ nhớ được JavaScript sử dụng.

## Tại sao cần Garbage Collection?

Trong JavaScript, khi bạn tạo biến, object, function, v.v., chúng sẽ được lưu trữ trong bộ nhớ. Nếu không có cơ chế tự động dọn dẹp, bộ nhớ sẽ bị đầy và gây ra lỗi "Out of Memory".

```javascript
// Ví dụ về memory leak nếu không có GC
function createObjects() {
    let objects = [];
    for (let i = 0; i < 1000000; i++) {
        objects.push({ id: i, data: "some data" });
    }
    // Nếu không có GC, tất cả objects này sẽ tồn tại mãi mãi
    // ngay cả khi function đã kết thúc
}
```

## Cách Garbage Collection hoạt động

### 1. Mark and Sweep Algorithm (Thuật toán chính của JavaScript)

JavaScript sử dụng thuật toán "Mark and Sweep" với các bước:

1. **Mark Phase**: Đánh dấu tất cả objects có thể truy cập được
2. **Sweep Phase**: Xóa tất cả objects không được đánh dấu

```javascript
// Ví dụ minh họa
let user = { name: "John" };
let admin = user; // admin tham chiếu đến cùng object

user = null; // user không còn tham chiếu đến object
// Object { name: "John" } vẫn được admin tham chiếu, nên chưa bị GC

admin = null; // Bây giờ object { name: "John" } không còn được tham chiếu
// Object này sẽ bị GC thu hồi
```

### 2. Reference Counting (Cách tiếp cận cũ)

Một số engine cũ sử dụng reference counting - đếm số lượng tham chiếu đến object:

```javascript
let obj1 = { name: "Object 1" };
let obj2 = obj1; // Reference count = 2

obj1 = null; // Reference count = 1
obj2 = null; // Reference count = 0, object sẽ bị xóa
```

**Vấn đề với Reference Counting:**
```javascript
// Circular reference - memory leak với reference counting
let obj1 = {};
let obj2 = {};
obj1.ref = obj2; // obj1 tham chiếu đến obj2
obj2.ref = obj1; // obj2 tham chiếu đến obj1

obj1 = null;
obj2 = null;
// Với reference counting, reference count không bao giờ = 0
// Nhưng với mark and sweep, cả hai đều không thể truy cập được
```

## Các loại Garbage Collection

### 1. Minor GC (Young Generation)
- Thu gom objects tạm thời, có tuổi thọ ngắn
- Chạy thường xuyên và nhanh
- Sử dụng "Copying" algorithm

### 2. Major GC (Old Generation)
- Thu gom objects có tuổi thọ dài
- Chạy ít thường xuyên hơn nhưng chậm hơn
- Sử dụng "Mark and Sweep" algorithm

## Memory Leaks thường gặp

### 1. Global Variables
```javascript
// Memory leak
function createGlobal() {
    globalVar = "I'm global"; // Thiếu var/let/const
}

// Cách sửa
function createLocal() {
    let localVar = "I'm local"; // Sẽ bị GC khi function kết thúc
}
```

### 2. Event Listeners
```javascript
// Memory leak
function addListener() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log('clicked');
    });
    // Event listener không được remove
}

// Cách sửa
function addListener() {
    const button = document.getElementById('myButton');
    const handler = function() {
        console.log('clicked');
    };
    button.addEventListener('click', handler);
    
    // Remove khi cần
    button.removeEventListener('click', handler);
}
```

### 3. Closures
```javascript
// Memory leak tiềm ẩn
function createClosure() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
        console.log('Closure executed');
        // largeData vẫn được giữ trong memory
    };
}

const closure = createClosure();
// largeData không bao giờ được giải phóng
```

## Tối ưu hóa cho Garbage Collection

### 1. Tránh tạo objects không cần thiết
```javascript
// Không tốt
function processData(data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        result.push({
            id: data[i].id,
            name: data[i].name,
            processed: true
        });
    }
    return result;
}

// Tốt hơn - sử dụng object pool hoặc reuse objects
const objectPool = [];
function getObject() {
    return objectPool.pop() || { id: 0, name: '', processed: false };
}
```

### 2. Sử dụng WeakMap và WeakSet
```javascript
// WeakMap cho phép GC thu hồi keys khi không còn tham chiếu
const cache = new WeakMap();

function cacheData(key, data) {
    cache.set(key, data);
    // Khi key object bị null, cache entry cũng sẽ bị GC
}
```

### 3. Tránh circular references
```javascript
// Không tốt
function createCircular() {
    const obj1 = {};
    const obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;
    return obj1;
}

// Tốt hơn - sử dụng weak references
function createWeakCircular() {
    const obj1 = {};
    const obj2 = {};
    obj1.ref = new WeakRef(obj2);
    obj2.ref = new WeakRef(obj1);
    return obj1;
}
```

## Monitoring Garbage Collection

### Chrome DevTools
```javascript
// Bật GC monitoring
console.log('Memory usage:', performance.memory);

// Force GC (chỉ trong DevTools)
// gc() - chỉ hoạt động khi --expose-gc flag được set
```

### Node.js
```javascript
// Bật GC monitoring
const v8 = require('v8');
console.log('Heap statistics:', v8.getHeapStatistics());

// Force GC
if (global.gc) {
    global.gc();
}
```

## Kết luận

Garbage Collection là một tính năng quan trọng của JavaScript, giúp lập trình viên không phải lo lắng về việc quản lý bộ nhớ thủ công. Tuy nhiên, hiểu cách GC hoạt động giúp bạn viết code hiệu quả hơn và tránh memory leaks.

**Lưu ý quan trọng:**
- GC là tự động, không thể kiểm soát trực tiếp
- Tập trung vào việc tránh memory leaks thay vì tối ưu GC
- Sử dụng DevTools để monitor memory usage
- Hiểu lifecycle của objects trong ứng dụng
