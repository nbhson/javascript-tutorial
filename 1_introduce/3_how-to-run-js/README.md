# Cách Thêm JavaScript vào HTML cho Người Mới Bắt Đầu


## Giới Thiệu

Bài viết này sẽ cung cấp một cái nhìn tổng quan toàn diện về việc thêm JavaScript vào các file HTML của bạn, chi tiết ba phương pháp cốt lõi: đặt script inline trong `<head>`, inline trong `<body>`, và liên kết đến các file `.js` bên ngoài. Ngoài việc chỉ giải thích "cách làm", bài viết này sẽ đi sâu vào "tại sao" quan trọng, giải thích những tác động đáng kể về hiệu suất của mỗi cách tiếp cận, bao gồm các khái niệm như render-blocking, browser caching, và việc sử dụng các thuộc tính hiện đại như `defer` và `async`.

Để kết nối lý thuyết và thực hành, hướng dẫn này bao gồm các ví dụ thực tế như tạo dark mode toggle và xác thực web form. Cuối cùng, nó sẽ trang bị cho bạn những best practices cần thiết để viết code sạch, dễ bảo trì và hướng dẫn khắc phục sự cố để giúp bạn giải quyết các lỗi phổ biến của người mới bắt đầu bằng cách sử dụng developer console của trình duyệt, đảm bảo bạn có thể bắt đầu các dự án phát triển web với sự tự tin.

> **Lưu ý:** Cần triển khai dự án JavaScript nhanh chóng? Kiểm tra DigitalOcean App Platform và triển khai dự án JS trực tiếp từ GitHub trong vài phút.

## Những Điểm Chính

- **Best practice** để thêm JavaScript là sử dụng file `.js` bên ngoài để tổ chức, bảo trì và tái sử dụng tốt hơn.
- Đặt thẻ `<script>` trong `<head>` là **tệ nhất** cho hiệu suất vì nó render-blocking, buộc người dùng nhìn thấy trang trống.
- Sử dụng thuộc tính `defer` trên script bên ngoài là cách tiếp cận hiện đại được khuyến nghị cho hiệu suất tối ưu.
- File JavaScript bên ngoài cung cấp tăng hiệu suất đáng kể thông qua browser caching, điều mà inline script không có.
- Một file `.js` duy nhất có thể được liên kết trên nhiều trang, làm cho việc cập nhật và bảo trì hiệu quả hơn nhiều.
- **Developer Console (F12)** là công cụ quan trọng nhất để khắc phục sự cố các lỗi JavaScript phổ biến.

## Phương Pháp 1: Cách Thêm Inline Script vào `<head>`

Bạn có thể thêm mã JavaScript vào tài liệu HTML bằng cách sử dụng thẻ HTML chuyên dụng `<script>` bao quanh mã JavaScript. Thẻ `<script>` có thể được đặt trong phần `<head>` của HTML hoặc trong phần `<body>`, tùy thuộc vào thời điểm bạn muốn JavaScript tải.

Thông thường, mã JavaScript có thể đi bên trong phần `<head>` của tài liệu để giữ nó được chứa và tách khỏi nội dung chính của tài liệu HTML.

Hãy xem xét tài liệu HTML cơ bản sau với tiêu đề trình duyệt "Today's Date":

### index.html
```html
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
</head>
 
<body>
</body>
 
</html>
```

Để thêm script tạo alert, chúng ta có thể thêm thẻ `<script>` và mã JavaScript của chúng ta bên dưới thẻ `<title>`, như được hiển thị bên dưới:

### index.html
```html
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
    <script>
        let d = new Date();
        alert("Today's date is " + d);
    </script>
</head>
 
<body>
</body>
 
</html>
```

Đặt script ở đây báo hiệu cho trình duyệt phân tích và thực thi JavaScript trước khi bắt đầu render nội dung trong `<body>` của trang.

