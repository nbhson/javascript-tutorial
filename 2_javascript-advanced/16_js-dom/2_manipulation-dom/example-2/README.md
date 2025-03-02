# Events quản lí trạng thái của trang web

## DOMContentLoaded 
- Được kích hoạt khi toàn bộ tài liệu HTML đã được tải và phân tích (parse) xong, nhưng các hình ảnh, stylesheet và các tài nguyên khác (như font hoặc video) chưa hoàn thành tải.

```js
document.addEventListener('DOMContentLoaded', function() {
    // Đoạn mã JavaScript bạn muốn thực thi khi DOM đã được tải
    console.log('DOM is ready!');
});
```

## load
- Khi toàn bộ trang và tất cả các tài nguyên khác nhau (hình ảnh, stylesheet, script, v.v.) đã được tải xong.
- Dùng để kiểm tra xem trang và tất cả các tài nguyên đã sẵn sàng.

```js
window.addEventListener('load', function() {
    console.log('Page and all resources are loaded');
});
```

## beforeunload & unload
- `beforeunload`: Khi người dùng chuẩn bị rời đi trang web (ví dụ: đóng tab hoặc trình duyệt).
- `unload`: Khi trang web đang bị đóng.

```js
window.addEventListener('beforeunload', function(event) {
    // Đoạn mã JavaScript bạn muốn thực thi trước khi người dùng rời đi
    // (thường được sử dụng để xác nhận rời đi)
    event.returnValue = '';
});

window.addEventListener('unload', function() {
    console.log('Page is being unloaded');
});
```

## hashchange
- Khi phần nhận dạng (hash) của URL thay đổi (sự thay đổi sau dấu "#").
- Thường được sử dụng trong các ứng dụng đơn trang (Single Page Applications - SPAs).

```js
window.addEventListener('hashchange', function() {
    console.log('Hash changed');
});
```

## resize
- Khi kích thước cửa sổ trình duyệt thay đổi.
- Sử dụng để làm đáp ứng giao diện người dùng đối với các thay đổi kích thước.

```js
window.addEventListener('resize', function() {
    console.log('Window size changed');
});
```