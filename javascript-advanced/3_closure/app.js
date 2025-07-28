function createCouter() {
  let couter = 0;

  function increase() {
    return ++couter; // * TRUY CẬP ĐƯỢC BIẾN BÊN NGOÀI PHẠM VI CỦA NÓ | tham chiếu ra bên ngoài NÊN MỖI LẦN GỌI LẠI NÓ SẼ LẤY RA ĐƯỢC VALUE MỚI NHẤT CỦA BIẾN ĐÓ
  }

  return increase;
}

// _couter1 đang là hàm increase() trong createCouter() và _couter1 lúc này đang là global
const _couter1 = createCouter(); // GỌI 1 LẦN NÊN CHỈ CÓ 1 PHẠM VI ĐƯỢC TẠO RA
console.log(_couter1()); // * GHI NHỚ ĐƯỢC NƠI NÓ ĐƯỢC TẠO RA là nằm trong phạm vi của createCouter() LÚC NÀY biến couter đã tăng lên 1 rồi
console.log(_couter1()); // nó nhớ couter = 1 ở trên rồi +1 ra 2
console.log(_couter1());