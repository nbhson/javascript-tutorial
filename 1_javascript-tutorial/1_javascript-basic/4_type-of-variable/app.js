/**
 * 1 - Kiểu dữ liệu nguyên thủy - Primitive data
 *      - number
 *      - string
 *      - boolean
 *      - undefined
 *      - null
 *      - symbol
 * 
 * 2 - Kieu du lieu phuc ta - complex data
 *      - function 
 *      - object
 */


// NUMBER
var a = 1 
var b = 2.5
var c = .75
var d = 0xff

isNaN() // kiểm tra xem nó có phải một số hay không (NaN)
isFinite() // kiểm tra xem nó có âm vô cực hay dương vô cực không (Infinity)

// STRING
var e = 'Sơn \"Nguyễn'

// BOOLEAN
var f = true

// UNDEFINE
var j

// NULL
var y = null // typeof null => object :)

// SYMBOL
var id = Symbol('id')

// FUNCTION
var myFunc = function () {
    console.log('Hello');
}

// OBJECT 
var myObj = {
    name: 'Sơn',
    age: 20,
    func: function() {
        console.log('Function in Object');
    }
}

var myArr = [1,0,'Sơn',-5,true]