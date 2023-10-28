/*ДЗ 2 Параноя
В нас є масив об'єктів в яких міститься email.
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.*/

    let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Alex",
        lastName:"Porohov",
        email:"a_lex.poroho@yaHoo.ru"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function checkEmail(obj){
    for (let objKey in obj) {
        let objEmail = obj[objKey].email;
        let regEmailService = /^\S\w+\.\w+@(gmail|yahoo)\.[^ ru][a-z]{2,}$/i;
        if(regEmailService.test(objEmail) === true){
            console.log(objEmail + " --> your email is true");
        }
        else{
            console.log(objEmail + " --> this email is wrong");
        }
    }
}

checkEmail(arr);

