function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Parrot() {
  Animal.apply(this, arguments);
  this.speek = function () {
    console.log("Nhà có khách");
  };
}

const conVet = new Parrot("Vẹt", 300);
console.log(conVet);
conVet.speek();
