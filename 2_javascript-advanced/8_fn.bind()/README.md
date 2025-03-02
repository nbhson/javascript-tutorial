# bind()

- Không thực hiện gọi hàm
- Có thể nhận các đối số như các hàm ban đầu
- Nếu được bind kèm với agr1,agr2... thì các đối số này được ưu tiên hơn
- bind(obj để ràng buộc method, từ tham số thứ 2 chính là các param của method đó)
- bind() chỉ bind được phương thức, không bind được thuộc tính


```js
const newFn = fn.bind(thisArg, arg1, arg2,...)
newFn(arg1, arg1)
```

## Phương thức bind() trả về một hàm mới với this mới

```js
const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName(param1, param2) {
    console.log(param1, param2);
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

teacher.getFullName();
// undefined undefined
// Minh Thao

const getTeacherName1 = teacher.getFullName;
console.log(getTeacherName1 === teacher.getFullName); // true - cùng vùng nhớ
getTeacherName1(); 
// undefined undefined
// Minh Thu 
// gọi 1 hàm không thông qua một đối tượng thì this là global => window || strict mode sẽ bị lỗi

// bind - để ràng buộc nó (object/teacher) với từ khóa this với method (getFullName()) này
const getTeacherName2 = teacher.getFullName.bind(teacher); 
getTeacherName2(); 
// undefined undefined
// Minh Thao

const getTeacherName3 = teacher.getFullName.bind(this); // this đang phạm vi window :))
getTeacherName3(); 
// undefined undefined
// Minh Thu
```

```js
const student = {
  firstName: "Dang",
  lastName: "Son",
};
const getStudentName = teacher.getFullName.bind(student, "param1", "param2"); // bind this thành student
console.log(getStudentName === teacher.getFullName); // false - khác vùng nhớ
getStudentName(); // Dang Son :))
```