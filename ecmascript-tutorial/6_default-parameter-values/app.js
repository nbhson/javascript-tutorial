// Dùng với những tham số không bắt buộc
function logger(log = "Giá trị mặc định", isAlert = false) {
  if (isAlert) console.log(log);
  console.log(log);
}

logger();
logger("Message...");
logger("Message...", true);
