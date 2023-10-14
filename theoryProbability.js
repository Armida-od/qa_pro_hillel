/*ДЗ3
Перевірка теорії ймовірності.
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
Порахувати кількість парних та непарних серед них.
Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count).
Параметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ
• Функція виводить інформацію
• Кількість згенерованих чисел: кількість чисел
• Парних чисел: кількість парних чисел
• Не парних чисел: кількість не парних чисел
• Відсоток парних до не парних:*/

function checkProbabilityTheory(count){
    let result;
    let iterEven = 0;
    let iterOdd = 0;
    for (let i = 0; i < count; i++){
        let rand = Math.random()*(900+1)+100;
        result = Math.round(rand);
        if (result % 2 === 0){
            console.log(result + ((result % 2))); //- For test
            iterEven++;
        }
        else{
            console.log(result); //- For test
            iterOdd++;
        }
    }
    let percentEven = (iterEven*100)/count;
    let percentOdd = (iterOdd*100)/count;

    return ("1. Кількість згенерованих чисел: " + count +
        "\n2. Парних чисел: кількість парних чисел -> " + iterEven +
        "\n3. Не парних чисел: кількість не парних чисел -> " + iterOdd +
        "\n4. Відсоток парних до не парних: " +
        "\n• Парних: " + percentEven + "%" +
        "\n• Непарних: " + percentOdd + "%")
}

console.log(checkProbabilityTheory(5));