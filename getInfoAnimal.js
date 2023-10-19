'use strict'
/*HW1
Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
 */

//Я сделала двумя способами потому что:
//1. Мне кажется, что это слишком просто, и возможно неверно, но зато метод getInfo() находится внутри объекта.
//Условие задачи выполнено: {ключ: значение} выводится в консоль

let animal = {
    type: "cat",
    age: 3,
    vaccination: true,
    getInfo(){
        console.log(this)
    }
}
console.log("-------------" + "\nFirst option" +"\n-------------")
animal.getInfo();
animal.location = "home";
console.log("......Add new property......")
animal.getInfo();

//2. Этот вывод кажется лучше, но метод getInfo() уже вынесен вне объекта
//Условие задачи выполнено: {ключ: значение} выводится в консоль
console.log("-------------" + "\nSecond option" +"\n-------------")
let animal1 = {
    type: "cat",
    age: 3,
    vaccination: true,
}

function getInfo(obj){
    for (let iKey in obj) {
        console.log(iKey + ': ' + obj[iKey]);
    }
}

getInfo(animal1);
animal1.location = "Out home";
console.log("......Add new property......")
getInfo(animal1);
