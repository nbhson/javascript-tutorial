const employee = {
  firstName: 'Tapas',
  lastName: 'Adhikary'
};

let logHandler = {
  get: function (target, fieldName) {
    console.log('GET');
    return Reflect.get(target, fieldName);
  },
  set: function (target, key, value) {
    console.log('SET');
    Reflect.set(target, key, value)
  }
};

let p = new Proxy(employee, logHandler);

// GET  
console.log(p.firstName);
console.log(p.lastName);

// SET
p.age = 15;
console.log(p.age);

console.log(p); // quản lí (Handler) & Object (Target)

console.log(employee);