/*ДЗ 2

Необхідно написати власну реалізацію функцій padEnd та padStart,
але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
• рядок, до якого буде додаватися символ.
• символ, який буде додаватися.
• Скільки додавати символів
• булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
• Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте значення 6,
то додаєте тільки один символ
*/
function pad (str, symbol, count, place){
    let addCountSymbol = 0;
    if (count >= str.length){
        addCountSymbol = count - str.length;
        if(place === true){
            return symbol.repeat(addCountSymbol) + str;
        }
        else{
            return str + symbol.repeat(addCountSymbol);
        }
    }
    else{
        return str;
    }
}

console.log(pad("Hellel", '!', 10, false));

/*//My test
console.log(pad("Hillel", '*', 10, true));
console.log(pad("QA PRO", '!', 15, false));
console.log(pad("A", 's', 20, false));
console.log(pad("Anastasiia", 'a', 20, false));
console.log(pad("Anastasiia", 'a', 2, true));

console.log("Asiia".padEnd(10, "@"))
console.log("Miss".padStart(2, "&"))*/
