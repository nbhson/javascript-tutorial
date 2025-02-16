Khi các observer được subscribe vào, chúng sinh ra các execution khác nhau.
Câu hỏi đặt ra là có cách nào để bất cứ khi nào có một observer mới nào subscribe vào thì chúng sẽ share cùng một execution không?

Chỉ với việc implement Observer Pattern, giờ đây chúng ta đã có thể share được execution, và hoàn toàn có thể share cho nhiều observer khác nữa nếu muốn

Lúc này bạn sẽ thấy rằng hybridObserver khá là giống một Observable, lại cũng có những phần của một Observer. Đó chính là SUBJECT

Subject vừa là observable vừa là observer
    + observable: có thể emit vào chính stream của nó
    + observer: vừa cho ng ta subscribe được

# Subject: 
    + subscribe lúc nào thì chỉ có thể nhận data được emit từ giai đoạn đó

# BehaviorSubjects: 
    + lấy được 1 giá trị cuối cùng trước đó (trước khi được subscribe), mặc dù subscribe sau giá trị cuối cùng của stream được emit
    + mà vì nó lưu được giá trị cuối cùng nên có thể sử dụng nó như synchronous (đặt biến bên ngoài và gán value bên trong BehaviorSubject thì khi log ra bên ngoài vẫn lấy được giá trị cuối cùng đó)

# ReplaySubject
    + giống như BehaviorSubject nhưng có thể tùy chỉnh lưu bao nhiêu giá trị trước đó

# AsyncSubject
    + Đây là biến thể mà chỉ emit giá trị cuối cùng của Observable execution cho các observers, và chỉ khi execution complete.

# Multicast