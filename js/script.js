//Homework #4: How old are you?

let age = prompt("Вкажіть ваш вік", "18");
let ageOfNumberType = Number(age);
//console.log(typeof ageOfNumberType, ageOfNumberType);

let answer = ageOfNumberType % 10;

/*Була ідея зробити перевірку на те, що якщо age - число, то далі перевіряємо, щоб вірно показувалось рік/роки/років.
Якщо не число, то виводити повідомлення про це.
Але у prompt ми отримуємо завжди строку, тому така перевірка виявилась непотрібною.
Тобто, я все одно перетворюю дану строку на число.*/

    if (answer === 1) {
        console.log("Вам " + age + " рік!");
    } else if (answer === 2 || answer === 3 || answer === 4) {
        console.log("Вам " + age + " роки!");
    } else if (answer === 5 || answer === 6 || answer === 7 || answer === 8 || answer === 9 || answer === 10) {
        console.log("Вам " + age + " років!");
    } else if(answer <= 0){
        console.log("Ви або ще не народились, або помилилися. Будь ласка, введіть свій справжній вік.");
    } else {
        console.log("Ви ввели не число. Будь ласка, введіть свій рік.");
    }



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