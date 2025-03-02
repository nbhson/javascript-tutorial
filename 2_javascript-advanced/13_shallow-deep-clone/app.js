// shallow: copy nông, biến mới vẫn còn quan hệ dây mơ rễ má
// deep: copy sâu, có nghĩa là tạo một cái biến mới có cùng giá trị và cắt đứt hoàn toàn quan hệ với biến cũ

const person1 = {
  name: "Sơn",
  age: 22,
  networks: {
    facebook: "http://facebook.com",
  },
  ot: NaN,
  date: new Date(),
};

/** shallow */
// const person2 = person1
// const person2 = {...person1}
// const person3 = Object.assign({}, person1) // Object.assign: các thành phần của đối số đầu tiên vẫn bị thay đổi, nên dùng ở đối số thứ 2 (đối số đầu tiên rỗng)

// những thằng ở trên chỉ copy được tầng đầu thôi...
// những tầng khác thì vẫn bị thay đổi... nên vẫn là shallow copy
// person1.networks.facebook = 'http://facebook.com/nbhson43'

/** deep */
const person2 = JSON.parse(JSON.stringify(person1));
const person3 = JSON.parse(JSON.stringify(person1));

person1.networks.facebook = "http://facebook.com/nbhson43";

console.log(person1);
console.log(person2);
console.log(person3);

// => tuy nhiên vẫn có yếu điểm khi giá trị là NaN hoặc new Date() khi clone ra không giống như ban đầu
// => sử dụng thư viện lodash để clone :))


/** UPDATE - 2023 */
// js có thể deep copy bằng phương thức global structuredClone

const obj = {
  firstName: 'David',
  lastName: 'Brent',
  occupation: 'Paper merchant',
  moreInfo: {
    age: 18,
    gender: 'Male',
    countries: {
      anGiang: true,
      hoChiMinh: true,
    },
    birthday: new Date(),
    love: NaN,
  },
};

const objCopy = structuredClone(obj);

objCopy.moreInfo.age = 25;
objCopy.moreInfo.countries.hoChiMinh = false;
console.log(objCopy);
console.log(obj);
