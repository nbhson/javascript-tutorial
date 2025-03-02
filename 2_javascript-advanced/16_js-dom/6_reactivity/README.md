## Reactivity

## DOM Manipulation

- Khả Năng Reactivity: **`Thấp`**

  - Trong DOM Manipulation, không có sự tự động theo dõi sự thay đổi trong dữ liệu hoặc cập nhật giao diện người dùng khi dữ liệu thay đổi.
  - Phải thực hiện các thao tác cập nhật DOM thủ công sau mỗi thay đổi trong dữ liệu.

- Sử Dụng Trong Framework và Thư Viện:
  - Thường được kết hợp với các thư viện khác như jQuery hoặc Backbone
    - Các thư viện này thường yêu cầu nhà phát triển tự định rõ quá trình cập nhật giao diện và quản lý sự kiện.

## Virtual DOM

- Khả Năng Reactivity: **`Cao`**

  - Virtual DOM thường đi kèm với khả năng reactivity, tức là có khả năng tự động theo dõi sự thay đổi trong dữ liệu và cập nhật giao diện người dùng một cách hiệu quả.

- Sử Dụng Trong Framework và Thư Viện:
  - Phổ biến trong các framework như React và Vue:
  - React và Vue sử dụng Virtual DOM để theo dõi sự thay đổi trong trạng thái ứng dụng và áp dụng cập nhật chỉ cho những phần thực sự thay đổi, giảm tải cho DOM thực tế.

## Shadow DOM

- Khả Năng Reactivity: **`Trung bình đến Cao`**
  - Shadow DOM có khả năng reactivity nhờ vào cơ chế "scoped CSS" (CSS có phạm vi) và "encapsulation" (đóng gói) của nó.
  - Sự thay đổi trong phần Shadow DOM có thể tác động đến các phần khác mà không làm ảnh hưởng đến trang web chính.
- Sử Dụng Trong Framework và Thư Viện:
  - Thường được sử dụng trong các web component và các framework hỗ trợ Web Components
  - Shadow DOM là một phần quan trọng của Web Components, nơi nó giúp tạo ra các phần tử có thể tái sử dụng với encapsulation tự nhiên.

# Tóm Lược:

- `DOM Thực Trực Tiếp`: Khả năng reactivity thấp, yêu cầu thao tác thủ công để cập nhật giao diện.
- `Virtual DOM`: Khả năng reactivity cao, tự động theo dõi sự thay đổi và áp dụng cập nhật hiệu quả.
- `Shadow DOM`: Khả năng reactivity trung bình đến cao, có khả năng tái sử dụng và bảo toàn tính encapsulation.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reactivity Example</title>
  </head>
  <body>
    <div>
      <p id="counter">Số lần click: 0</p>
      <button id="clickButton">Click me</button>
    </div>

    <script>
      const state = new Proxy(
        { count: 0 },
        {
          set: function (target, key, value) {
            //Trigger any action when object change
            target[key] = value;
            document.getElementById(
              "counter"
            ).innerText = `Số lần click: ${value}`;
            return true;
          },
        }
      );

      document
        .getElementById("clickButton")
        .addEventListener("click", function () {
          state.count += 1;
        });
    </script>
  </body>
</html>
```
