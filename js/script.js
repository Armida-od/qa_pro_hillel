//Homework #4: How old are you?

let age = prompt("Вкажіть ваш вік", "18");
//console.log(typeof age);

if (typeof age == "object"){ //Перевірка на кнопку "Отмена"
    console.log("Ви нажали кнопку \"Отмена\". \nБудь ласка, перевантажте сторінку та введіть свій справжній вік.");
}
else {
    let ageOfNumberType = Number(age);
    let answer = ageOfNumberType % 100; //бере останні 2 числа БУДЬ-ЯКОГО числа

    if (isNaN(ageOfNumberType)) { //Якщо я правильно зрозуміла, то помилка через те, що виводило "Вам NaN років!"
        console.log("Ви ввели не число. Будь ласка, введіть свій рік.");
    } else if (ageOfNumberType <= 0) {
        console.log("Ви або ще не народились, або помилилися. \nБудь ласка, введіть свій справжній вік.");
    } else if (answer >= 11 && answer <= 14) { //Зараз будь-яке багатозначне число з закінченням на 11 - 14;
        console.log("Вам " + age + " років!");
    } else {
        answer = answer % 10; //повертає нас до двозначних чисел;
        if (answer >= 2 && answer <= 4) {
            console.log("Вам " + age + " роки!");
        } else if (answer === 0 || (answer >= 5 && answer <= 9)) {
            console.log("Вам " + age + " років!");
        } else {
            console.log("Вам " + age + " рік!");
        }
    }
}


/*Була ідея зробити перевірку на те, що якщо age - число, то далі перевіряємо, щоб вірно показувалось рік/роки/років.
Якщо не число, то виводити повідомлення про це.
Але у prompt ми отримуємо завжди строку, тому така перевірка виявилась непотрібною.
Тобто, я все одно перетворюю дану строку на число.*/

//Була спроба зробити через switch, але мені менш сподобалось.
//Але нехай поки що буде в моїй бранчі, на майбутнє :)
    /*switch (answer) {
        case 1:
            console.log("Вам " + age + " рік");
            break;
        case 2:
        case 3:
        case 4:
            console.log("Вам " + age + " роки");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("Вам " + age + " років");
            break;
        default:
            console.log("Ви ввели не число. Будь ласка, введіть свій рік")
}*/