/** ELEMENT:
 * ID,
 * Class (HTML colection - array),
 * Tag (HTML colection - array),
 * CSS selector (Node List - array)
 * HTML colection (HTML colection - array)
 * */

/** ID */
var elementById = document.getElementById("idHeading");
// console.dir(elementById); // in ra dưới dạng object
// console.log({
//   element: elementById,
// });  // element

/** CLASS */
var elementsByClass = document.getElementsByClassName("class-heading");
// console.log(elementsByClass); // HTMLColection[]

/** CSS SELECTOR */
// var elementBySelector = document.querySelector("html .content h3:nth-child(2)");
// var elementBySelector = document.querySelector('#id-selector')
// var elementBySelector = document.querySelector('.class-selector')
// console.log(elementBySelector);

var allElementBySelector = document.querySelectorAll("html .content h3");
console.log(allElementBySelector); // NodeList[]

/** HTML COLECTION - như là thẻ form, image, a, ... */
// console.log(document.forms);
// console.log(document.forms.form2); // lấy form với id là form2
// console.log(document.images);
