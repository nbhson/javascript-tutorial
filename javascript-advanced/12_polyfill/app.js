/**
 * Cách để tạo ra các function để đáp ứng những trình duyệt cũ chưa hỗ trợ
 * mà chỉ có các trình duyệt mới mới có gọi là polyfill
 */

// kiểm tra include có tồn tại trong prototype của đối tượng string hay không
if (!String.prototype.includes) {
  // nếu không có thì tự định nghĩa ra luôn
  String.prototype.includes = function (search, start) {
    "use strict";

    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      start = 0;
    }
    return this.indexOf(search, start) !== -1;
  };
}
