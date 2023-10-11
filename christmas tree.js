/*
ДЗ 1
Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу):
на першому рядку - одна зірочка, на другій дві, і так далі.
Рішення оформить у вигляді функції, куди передаються два параметри:
висота трикутника та символ, яким його потрібно "малювати".*/

//First option via double for

function drawChristmasTree(count, icon){
    let str = '';
    for (let i = 0; i < count; i++){
        for (let j = 0; j<= i; j++){
            str += icon;
        }
        str += '\n';
    }
    return str;
}

//Second option via while
function drawChristmasTreeWhile(count, icon){
    let str = '';
    let i = 0;
    while (i < count){
        for (let j = 0; j<= i; j++){
            str += icon;
        }
        i++;
        str += '\n';
    }
    return str;
}
console.log(drawChristmasTree(3, '•'));
console.log('-----------------\n');
console.log(drawChristmasTreeWhile(5, '*'));