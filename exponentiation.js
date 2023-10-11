/*ДЗ 3:
Написати функцію pow(x, y) яка буде приймати 2 числа, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Наприклад pow(2,3) функція поверне значення 8.*/

function pow(x, y){
    let result = 1;

        for (let i = 0; i < y; i++) {
            result *= x;
        }
        return result;
}


//Выполняет условие домашней работы
console.log("2 to the power of 3 is equal " + pow(2,3));

//Проверка с разными данными
console.log("5 to the power of 5 is equal " + pow(5,5));
console.log("-3 to the power of 3 is equal " + pow(-3,3));

//More...
console.log("0 to the power of 3 is equal " + pow(0,3));
console.log("1 to the power of 3 is equal " + pow(1,3));
console.log("1 to the power of 3 is equal " + pow(5,0));
console.log("1 to the power of 3 is equal " + pow(5,1));
