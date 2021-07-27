'use strict';

var money,
    time,
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        start: function () {
            while (money == null || money == '' || money % 1 !=0) {
                money = prompt('Ваш бюджет на місяць?', '');
                
                appData.budget = money;
            }
            
            while (time == null || time == '' || time % 1 !=0) {
                time = prompt('Введіть дату в форматі YYYY-MM-DD', '');
                
                appData.timeData = time;
            }
        },
        chooseExpenses: function () {
            articleExpenses = '';
            howManyPay = '';
            
            while (articleExpenses == null || articleExpenses == '') {
                articleExpenses = prompt("Введіть обов'язкову статтю витра в цьому місяці", '');
            }
            
            while (howManyPay == null || howManyPay == '') {
                howManyPay = prompt('У скільки обійдеться', '');
            }
                                    
            appData.expenses[articleExpenses] = howManyPay;
        },
        chooseOptExpenses: function (articleOptExpenses, howManyOptPay) {
            articleOptExpenses = '';
            howManyOptPay = '';
            
            while (articleOptExpenses == null || articleOptExpenses == '') {
                articleOptExpenses = prompt("Стаття необов'язкових витрат", '');
            }
            
            while (howManyOptPay == null || howManyOptPay == '') {
                howManyOptPay = prompt('У скільки обійдеться', '');
            }
                                    
            appData.optionalExpenses[articleOptExpenses] = howManyOptPay;
        },
        checkSavings: function (save, percent) {
            if (appData.savings == true) {
                while (save == null || save == '') {
                   save = prompt('Яка сума депозиту?', '');
                }
                
                while (percent == null || percent == '') {
                   percent = prompt('Під який процент?', '');   
                }
                
                appData.monthIncome = save / 100 / 12 * percent;
                
                alert(`Місячний дохід: ${appData.monthIncome}`);
            }
        },
        detectDayBudget: function () {
            appData.dayBudget = Number( money / 30 );
            
            alert( `Денний бюджет: ${appData.dayBudget}` );
        },
        detectLevel: function () {
            if (appData.dayBudget <= 200) {
                alert("Мінімальний рівень доходів");
            } else if (appData.dayBudget <= 450) {
                alert("Середній рівень доходів");
            } else if (appData.dayBudget > 450) {
                alert("Високий рівень доходів");
            } else {
                alert("Сталась помилка");
            }
        },
        optionalExpenses: {},
        income:[],
        savings: true,
    },
    k = 0,
    articleExpense,
    howManyPay;

appData.start();

appData.chooseExpenses();
appData.chooseExpenses();

appData.chooseOptExpenses();
appData.chooseOptExpenses();
appData.chooseOptExpenses();

appData.checkSavings();

appData.detectDayBudget();

appData.detectLevel();





console.log(appData);