//Homework #5: Converter

/*Legend:
kg - kilogram;
h - hour;
km - kilometre;
t - temperature;*/
let unit = 'kg';
let valueUnit = 50;

switch (unit){
    case 'km':
        let meter = valueUnit * 1000;
        console.log(valueUnit + " кілометрів це " + meter + " метрів.");
        break;
    case 'h':
        let minute = valueUnit * 60;
        console.log(valueUnit + " годин це " + minute + " хвилин.");
        break;
    case 'kg':
        let gram = valueUnit * 1000;
        console.log(valueUnit + " кілограм це " + gram + " грам.");
        break;
    case 't': //це інша одиниця виміру
        let farengate = (valueUnit * 9/5) +32;
        console.log(valueUnit + " градусів по Цельсію це " + farengate + " градусів по Фаренгейту.");
        break;
    default: //якщо одиниця виміру не з Legend
        console.log("Ви ввели невірну одиницю вимірювання")
}