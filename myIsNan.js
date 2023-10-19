/*ДЗ 1
Написати свою реалізацію функції isNaN.*/

//Моя первая проба пера
function myIsNaN (item) {
    if (item !== item){
        return true;
    }
    else return !(item === null || typeof item === "boolean" || typeof item === "number");
}

console.log(myIsNaN(45));
console.log(myIsNaN(undefined));
console.log(myIsNaN(NaN));
console.log(myIsNaN("String"));
console.log(myIsNaN(true));
