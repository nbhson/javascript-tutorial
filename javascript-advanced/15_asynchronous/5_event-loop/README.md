# Event Loop

Như mọi người đã biết `JS là ngôn ngữ hoạt động đơn luồng`, chỉ một nhiệm vụ được thực thi trong 1 lúc. 
Nó sẽ không là vấn đề gì nhưng thử tưởng tượng 1 task chạy 30 giây, và bạn có đến 30 task cứ phải chờ như vậy là một vấn đề cực lớn trong chương trình. 
Đặc biệt trong thời đại công nghệ lên ngôi không một ai muốn phí phạm thời gian chờ đợi một ứng dụng không đáp ứng hiệu năng hoặc không phản hồi kết quả.

> May mắn trình duyệt đưa cho chúng ta chức năng đó là `Web API` bao gồm `DOM API` và `Http Request`,… giúp chúng ta tạo nên các tác vụ chạy bất đồng bộ, non-blocking

## Một số khái niệm cơ bản

### Stack

- Khi một hàm được gọi trong JS, hàm đó được thêm vào 1 vùng nhớ được gọi là `Stack`. (Stack là một phần của JS Engine không phải của Browser)
- Stack chạy theo cơ chế FILO (first in last out). Sau khi hàm đã được đẩy vào call stack, nó trả về giá trị thực thi sau đó được lấy ra khỏi stack để đẩy hàm tiếp theo vào. (Một hàm chỉ được lấy ra khỏi stack khi nó hoàn thành và return.)

![Stack](465aff14-91bc-4b28-b565-e967c78e63cc.gif)

- Việc phản hồi hay giá trị trả về như các hàm setTimeout được cung cấp bởi `Web API`. Các hàm này cho phép chúng ta thực hiện các hàm callback, các hàm callback này được đẩy vào vùng Web API là nơi chứa các hàm mà Web API cung cấp ở đây nó sẽ chờ thời gian được set ví dụ 1 giây sau đồng thời phẩn hồi lại với stack pop hàm setTimeout ra khỏi Call Stack

![Web API](4087995e-d13b-40ab-9e19-bd08e8f66af5.gif)

- Trong Web API, có một đồng hồ tính giờ được chạy ngay khi các hàm setTimeout, setInterval được đẩy vào, các hàm callback được truyền vào lúc này sẽ không nhảy qua Call Stack ngay mà nó được chuyển vào một hàng đợi Queue chờ được gọi lại. Trước giờ mọi người vẫn hình dung cứ xong thời gian setTimeout thì hàm callback được gọi ngay nhưng nó vẫn phải nằm trong hàm đợi đấy nhé đế lượt mới được thực thi nếu chúng ta xếp chồng setTimeout, setInterval đó là lý do các hàm này chúng ta chỉ sử dụng khi cần thiết.

![Queue](a8de5abc-f96e-411d-919f-cf60f79f283f.gif)

## Event Loop

### Overview

**Đây là phần khó hiểu nhất nè: hàm callback đã được đẩy vào queue vậy khi nào nó được gọi nếu như đầu bài chúng ta đã nói hàm chỉ thực hiện trong vùng Stack?**
> Đây là lúc Event Loop hoạt động, Event Loop có một nhiệm vụ duy nhất là đồng bộ Queue với Stack.

- Nếu Stack trống thì chúng ta gọi hàm trong Queue, Queue hoạt động theo cơ chế FIFO nên hàm nào nằm trong hàng đợi trước thì được gọi thực thi trong Stack trước.
> Stack trống thì các hàm trong Queue mới được Event Loop lấy lên và đẩy vào Stack để thực thi nhé.

![Event Loop](73727aff-e427-4154-aa8a-f0a1f497b054.gif)

- Hàm callback sau khi đẩy vào Call Stack thì nó thực thì chờ trả về giá trị và lấy ra khỏi Call Stack cho việc thực hiện các hàm tiếp theo.

![Event Loop](a5e7d75c-8569-4c28-a76e-0d4d82fb7452.gif)

### Ví dụ

```JS
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

![Run](d246bb69-3746-45e6-85e3-de05c3c29801.gif)

Thứ tự thực hiện như sau:

1. Gọi hàm bar chờ bar trả về một hàm setTimeout
2. Hàm callback được gọi khi truyền vào setTimeout, hàm callback được 3. Thêm vào vùng Web API, hàm setTimeout thực thi xong và bar được lấy 4. Ra khỏi Call Stack.
5. Timer chạy trong Web API hết thời gian chúng ta thiết lập khi đó 6. 6. Hàm foo được gọi và in log “First”. Hàm foo trả về “undefined”, baz sẽ được gọi và callback được thêm vào hàng đợi Queue.
7. baz in log “Third”. Event Loop sẽ quan sát Call Stack xem nó trống hay không nếu trống sẽ lấy hàm trong Queue đưa vào Call Stack.
8. Callback được gọi in log “Second”.