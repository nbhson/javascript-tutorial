# Lịch sử ngắn gọn của JavaScript

> **Atwood Law**: "Bất kỳ ứng dụng nào có thể được viết bằng JavaScript sẽ cuối cùng được viết bằng JavaScript" - Jeff Atwood (người sáng lập Stack Overflow)

Khoảng 10 năm trước, Jeff Atwood (người sáng lập Stack Overflow) đã đưa ra quan điểm rằng JavaScript sẽ là tương lai và ông đã đặt ra "Định luật Atwood" - bất kỳ ứng dụng nào có thể được viết bằng JavaScript sẽ cuối cùng được viết bằng JavaScript. Nhìn lại ngày hôm nay, 10 năm sau, điều này càng trở nên đúng hơn bao giờ hết. JavaScript đang tiếp tục được áp dụng ngày càng nhiều.

## JavaScript được công bố

JavaScript ban đầu được tạo ra bởi Brendan Eich của Netscape và lần đầu tiên được công bố trong một thông cáo báo chí của Netscape vào năm 1995. Nó có một lịch sử đặt tên khá kỳ lạ; ban đầu được đặt tên là **Mocha** bởi người tạo ra, sau đó được đổi tên thành **LiveScript**. Năm 1996, khoảng một năm sau khi phát hành, NetScape quyết định đổi tên thành **JavaScript** với hy vọng tận dụng cộng đồng Java (mặc dù JavaScript không có bất kỳ mối quan hệ nào với Java) và phát hành Netscape 2.0 với hỗ trợ chính thức cho JavaScript.

## ES1, ES2 và ES3

Năm 1996, Netscape quyết định gửi nó đến **ECMA International** với hy vọng được chuẩn hóa. Phiên bản đầu tiên của đặc tả tiêu chuẩn được phát hành vào năm 1997 và ngôn ngữ được chuẩn hóa. Sau khi phát hành ban đầu, ECMAScript tiếp tục được phát triển và trong thời gian ngắn hai phiên bản nữa được phát hành: **ECMAScript 2** vào năm 1998 và **ECMAScript 3** vào năm 1999.

## Thập kỷ im lặng và ES4

Sau khi phát hành ES3 vào năm 1999, có một sự im lặng hoàn toàn trong một thập kỷ và không có thay đổi nào được thực hiện đối với tiêu chuẩn chính thức. Có một số công việc về phiên bản thứ tư trong những ngày đầu; một số tính năng được thảo luận bao gồm:

- **Classes** (Lớp)
- **Modules** (Mô-đun)
- **Static typings** (Kiểu tĩnh)
- **Destructuring** (Phân rã cấu trúc)

Nó được nhắm mục tiêu phát hành vào năm 2008 nhưng bị từ bỏ do những khác biệt chính trị liên quan đến độ phức tạp của ngôn ngữ. Tuy nhiên, các nhà cung cấp vẫn tiếp tục giới thiệu các phần mở rộng cho ngôn ngữ và các nhà phát triển phải đau đầu - thêm polyfills để đấu tranh với các vấn đề tương thích giữa các trình duyệt khác nhau.

## Từ im lặng đến ES5

Google, Microsoft, Yahoo và những người phản đối ES4 đã tập hợp lại và quyết định làm việc trên một bản cập nhật ít tham vọng hơn cho ES3 tạm thời được đặt tên là **ES3.1**. Nhưng các nhóm vẫn đang tranh cãi về việc nên bao gồm gì từ ES4 và không nên bao gồm gì. Cuối cùng, vào năm 2009 **ES5** được phát hành chủ yếu tập trung vào việc sửa các vấn đề tương thích và bảo mật, v.v. Nhưng không có nhiều tiếng vang - phải mất nhiều năm để các nhà cung cấp tích hợp các tiêu chuẩn và nhiều nhà phát triển vẫn đang sử dụng ES3 mà không biết về các tiêu chuẩn "hiện đại".

## Phát hành ES6 — ECMAScript 2015

