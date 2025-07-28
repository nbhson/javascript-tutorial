# Closure

> Là một hàm có thể ghi **nhớ** nơi nó được tạo (context) và **truy cập** được biến ở bên ngoài phạm vi của nó

## Ứng dụng

- Viết code ngắn gọn hơn
- Biểu diễn tính private trong OOP

```js
/** ỨNG DỤNG 1 */
function createLogger(namespace) {
  function logger(message) {
    return `[${namespace}] ${message}`;
  }

  return logger;
}

const logInfo = createLogger("Info");
console.log(logInfo("Bắt đầu gửi mail!"));
console.log(logInfo("Gửi mail thành công!"));

const logError = createLogger("Error");
console.log(logError("Có lỗi!"));

/** ỨNG DỤNG 2 */
function createStorage(key) {
  let store = JSON.parse(localStorage.getItem(key)) ?? {}; // :))

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get() {
      return store;
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove() {
      localStorage.removeItem(key);
    },
  };

  return storage;
}

const setting = createStorage("setting"); // tạo ra phạm vi mới
setting.set("name", "Sơn");
setting.set("age", 23);
setting.set("address", "HCM");
setting.remove();
```

## Lưu ý

- Biến được tham chiếu trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực hiện xong

- Closure là 1 trong 4 nguyên nhân gây thất thoát bộ nhớ: https://viblo.asia/p/cach-javascript-hoat-dong-quan-ly-vung-nho-4-cach-giai-quyet-van-de-that-thoat-vung-nho-3Q75w9Q7ZWb
