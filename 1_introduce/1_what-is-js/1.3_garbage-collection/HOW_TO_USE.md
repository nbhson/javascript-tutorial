# Hướng dẫn sử dụng Garbage Collection Demo

## 📁 Cấu trúc thư mục

```
1.3_garbage-collection/
├── README.md                    # Giải thích chi tiết về GC
├── garbage-collection-examples.js  # Code ví dụ thực tế
├── index.html                   # Demo web interface
└── HOW_TO_USE.md               # Hướng dẫn này
```

## 🚀 Cách chạy demo

### 1. Chạy trong trình duyệt

1. Mở file `index.html` trong trình duyệt web
2. Demo sẽ tự động chạy khi trang load
3. Sử dụng các nút để:
   - **▶️ Chạy Demo**: Chạy lại toàn bộ demo
   - **🗑️ Xóa Console**: Xóa output trong console
   - **🔄 Force GC**: Force garbage collection (nếu có sẵn)

### 2. Chạy trong Node.js

```bash
# Chạy với flag để enable force GC
node --expose-gc garbage-collection-examples.js

# Hoặc chạy bình thường
node garbage-collection-examples.js
```

### 3. Chạy trong browser console

1. Mở DevTools (F12)
2. Copy và paste code từ `garbage-collection-examples.js`
3. Nhấn Enter để chạy

## 📊 Monitoring Memory Usage

### Trong Browser

```javascript
// Kiểm tra memory usage
console.log(performance.memory);

// Force GC (chỉ trong DevTools)
gc();
```

### Trong Node.js

```javascript
// Memory usage
const v8 = require('v8');
console.log(v8.getHeapStatistics());

// Force GC
if (global.gc) {
    global.gc();
}
```

## 🔍 Chrome DevTools Memory Tab

1. Mở DevTools → Memory tab
2. Chọn "Heap snapshot"
3. Chụp snapshot trước và sau khi chạy demo
4. So sánh để thấy sự thay đổi memory

## 📝 Các ví dụ trong demo

### 1. Basic Reference Example
- Tạo object và tham chiếu
- Xóa tham chiếu từng bước
- Quan sát khi object được GC

### 2. Circular Reference Example
- Tạo circular reference
- Chứng minh Mark and Sweep xử lý được circular reference

### 3. Memory Leak Examples
- **Global Variables**: Thiếu var/let/const
- **Event Listeners**: Không remove listeners
- **Closures**: Giữ data lớn trong closure

### 4. Weak References
- Sử dụng WeakMap
- Thấy cách weak references cho phép GC

### 5. Object Pool
- Implement object pooling
- Tái sử dụng objects thay vì tạo mới

### 6. Performance Monitoring
- Theo dõi memory usage
- Simulate memory allocation

### 7. Best Practices
- Local variables
- Proper cleanup
- Efficient loops

## 🛠️ Troubleshooting

### Force GC không hoạt động
- Trong browser: Chỉ hoạt động trong DevTools
- Trong Node.js: Cần flag `--expose-gc`

### Memory info không hiển thị
- `performance.memory` chỉ có trong Chrome
- Trong Firefox/Safari sẽ không có thông tin này

### Demo chạy chậm
- Đây là bình thường, GC có thể mất thời gian
- Memory usage có thể tăng trước khi GC chạy

## 📚 Tài liệu tham khảo

- [MDN - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [V8 Garbage Collection](https://v8.dev/blog/free-buffer)
- [Chrome DevTools Memory](https://developers.google.com/web/tools/chrome-devtools/memory-problems)

## 🎯 Mục tiêu học tập

Sau khi hoàn thành demo này, bạn sẽ hiểu:

1. ✅ Cách GC hoạt động trong JavaScript
2. ✅ Các loại memory leaks và cách tránh
3. ✅ Best practices để tối ưu memory
4. ✅ Cách monitor memory usage
5. ✅ Sử dụng WeakMap/WeakSet
6. ✅ Implement object pooling

## 💡 Tips

- Chạy demo nhiều lần để thấy pattern
- Thử nghiệm với các giá trị khác nhau
- Sử dụng DevTools Memory tab để quan sát chi tiết
- Thực hành viết code tránh memory leaks 