Cách tiếp cận này phù hợp nhất cho các script không cần tương tác trực tiếp với các phần tử trên trang. Khi script trong `<head>` chạy, trình duyệt chưa xây dựng Document Object Model (DOM) cho `<body>`. Điều này có nghĩa là bất kỳ phần tử HTML nào như headings, paragraphs, hoặc divs chưa tồn tại. Kết quả là, code cố gắng tìm hoặc sửa đổi các phần tử này (ví dụ: sử dụng `document.getElementById()`) sẽ thất bại. 

> Phương pháp này do đó lý tưởng cho việc thiết lập các function và biến để sử dụng sau này, hoặc để bao gồm các script analytics bên thứ ba cần tải càng sớm càng tốt.

Khi bạn tải trang, bạn sẽ nhận được alert tương tự như sau:

![JavaScript Alert Example](https://example.com/alert-example.png)

## Phương Pháp 2: Cách Thêm Inline Script vào `<body>`

Thẻ `<script>` cũng có thể được đặt trong phần `<body>`. Khi script được đặt ở đây, HTML parser sẽ tạm dừng công việc để thực thi script tại điểm chính xác nơi nó xuất hiện trong tài liệu. Đây là phương pháp bắt buộc cho bất kỳ mã JavaScript nào cần tìm và sửa đổi ngay lập tức một phần tử HTML.

Một best practice phổ biến là đặt script ngay trước thẻ đóng `</body>`. Vị trí này đảm bảo rằng tất cả các phần tử HTML trên trang đã được phân tích và có sẵn trong DOM trước khi script bắt đầu chạy. Nó cũng cải thiện hiệu suất trang được cảm nhận, vì trình duyệt có thể render tất cả text và hình ảnh có thể nhìn thấy trước, cho phép người dùng nhìn thấy nội dung trang trước khi JavaScript có thể tốn thời gian được thực thi. Điều này cho phép nội dung hiển thị mà không bị chặn bởi việc thực thi JavaScript.

Hãy sử dụng phương pháp này để viết ngày trực tiếp vào body HTML.

### index.html
```html
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
</head>
 
<body>
  <script>
      let d = new Date();
      document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
  </script>
</body>
 
</html>
```

Kết quả cho tài liệu HTML trên được tải thông qua trình duyệt web sẽ trông tương tự như sau:

![JavaScript Date Example](https://example.com/date-example.png)

Script nhỏ hoặc chỉ chạy trên một trang có thể hoạt động tốt trong file HTML, nhưng đối với script lớn hơn hoặc sẽ được sử dụng trên nhiều trang, nó không phải là giải pháp hiệu quả vì việc bao gồm nó có thể trở nên khó quản lý hoặc khó đọc và hiểu. Trong phần tiếp theo, chúng ta sẽ xem xét cách xử lý file JavaScript riêng biệt trong tài liệu HTML của bạn.

## Phương Pháp 3: Cách Làm Việc với File JavaScript Riêng Biệt

Đối với script lớn hơn hoặc code cần được sử dụng trên nhiều trang, giải pháp hiệu quả và chuyên nghiệp nhất là đặt JavaScript trong file riêng biệt với phần mở rộng `.js`. Sau đó bạn có thể liên kết đến file bên ngoài này từ HTML của bạn bằng cách sử dụng thẻ `<script>` với thuộc tính `src` (source).

Lợi ích của cách tiếp cận này là đáng kể:

- **Separation of Concerns:** Nó giữ HTML cho cấu trúc, CSS cho styling, và JavaScript cho tương tác trong các file riêng biệt. Điều này làm cho dự án của bạn sạch hơn, có tổ chức hơn và dễ debug hơn.
- **Reusability and Maintenance:** Một file script duy nhất, như `main-navigation.js`, có thể được liên kết từ mọi trang của website. Nếu bạn cần cập nhật logic navigation, bạn chỉ cần chỉnh sửa file đó.
- **Browser Caching:** Khi người dùng truy cập site lần đầu tiên, trình duyệt tải xuống file `.js`. Trên các lần truy cập tiếp theo hoặc khi điều hướng đến các trang khác sử dụng cùng file, trình duyệt sẽ sử dụng bản sao được lưu trữ (cached) thay vì tải xuống lại. Điều này cải thiện đáng kể thời gian tải.

Để chứng minh cách kết nối tài liệu JavaScript với tài liệu HTML, hãy tạo một dự án web nhỏ. Nó sẽ bao gồm `script.js` trong thư mục `js/`, `style.css` trong thư mục `css/`, và `index.html` chính trong root của dự án.

### Cấu trúc dự án:
```
project/
├── css/
|   └── style.css
├── js/
|   └── script.js
└── index.html
```

Hãy di chuyển mã JavaScript sẽ hiển thị ngày như header `<h1>` vào file `script.js`:

### script.js
```javascript
let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
```

Tiếp theo, hãy chỉnh sửa file `style.css` bằng cách thêm màu nền và style cho header `<h1>`:

### style.css
```css
body {
    background-color: #0080ff;
}
 
h1 {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}
```

Cuối cùng, chúng ta có thể tham chiếu cả script và stylesheet từ file `index.html`. Chúng ta sử dụng thẻ `<link>` trong `<head>` cho CSS và thẻ `<script>` với thuộc tính `src` trong `<body>` cho JavaScript.

### index.html
```html
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
    <link rel="stylesheet" href="css/style.css">
</head>
 
<body>
    <script src="js/script.js"></script>
</body>
 
</html>
```

Bây giờ, với JavaScript và CSS đã có, dự án của chúng ta có tổ chức hơn nhiều. Khi chúng ta tải trang `index.html` vào trình duyệt web, chúng ta sẽ thấy một trang có style với ngày hiện tại trông tương tự như sau:

![JavaScript Date with CSS Example](https://example.com/date-css-example.png)

Bây giờ chúng ta đã đặt JavaScript trong file, chúng ta có thể gọi nó theo cùng cách từ các trang web bổ sung và cập nhật tất cả chúng ở một vị trí duy nhất. Phương pháp này cung cấp cách có tổ chức và có thể mở rộng nhất để quản lý JavaScript trong các dự án web của bạn. Để có thêm kiểm soát về cách script bên ngoài tải, bạn có thể xem xét sử dụng các thuộc tính `async` và `defer` trên thẻ `<script>`.

## Các Ví Dụ Thực Tế

Hãy xem xét một số ví dụ thực tế dựa trên những gì chúng ta đã học.

### 1. Dark Mode Toggle Đơn Giản

Hầu hết mọi website hoặc app hiện đại đều cung cấp dark mode. Điều này có thể đạt được bằng cách toggle CSS class với JavaScript.

#### HTML:
```html
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dark Mode</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <button id="theme-toggle">Toggle Dark Mode</button>
    <h1 id="title">DigitalOcean</h1>
    <p>This is some example text on the page.</p>
    <script src="js/script.js"></script>
</body>

</html>
```

#### CSS:
```css
/* This class will be added or removed by JavaScript */
.dark-mode {
    background-color: #222;
    color: #eee;
}
```

#### JavaScript:
```javascript
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
```

JavaScript đầu tiên tìm button bằng ID của nó. Sau đó nó gắn event listener chờ click. Khi button được click, lệnh `classList.toggle('dark-mode')` chạy. Nếu phần tử `<body>` không có class `.dark-mode`, JavaScript thêm nó. Nếu nó đã có, JavaScript xóa nó. Trình duyệt ngay lập tức áp dụng CSS styles liên quan đến class đó.

### 2. Form Validation Cơ Bản

Website cần đảm bảo rằng người dùng điền form đúng cách trước khi có thể submit. JavaScript có thể kiểm tra điều này ngay lập tức mà không cần reload trang.

#### HTML:
```html
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Form Validator</title>
</head>

<body>
    <form id="contact-form">
        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="you@example.com">
        <button type="submit">Subscribe</button>
        <p id="error-message" style="color: red;"></p>
    </form>
    <script src="js/script.js"></script>
</body>

</html>
```

#### JavaScript:
```javascript
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function(event) {
    if (!emailInput.value.includes('@')) {
        event.preventDefault(); 
        
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.textContent = '';
    }
});
```

Script lắng nghe sự kiện submit trên form. Khi bạn click button "Subscribe", function chạy. Nó đầu tiên kiểm tra xem text bên trong email input có bao gồm ký hiệu @ không.

- Nếu không, `event.preventDefault()` dừng hành vi submit mặc định của form. Sau đó nó hiển thị thông báo lỗi hữu ích cho người dùng.
- Nếu có, script không làm gì, và form submit như bình thường.

## Cân Nhắc Hiệu Suất cho Mỗi Phương Pháp

Hãy thảo luận về các cân nhắc hiệu suất chính cho mỗi phương pháp tải JavaScript đã thảo luận:

### Inline Script trong `<head>`

**Vấn đề chính: Render-Blocking**

Đặt script trong `<head>` có tác động tiêu cực đáng kể nhất đến hiệu suất. Trình duyệt phải tải xuống, phân tích và thực thi JavaScript trước khi có thể chuyển sang render bất kỳ phần nào của `<body>` của trang. Nếu script của bạn lớn hoặc chạy chậm, người dùng sẽ nhìn chằm chằm vào trang trắng cho đến khi script hoàn thành. Điều này tăng thời gian đến First Contentful Paint (FCP), một metric trải nghiệm người dùng quan trọng.

**Caching: Không có**

Inline script là một phần của tài liệu HTML. Chúng không thể được cache riêng biệt bởi trình duyệt. Mỗi lần người dùng truy cập trang, script được tải xuống và phân tích lại cùng với phần còn lại của HTML.

Phương pháp này thường tệ nhất cho hiệu suất và nên tránh trừ khi script cực kỳ nhỏ và tuyệt đối phải chạy trước bất kỳ thứ gì khác.

### Inline Script trong `<body>`

**Vấn đề chính: Partial Render-Blocking**

Phương pháp này là cải tiến lớn so với đặt script trong `<head>`. Trình duyệt phân tích và render HTML cho đến khi gặp thẻ `<script>`. Tại thời điểm đó, nó dừng render để thực thi script. Bằng cách đặt script ở cuối `<body>` (ngay trước thẻ `</body>`), bạn cho phép toàn bộ trang có thể nhìn thấy được render trước.

**Caching: Không có**

Giống như script trong `<head>`, inline script trong `<body>` là một phần của HTML và không thể được cache độc lập.

Đặt script ở cuối body là chiến lược tốt để cải thiện nhận thức về tốc độ vì nội dung trở nên có thể nhìn thấy nhanh chóng. Tuy nhiên, nó vẫn có thể trì hoãn trang từ việc trở nên hoàn toàn tương tác.

### File JavaScript Bên Ngoài

Phương pháp này cung cấp sự linh hoạt nhất và hiệu suất tốt nhất, chủ yếu do hai yếu tố: browser caching và các thuộc tính tải đặc biệt.

**Lợi thế chính: Caching và Asynchronous Loading**

**Caching:** Đây là chiến thắng hiệu suất lớn nhất. File `.js` bên ngoài được tải xuống một lần trong lần truy cập đầu tiên. Đối với tất cả các trang tiếp theo sử dụng cùng script, trình duyệt sẽ tải file từ cache local, loại bỏ độ trễ mạng và tăng tốc site đáng kể.

**Thuộc tính `defer` và `async`:** Script bên ngoài mở khóa việc sử dụng hai thuộc tính mạnh mẽ.

- `<script defer src="..."></script>`: Điều này nói với trình duyệt tải script trong background trong khi tiếp tục phân tích HTML. Script chỉ được thực thi sau khi toàn bộ tài liệu đã được phân tích. Đây là cách tiếp cận hiện đại được khuyến nghị vì nó không blocking và đảm bảo script chạy theo thứ tự xuất hiện trong HTML.

- `<script async src="..."></script>`: Điều này cũng tải script trong background mà không chặn render. Tuy nhiên, nó sẽ thực thi script ngay khi tải xong, có thể xảy ra bất cứ lúc nào và có thể gián đoạn render. Nó tốt nhất cho script độc lập, bên thứ ba (như quảng cáo hoặc analytics) nơi thứ tự thực thi không quan trọng.

Sử dụng file bên ngoài được liên kết với thuộc tính `defer` là best practice cho hiệu suất tối ưu. Nó kết hợp lợi ích của tải không blocking với browser caching mạnh mẽ.

## Best Practices

Đây là một số best practices và mẹo khắc phục sự cố cần thiết để làm việc với JavaScript trong file HTML của bạn.

### 1. Giữ JavaScript trong File Bên Ngoài
Luôn ưu tiên liên kết đến file `.js` (`<script src="..."></script>`) thay vì viết JavaScript trực tiếp trong HTML. Điều này giữ code có tổ chức, dễ bảo trì hơn và cho phép trình duyệt cache file để tải nhanh hơn.

### 2. Tải Script ở Cuối `<body>` với `defer`
Để trải nghiệm người dùng tốt nhất, đặt thẻ `<script>` ngay trước thẻ đóng `</body>` và thêm thuộc tính `defer`. Điều này đảm bảo nội dung trang tải và hiển thị nhanh chóng mà không bị chặn bởi JavaScript.

### 3. Viết Code Dễ Đọc
Sử dụng tên rõ ràng, mô tả cho biến và function (ví dụ: `calculateTotalPrice` thay vì `calc`). Sử dụng comment `//` để giải thích tại sao bạn viết một đoạn code, không phải nó làm gì.

### 4. Don't Repeat Yourself (DRY)
Nếu bạn thấy mình viết cùng dòng code ở nhiều nơi, wrap code đó trong function. Bạn có thể gọi function đó bất cứ khi nào cần, làm cho code ngắn hơn và dễ cập nhật hơn.

## Các Vấn Đề Phổ Biến và Cách Khắc Phục

Khi script không hoạt động, đừng hoảng sợ! Developer Tools của trình duyệt là bạn tốt nhất của bạn. Nhấn F12 (hoặc right-click trang và chọn "Inspect") và click vào tab "Console". Hầu hết lỗi sẽ xuất hiện ở đây màu đỏ.

### Lỗi: "Cannot read properties of null" hoặc "is not defined"

**Ý nghĩa:** JavaScript của bạn cố gắng truy cập phần tử HTML chưa được tải.
**Giải pháp:** Điều này hầu như luôn có nghĩa thẻ `<script>` của bạn ở trong `<head>` hoặc quá cao trong `<body>`. Di chuyển script xuống cuối `<body>` và thêm thuộc tính `defer`.

### Lỗi: "Uncaught SyntaxError"

**Ý nghĩa:** Bạn có lỗi chính tả trong code.
**Giải pháp:** Console thường cho bạn số dòng. Nhìn kỹ dòng đó để tìm dấu ngoặc đơn `()`, dấu ngoặc nhọn `{}`, dấu ngoặc kép `""` bị thiếu hoặc lỗi chính tả khác.

### Vấn đề: Script không chạy, không có lỗi trong Console.

**Ý nghĩa:** File HTML của bạn có thể không tìm thấy file `.js`.
**Giải pháp:** Kiểm tra tab "Network" trong Developer Tools. Nếu bạn thấy file script được liệt kê với lỗi 404, đường dẫn file trong thuộc tính `src` không đúng. Kiểm tra lại chính tả và cấu trúc thư mục (ví dụ: `<script src="js/script.js"></script>`).

### Vấn đề: Code chạy nhưng không làm những gì tôi mong đợi.

**Ý nghĩa:** Đây là lỗi logic. Cú pháp đúng, nhưng các bước sai.

**Giải pháp:** Sử dụng `console.log()` để debug. Đặt nó trong code để in giá trị của biến ở các giai đoạn khác nhau. Điều này giúp bạn theo dõi logic và thấy chính xác nơi nó sai.

```javascript
let userRole = 'guest';
console.log('User role before check:', userRole); // Xem giá trị là gì
if (userIsAdmin) {
  userRole = 'admin';
}
```

## Câu Hỏi Thường Gặp (FAQs)

### 1. Cách tốt nhất để thêm JavaScript vào file HTML là gì?
Cách tốt nhất là liên kết đến file `.js` bên ngoài với thuộc tính `defer`, đặt thẻ script ngay trước thẻ đóng `</body>` (ví dụ: `<script src="path/to/script.js" defer></script>`).

### 2. Tôi nên đặt JavaScript trong head hay body?
Bạn nên hầu như luôn đặt thẻ `<script>` JavaScript ở cuối phần `<body>`, ngay trước thẻ đóng `</body>`.

Đặt script trong `<head>` chặn trang khỏi render, có nghĩa người dùng sẽ thấy trang trắng cho đến khi script được tải xuống và thực thi hoàn toàn. Khi bạn đặt script ở cuối `<body>`, trình duyệt có thể render toàn bộ HTML và CSS trước, vì vậy người dùng thấy nội dung nhanh hơn nhiều.

### 3. Tôi có thể thêm nhiều thẻ script trong một file HTML không?
Có, bạn có thể bao gồm nhiều thẻ `<script>` như bạn cần trong một file HTML duy nhất. Trình duyệt sẽ tải xuống và thực thi chúng theo thứ tự chúng xuất hiện trong tài liệu.

Điều này thường được sử dụng để tải thư viện bên thứ ba trước script tùy chỉnh phụ thuộc vào chúng.

```html
<body>
    <script src="library.js"></script> 
    
    <script src="my-app.js"></script> 
</body>
```

### 4. Sự khác biệt chính giữa async và defer là gì?
Cả hai thuộc tính đều tải script mà không chặn trang khỏi render. Sự khác biệt chính là `defer` đảm bảo script sẽ thực thi theo thứ tự chúng xuất hiện sau khi tài liệu đã được phân tích hoàn toàn, trong khi `async` thực thi script ngay khi nó được tải xuống, có thể theo bất kỳ thứ tự nào.

### 5. Làm thế nào để debug JavaScript không hoạt động?
Mở Developer Tools (F12), kiểm tra tab Console cho thông báo lỗi, sử dụng tab Network để xác minh tải file, và thêm câu lệnh `console.log()` để theo dõi giá trị biến.

## Kết Luận

Hướng dẫn này đã bao gồm cách tích hợp JavaScript vào file web của bạn, chi tiết sự khác biệt giữa thêm script inline so với sử dụng file `.js` bên ngoài. Chúng ta kết luận rằng sử dụng file `.js` bên ngoài là cách tiếp cận vượt trội vì lợi ích hiệu suất đáng kể, như ngăn render-blocking với `defer` và cho phép browser caching, cũng như cải thiện khả năng bảo trì code. Chúng ta cũng đã bao gồm ngữ cảnh thực tế thông qua các ví dụ thực tế và cung cấp các bước khắc phục sự cố để giải quyết các lỗi phổ biến với Developer Console. Bây giờ bạn nên được trang bị để xây dựng các ứng dụng web hiệu quả, tương tác và chuyên nghiệp.

Từ đây, bạn có thể học cách làm việc với JavaScript Developer Console và cách viết comment trong JavaScript hoặc đi sâu hơn vào JavaScript bằng cách sử dụng các bài viết sau:

- [Understanding Syntax and Code Structure in JavaScript](https://example.com/syntax)
- [Understanding Variables, Scope, and Hoisting in JavaScript](https://example.com/variables)

(https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)