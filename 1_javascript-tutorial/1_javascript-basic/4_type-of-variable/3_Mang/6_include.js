var string = 'Responsive web design'

console.log(string.includes('Responsive')); // true
console.log(string.includes('Responsive', 1)); // fasle (bắt đầu tìm với index = 1)

var arr = ['HTML', 'CSS','Javascript']
console.log(arr.includes('HTML')); // true
console.log(arr.includes('htlm')); // false