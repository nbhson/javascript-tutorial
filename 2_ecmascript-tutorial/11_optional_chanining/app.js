/**
 * ?.
 */

const obj = {
  name: 'Sơn Nguyễn',
  cat: {
    name: 'Meow',
    cat2: {
      name: 'Meow 2',
      cat3: {
        name: 'Meow 3'
      }
    }
  },
  arr: [1,2,3],
  getName(name) {
    console.log(name);
  }
}

// nghi ngờ thằng nào thì mới thêm ?. vào thôi
// trong trường hợp chắc chắn nó có thì KHÔNG cần ?.
/**
 * example obj prop:  obj.cat.cat2.cat3?.name
 *                    obj['cat'].['cat2']?.['cat3'].name
 * 
 * example obj arr:   obj.arr?.[index]
 * 
 * example obj func:  obj.function?.(args)
 */

// OBJ PROP
if (
  obj.cat && 
  obj.cat.cat2 &&
  obj.cat.cat2.cat3 &&
  obj.cat?.cat2?.cat3?.name
) {
  console.log(obj.cat.cat2.cat3.name);
}


// OBJ ARR
console.log(obj.arrx?.[1]);

// OBJ FUNCTION
obj.getName?.('SON')