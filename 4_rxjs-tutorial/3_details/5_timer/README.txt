auditTime = interval & auditTime (lấy giá trị cuối cùng)

throttleTime(5000): sau 5s mới click được lần tiếp theo (lấy giá trị đầu tiên)

debounceTime(1500): sau khi sự kiện ngưng emit thì 1.5s sau nữa mới subscribe (lấy giá trị cuối cùng)