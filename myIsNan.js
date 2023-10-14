/*ДЗ 1
Написати свою реалізацію функції isNaN.*/

//Моя первая проба пера
function myIsNaN (item) {
    if (item !== item){
        return true;
    }
    else if (isFinite(item) || item === null || typeof item === "boolean" || typeof item === "number") {
        return false;
    }
    else {
        return true;
    }
}
console.log("NaN is " + myIsNaN(NaN));



/*
//My test
let person = {
    id: 10,
    age: 20,
}
let i = null;

console.log("4 " + myIsNaN(4));
console.log("2+3 " + myIsNaN(2+3));
console.log("5.2 " + myIsNaN(5.2));
console.log("-10 " + myIsNaN(-10));
console.log("0 " + myIsNaN(0));

console.log("NaN is " + myIsNaN(NaN));
console.log("Undefined is " + myIsNaN(undefined));
console.log("Infinity is " + myIsNaN(Infinity));
console.log("Infinity 1e500 is " + myIsNaN(1e500));
console.log("String is " + myIsNaN("String"));
console.log("Boolean is " + myIsNaN(false));
console.log("Object is " + myIsNaN(person));
console.log("Null is " + myIsNaN(null));
console.log("Symbol is " + myIsNaN('*'));
console.log("3+5 " + myIsNaN("3+5"));*/
