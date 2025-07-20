# Browser Caching JavaScript: Nơi Lưu Trữ & Cách Hoạt Động

## Mục lục
1. [Nơi JavaScript Được Cache](#1-noi-javascript-duoc-cache)
2. [Cách Browser Caching Hoạt Động](#2-cach-browser-caching-hoat-dong)
3. [Cache Headers Quan Trọng](#3-cache-headers-quan-trong)
4. [Frontend Frameworks & Browser Caching](#4-frontend-frameworks--browser-caching)
5. [Cách Nhận Biết File Đã Được Cache](#5-cach-nhan-biet-file-da-duoc-cache)
6. [Cache Invalidation là gì?](#6-cache-invalidation-la-gi)
7. [Cache Invalidation trong Angular](#7-cache-invalidation-trong-angular)
8. [Tóm Lại](#8-tom-lai)

---

## 1. Nơi JavaScript Được Cache

JavaScript files được cache ở **Browser Cache Storage** – một phần của bộ nhớ local của trình duyệt:

- **Memory Cache:** Cache trong RAM của trình duyệt (nhanh nhất)
- **Disk Cache:** Cache trên ổ cứng của máy tính (lâu dài hơn)
- **Service Worker Cache:** Cache được quản lý bởi Service Worker (cho offline apps)

---

## 2. Cách Browser Caching Hoạt Động

1. **Lần truy cập đầu tiên:**
   - Browser tải file JS từ server
   - Lưu vào cache với metadata (URL, timestamp, headers)
   - Thực thi script
2. **Lần truy cập tiếp theo:**
   - Browser kiểm tra cache
   - Nếu file còn hợp lệ (dựa trên Cache-Control headers), load từ cache thay vì tải lại từ server

---

## 3. Cache Headers Quan Trọng

Một số header HTTP kiểm soát việc cache:

```http
# Cache trong 1 năm (cho static assets)
Cache-Control: public, max-age=31536000

# Cache trong 1 giờ
Cache-Control: public, max-age=3600

# Không cache
Cache-Control: no-cache, no-store
```

---

## 4. Frontend Frameworks & Browser Caching

### Angular (và các framework hiện đại)

- Khi build Angular (hoặc React, Vue...), các file JS/CSS sẽ có tên như `main.abc123.js`.
- Khi code thay đổi, hash đổi → browser sẽ tải file mới. Nếu không đổi, browser sẽ lấy từ cache.
- Điều này giúp tận dụng tối đa browser caching mà không lo bị lỗi "cache cũ".

**Ví dụ cấu hình Angular:**
```json
"options": {
  "outputHashing": "all"
}
```

---

## 5. Cách Nhận Biết File Đã Được Cache

- **Cột Size**
  - `(disk cache)`: File được load từ ổ cứng
  - `(memory cache)`: File được load từ RAM
  - `(from ServiceWorker)`: File được load từ Service Worker cache
- **Thời Gian Load**
  - `0ms`: Load từ memory cache
  - `1ms`: Load từ disk cache
  - `>100ms`: Tải từ server

> **Tip:**
> Để kiểm tra cache, mở DevTools → tab Network → reload trang. Bạn sẽ thấy các file JS có trạng thái "from disk cache" hoặc "from memory cache" nếu đã được cache.

---

## 6. Cache Invalidation là gì?

**Cache invalidation** (làm mất hiệu lực cache) là quá trình xóa bỏ hoặc cập nhật dữ liệu đã được lưu trong cache khi dữ liệu gốc trên server thay đổi, nhằm đảm bảo người dùng luôn nhận được thông tin mới nhất thay vì dữ liệu cũ đã cache.

### Ví dụ thực tế
- Bạn cập nhật file `main.js` trên server, nhưng trình duyệt vẫn dùng bản cũ trong cache → người dùng không thấy thay đổi mới.
- Khi cache invalidation xảy ra, trình duyệt sẽ xóa hoặc bỏ qua bản cũ, tải lại file mới từ server.

### Các phương pháp cache invalidation phổ biến
1. **Time-based (Expiration):**
   - Đặt thời gian hết hạn (max-age, expires) cho cache.
   - Sau thời gian này, cache sẽ bị coi là không hợp lệ và phải tải lại từ server.
2. **Versioning/Hashing:**
   - Đổi tên file khi có thay đổi (ví dụ: `main.abc123.js` → `main.def456.js`).
   - Khi tên file đổi, browser buộc phải tải file mới, file cũ sẽ bị bỏ qua.
3. **Manual Purge:**
   - Xóa cache thủ công trên server hoặc CDN khi có cập nhật.
4. **Cache-Control Headers:**
   - Sử dụng các header như `no-cache`, `must-revalidate`, `max-age=0` để kiểm soát khi nào cache bị làm mới.

### Tại sao cache invalidation quan trọng?
- Đảm bảo người dùng luôn nhận được dữ liệu mới nhất.
- Tránh lỗi hiển thị do dùng dữ liệu cũ.
- Cân bằng giữa hiệu suất (tận dụng cache) và tính chính xác (dữ liệu mới).

**Tóm lại:**
Cache invalidation là cơ chế giúp loại bỏ hoặc cập nhật cache khi dữ liệu gốc thay đổi, đảm bảo người dùng không bị “kẹt” với dữ liệu cũ.

---

## 7. Cache Invalidation trong Angular

### Cơ chế hoạt động

Angular sử dụng **file versioning/hashing** khi build production để tự động cache invalidate:

- Khi build (`ng build --prod`), Angular tạo ra các file JS/CSS có tên chứa hash dựa trên nội dung file.
- Nếu code thay đổi, hash đổi → tên file đổi → browser buộc phải tải file mới.
- File cũ sẽ không còn được tham chiếu trong `index.html` nên browser sẽ không dùng lại nữa.

### Quy trình cache invalidation của Angular

1. **Build:** Angular tạo ra các file JS/CSS có tên chứa hash.
2. **Deploy:** Server/CDN cho phép cache lâu dài các file này (ví dụ: 1 năm).
3. **Update:** Khi code thay đổi, hash đổi → tên file đổi → browser buộc phải tải file mới.
4. **index.html:** Luôn được tải mới để cập nhật link đến các file JS/CSS mới.

### Ví dụ thực tế

| Lần deploy | Tên file JS           |
|------------|----------------------|
| Lần 1      | main.abc123.js       |
| Lần 2      | main.def456.js       |

- Khi deploy lần 2, `index.html` sẽ tham chiếu đến `main.def456.js`.
- Browser sẽ tải file mới, file cũ sẽ không còn được dùng nữa.

### Lợi ích
- **Tự động, không cần xóa cache thủ công.**
- **Không lo người dùng bị “kẹt” với file cũ.**
- **Tận dụng tối đa hiệu suất cache của browser/CDN.**

---

## 8. Tóm Lại

- **Tất cả các framework hiện đại** (Angular, React, Vue, Svelte, v.v.) đều tận dụng browser caching cho JS/CSS/images.
- File JS được cache ở bộ nhớ của trình duyệt (RAM, ổ cứng, hoặc Service Worker nếu có).
- Khi code thay đổi, framework sẽ đổi tên file (thêm hash) để browser biết cần tải file mới.
- Điều này giúp tăng tốc độ tải trang, giảm băng thông, và cải thiện trải nghiệm người dùng.

---

Nếu cần giải thích sâu hơn về Service Worker cache hoặc cache invalidation, hãy hỏi thêm nhé!