/*ДЗ 2
Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.*/

function sum(start, limit, multiple){
    let sum = 0;
    for (let i = start; i <= limit; i++) {
        if (i % multiple) {
            sum += i;
        }
    }
    return sum;
}
//Выполняет условие домашней работы
console.log("The sum of numbers from 1 to 100 NOT multiples of 3 is equal to: ");
console.log(sum(1, 100, 3));

//Проверка с разными данными
console.log("The sum of numbers from 10 to 50 NOT multiples of 2 is equal to: ");
console.log(sum(10, 50, 2));

console.log("The sum of numbers from 1 to 5 NOT multiples of 2 is equal to: ");
console.log(sum(1, 5, 2));

console.log("The sum of numbers from -5 to 0 NOT multiples of 3 is equal to: ");
console.log(sum(-5, 0, 3));

//Я вывела функцию на новую строку, так как она выделяется, если в одном console.log всю фразу, то нет.
//Пока не разобралась почему.