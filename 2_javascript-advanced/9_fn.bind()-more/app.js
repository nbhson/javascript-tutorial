/** VÍ DỤ 1 */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// nếu không bind(), context lúc này trả ra đối tượng global (window) -> lỗi
// nếu có bind(), this trong querySelector sẽ hiểu đối tượng nó muốn truy cập là document -> hoạt động
// console.dir($('h1')); // h1

/** VÍ DỤ 2 */
const app = (() => {
  const cars = ["BMW"];

  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    handleDelete(e) {
      console.log(e.target);
      const deleteBtn = e.target.closest(".delete"); // closest - kiểm tra nó hoặc cha nó có class đó hay ko
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index); // this này đang là cái root ở dòng 58, cũng chính là cái ul nếu KO CÓ BIND :))
        this.render();
      }
    },
    render() {
      const html = cars
        .map(
          (car, index) =>
            `<li>
          ${car}
          <span class="delete" data-index="${index}">&times</span>
        </li>`
        )
        .join(""); // arr to string
      root.innerHTML = html;
    },
    init() {
      // this bên ngoài thì mới lấy đúng cái object app
      // const that = this // lúc chưa có arrow function, dùng cái này cho function(e) {} :))

      // khi là arrow function thì nó không có context nên nó lấy context (phạm vi) bên ngoài, đang là init
      submit.onclick = (e) => {
        const car = input.value;
        this.add(car); // this đang trong 1 function khác thì CONTEXT đang là của nut sunmit rồi
        this.render();

        input.value = null;
        input.focus();
      };

      root.onclick = this.handleDelete.bind(this); // this ở đây đang là app, nên bind(app) vẫn work
    },
  };
})();

app.init();

// data- : gọi là một dataset
// data-index: .index
// data-value: .value

// DELEGATE PATERN
