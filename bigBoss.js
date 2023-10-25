/*ДЗ2 BigBoss
Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName
та надавати інформацію про цю subCompany.*/

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValueByKey(companyName) {
    for (let i in company.clients) {
        if (company.clients[i].name === companyName) {
            return Object.entries(company.clients[i]);
        } else {
            for (let j in company.clients[i].partners) {
                if (company.clients[i].partners[j].name === companyName) {
                    return Object.entries(company.clients[i].partners[j]);
                } else {
                    for (let m in company.clients[i].partners[j].partners) {
                        if (company.clients[i].partners[j].partners[m].name === companyName) {
                            return Object.entries(company.clients[i].partners[j].partners[m]);
                        }
                    }
                }
            }
        }
    }
}


console.log(findValueByKey('Клієнт 1.2.3'));