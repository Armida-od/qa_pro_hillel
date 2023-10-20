'use strict'
/*ДЗ2 Сума вартості послуг
Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
Умови виконання ДЗ
• створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
• створити метод minPrice() - який повертає мінімальний price
• створити метод maxPrice() - який повертає максимальний price*/


var services = {
    haircut: "60",
    shaving: "80",
    'washing head': "100",
};

function price(obj){
    let sum = 0;
    for (let generalPrice in obj) {
        let stringToNumber = parseInt(obj[generalPrice]);
        sum += stringToNumber;
    }
    return sum;
}

function minPrice(obj){

    let min = Infinity; //так как в функцию Math.min() без параметров передается Infinity
    for(let iValue in obj){
        min = Math.min(min, obj[iValue]);
    }
    return min;
}
function maxPrice(obj){

    let max = -Infinity; //так как в функцию Math.max() без параметров передается -Infinity
    for(let iValue in obj){
        max = Math.max( max, obj[iValue] );
    }
    return max;
}

console.log("Общая стоимость услуг равна: " + price(services) + " грн.");
services.painting = "150";
console.log("Общая стоимость услуг после добавления новой услуги \"" + lastIndex(services)+ "\" равна: " + price(services) + " грн.");
console.log("Самая дешевая услуга равна : "+ minPrice(services) + " грн.");
console.log("Самая дорогая услуга равна : "+ maxPrice(services) + " грн.");


//Знаю, эта функция не по домашке. Но очень хотела попробовать вывести, какая услуга повышает стоимость.
//Не сразу дошло, как сделать, так что оставлю для себя здесь.
function lastIndex (obj){
    return Object.keys(obj)[Object.keys(obj).length-1]
}