Sau vài năm phát hành ES5, mọi thứ bắt đầu thay đổi. **TC39** (ủy ban dưới ECMA international chịu trách nhiệm chuẩn hóa ECMAScript) tiếp tục làm việc trên phiên bản tiếp theo của ECMAScript (ES6) ban đầu được đặt tên là **ES Harmony**, trước khi cuối cùng được phát hành với tên **ES2015**. ES2015 bổ sung các tính năng đáng kể và syntactic sugar để cho phép viết các ứng dụng phức tạp.

### Một số tính năng mà ES6 cung cấp:

- **Classes, Modules, Arrows** (Lớp, Mô-đun, Mũi tên)
- **Enhanced object literals** (Object literals nâng cao)
- **Template strings** (Chuỗi template)
- **Destructuring** (Phân rã cấu trúc)
- **Default and rest parameters** (Tham số mặc định và rest)
- **Spread operator** (Toán tử spread)
- **let và const**
- **Iterators for..of**
- **Generators** (Bộ sinh)
- **map và set**
- **Proxies và Symbols**
- **Promises**
- **Math, Number, String, Array, Object APIs** và nhiều thứ khác

Hỗ trợ trình duyệt cho ES6 vẫn còn khan hiếm nhưng tất cả những gì ES6 cung cấp vẫn có sẵn cho các nhà phát triển bằng cách transpile mã ES6 sang ES5. Với việc phát hành phiên bản thứ 6 của ECMAScript, TC39 quyết định chuyển sang mô hình phát hành hàng năm các bản cập nhật cho ECMAScript để đảm bảo rằng các tính năng mới được thêm vào ngay khi chúng được phê duyệt và chúng ta không phải chờ đợi toàn bộ đặc tả được soạn thảo và phê duyệt - do đó phiên bản thứ 6 của ECMAScript được đổi tên thành **ECMAScript 2015** hoặc **ES2015** trước khi phát hành vào tháng 6 năm 2015. Và các phiên bản tiếp theo của ECMAScript được quyết định xuất bản vào tháng 6 hàng năm.

## Phát hành ES7 — ECMAScript 2016

Vào tháng 6 năm 2016, phiên bản thứ bảy của ECMAScript được phát hành. Vì ECMAScript đã chuyển sang mô hình phát hành hàng năm, **ECMAScript 2016 (ES2016)** tương đối không có nhiều thứ để cung cấp. ES2016 chỉ bao gồm hai tính năng mới:

- **Exponentiation operator `**`** (Toán tử lũy thừa)
- **`Array.prototype.includes`**

## Phát hành ES8 — ECMAScript 2017

Phiên bản thứ tám của ECMAScript được phát hành vào tháng 6 năm 2017. Điểm nổi bật chính của ES8 là việc bổ sung **async functions**. Đây là danh sách các tính năng mới trong ES8:

- **`Object.values()` và `Object.entries()`**
- **String padding** tức là `String.prototype.padEnd()` và `String.prototype.padStart()`
- **`Object.getOwnPropertyDescriptors`**
- **Trailing commas** trong danh sách tham số hàm và lời gọi
- **Async functions** (Hàm bất đồng bộ)

## ESNext là gì?

**ESNext** là một tên động đề cập đến bất kỳ phiên bản hiện tại nào của ECMAScript tại thời điểm nhất định. Ví dụ, tại thời điểm viết bài này ES2017 hoặc ES8 là ESNext hiện tại.

## Tương lai sẽ ra sao?

Kể từ khi phát hành ES6, TC39 đã khá chuẩn hóa quy trình của họ. TC39 hoạt động thông qua một tổ chức Github và có một số đề xuất cho các tính năng hoặc cú pháp mới sẽ được thêm vào các phiên bản tiếp theo của ECMAScript. Bất kỳ ai cũng có thể tiến hành và gửi một đề xuất, do đó làm tăng sự tham gia từ cộng đồng. Mọi đề xuất đều trải qua **bốn giai đoạn trưởng thành** trước khi được đưa vào đặc tả.

---

