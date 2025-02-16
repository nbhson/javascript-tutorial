of(): tạo Observable bằng mọi thứ

from(): tạo Observable bằng Promise hoặc Iterable (có thể lặp qua được)

fromEvent(element, eventName): chuyển Event thành Observable

interval(ms): tạo Observable và sẽ emit đi sau khoảng thời gian ms

timer(ms): tạo Observable (như timeout)

timer(ms, ms): tạo Observable (như interval)

throwError(): tạo Observable bẳng một msg mới