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
                        },
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
    if (company.name === companyName) {
        return {
            name: company.name,
            type: company.type,
            platform: company.platform,
            sellsSolution: company.sellsSolution,
        };
    }

    // Перебор компаний
    for (const client of company.clients) {
        // Проверка клиента
        if (client.name === companyName) {
            return {
                name: client.name,
                type: client.type,
                uses: client.uses,
                sells: client.sells,
            };
        }

        // Вложенные партнеры
        if (client.partners) {
            const result = findValueByKeyRecursive(client.partners, companyName);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

function findValueByKeyRecursive(partners, companyName) {
    for (const partner of partners) {
        if (partner.name === companyName) {
            return {
                name: partner.name,
                type: partner.type,
                uses: partner.uses,
                sells: partner.sells,
            };
        }

        if (partner.partners) {
            const result = findValueByKeyRecursive(partner.partners, companyName);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

console.log(findValueByKey('Клієнт 1.2.3'));