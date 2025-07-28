# Scope

## Các loại phạm vi:

- Global - toàn cầu
- Code block (if, for,...) - Khối mã: let, const (_đối với var nó sẽ không có tính chất block, nó sẽ nhảy ra phạm vi bên ngoài luôn_)
- Local scope - Hàm: var, function (_var trong phạm vi hàm thì ko truy cập được ra bên ngoài_)

## Nội dung:

- Khi GỌI hàm luôn có 1 phạm vi MỚI được tạo (**MỘT CONTEXT RIÊNG**), tuy là một hàm nhưng gọi nhiều lần thì nó sẽ tạo ra nhiều lần phạm vi đó

```js
function logger(name) {
  console.log(name);
}
logger("name1");
logger("name2");
logger("name3");
```

- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

```js
const myName = "Sơn Nguyễn";
function logger2() {
  const age = 20;
  console.log(myName);
  console.log(age);
}
logger2();
```

- Cách thức một biến được truy cập

```js
const age = 18;
{
  const age = 16;
  {
    const age = 14;
    {
      const age = 12;
      {
        console.log(age); // lỗi ko in đc nếu có dòng 70 :))

        // const age  = 10
      }
    }
  }
}
```

- Khi nào một biến bị xóa khỏi bộ nhớ

  - Biến toàn cầu?

    > khi chương trình bị thoát (tắt tab, f5, đóng trình duyệt)

  - Biến trong code block & trong hàm?

    > khi thoát khỏi block (hàm được thực thi xong) thì engine nó tự hiểu và xóa đi, NÊN SỬ DỤNG BIẾN TRONG HÀM TRONG BLOCK THÌ NÓ SẼ TIẾT KIỆM BỘ NHỚ HƠN, TỐT HƠN

  - Biến trong hàm được tham chiếu bởi 1 hàm khác (closure bài 3)
