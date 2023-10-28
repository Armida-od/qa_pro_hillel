/*ДЗ 1 Без А
Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)*/

let str = "ALoarem ipsum dolor sit amet"
let reg = /[^Aa]{6}/    //or /[^a]{6}/i
console.log(str);
console.log(str.search(reg));
console.log(str.match(reg));