*Và đó là tất cả. Hãy để lại phản hồi của bạn trong discord. Đây cũng là các liên kết đến đặc tả ngôn ngữ gốc: [ES6](https://www.ecma-international.org/ecma-262/6.0/), [ES7](https://www.ecma-international.org/ecma-262/7.0/) và [ES8](https://www.ecma-international.org/ecma-262/8.0/).*

## Quá trình chuẩn hóa JavaScript

> **Chuẩn hóa** là quá trình thiết lập các quy tắc, đặc tả kỹ thuật chung để đảm bảo tính nhất quán và tương thích trong việc phát triển và triển khai một công nghệ.

### Trong ngữ cảnh JavaScript:

#### Mục đích
Tạo ra một **đặc tả chung** cho JavaScript để:
- Các trình duyệt khác nhau hiểu và thực thi JavaScript theo cùng một cách
- Các nhà phát triển có thể viết code hoạt động nhất quán trên mọi môi trường
- Tránh tình trạng "mỗi trình duyệt một phiên bản JavaScript khác nhau"

#### Tổ chức chịu trách nhiệm
- **ECMA International** (European Computer Manufacturers Association)
- **TC39**: Ủy ban kỹ thuật chịu trách nhiệm chuẩn hóa ECMAScript
- Đưa ra các đặc tả chính thức cho ngôn ngữ

#### Kết quả
- Tạo ra **ECMAScript** - tên chính thức của chuẩn JavaScript
- Các phiên bản như ES5, ES6, ES2015, ES2016, v.v.
- Đảm bảo tính tương thích và nhất quán

#### Tại sao cần chuẩn hóa?
- **Trước khi chuẩn hóa**: Mỗi trình duyệt có thể hiểu JavaScript khác nhau
- **Sau khi chuẩn hóa**: Tất cả trình duyệt phải tuân theo cùng một đặc tả
- **Lợi ích**: Code JavaScript chạy được trên mọi trình duyệt mà không cần sửa đổi

> Vậy **"quá trình chuẩn hóa"** là việc thiết lập và duy trì các quy tắc chung để JavaScript hoạt động nhất quán trên toàn bộ hệ sinh thái web.

### Quá trình chuẩn hóa JavaScript được nhắc đến bao gồm các giai đoạn chính sau:

#### 1. Bắt đầu chuẩn hóa (1996-1997)
- Netscape quyết định gửi JavaScript đến **ECMA International** để được chuẩn hóa
- Phiên bản đầu tiên của đặc tả tiêu chuẩn được phát hành vào năm 1997
- Ngôn ngữ được chuẩn hóa với tên **ECMAScript**

#### 2. Các phiên bản đầu tiên (1997-1999)
- **ES1 (1997)**: Phiên bản đầu tiên của đặc tả tiêu chuẩn
- **ES2 (1998)**: Phiên bản thứ hai
- **ES3 (1999)**: Phiên bản thứ ba

#### 3. Thập kỷ im lặng (1999-2009)
- Không có thay đổi nào được thực hiện đối với tiêu chuẩn chính thức
- Có nỗ lực phát triển ES4 nhưng bị từ bỏ do khác biệt chính trị
- Các nhà cung cấp trình duyệt tự phát triển các phần mở rộng riêng

#### 4. ES5 (2009)
- Tập trung vào sửa các vấn đề tương thích và bảo mật
- Ít tính năng mới, chủ yếu cải thiện tính ổn định

#### 5. ES6/ES2015 (2015) - Bước ngoặt
- **TC39** (ủy ban chịu trách nhiệm chuẩn hóa ECMAScript) chuyển sang mô hình phát hành hàng năm
- Bổ sung nhiều tính năng mới quan trọng
- Đổi tên thành **ECMAScript 2015** để phản ánh năm phát hành

#### 6. Quy trình hiện đại (từ 2015)
- **Phát hành hàng năm**: ES2016, ES2017, ES2018, v.v.
- **TC39 hoạt động qua GitHub**: Tăng tính minh bạch và tham gia cộng đồng
- **Bốn giai đoạn trưởng thành** cho mọi đề xuất tính năng mới
- **ESNext**: Tên động cho phiên bản hiện tại đang phát triển

#### 7. Cơ chế đề xuất
- Bất kỳ ai cũng có thể gửi đề xuất tính năng mới
- Mỗi đề xuất phải trải qua **4 giai đoạn trưởng thành** trước khi được đưa vào đặc tả
- Tăng sự tham gia từ cộng đồng phát triển

> Quá trình này đã chuyển từ việc chuẩn hóa chậm chạp và không đều đặn sang một quy trình hiện đại, minh bạch và có sự tham gia rộng rãi của cộng đồng.