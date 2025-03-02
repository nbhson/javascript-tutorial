"use strict";

function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  // Animal.bind(this, name, weight); // không hoạt động
  Animal.call(this, name, weight);
  this.legs = legs;
}

const sonNguyen = new Chicken("Sơn", 53, 2);
console.log(sonNguyen);