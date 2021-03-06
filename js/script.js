'use strict'

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '4000');
  time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-24');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '4000');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', 'статья расходов'),
        b = prompt('Во сколько обойдется?', 2500);

      if ((typeof (a)) === 'string' &&
        (typeof (a)) != null &&
        (typeof (b)) != null &&
        a != '' &&
        b != '' &&
        a.length < 50) {
        console.log('command');
        appData.expenses[a] = b;
      } else {
        i = 0;
      }
    };
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1)
    alert('Бюджет на 1 день: ' + appData.moneyPerDay + '$')
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка")
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка")
    } else {
      console.log("Произошла ошибка")
    }
  },
  checkSavings: function () {
    if (appData.savings) {
      let save = +prompt("Какая сумма накоплений?", '180000'),
        percent = +prompt("Под какой процент?", '16');

      appData.monthIncome = save / 100 / 12 * percent
      alert("Доход в месяц с Вашего депозита: " + (appData.monthIncome).toFixed(1));

    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let answer = prompt('Статья необязательных расходов?', 'cтатья расходов')
      appData.optionalExpenses[i] = answer
    }
  },
  chooseIncome: function () {

    for (let i = 1; i < 2; i++) {
      let items = prompt('Что принесет дополнительный доход? (укажите через запятую)', 'd, e, m, a');
      if (typeof (items) == 'string' && typeof (items) != null && items != '') {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', 'что-то еще'))
        appData.income.sort();
      } else {
        i = 0;
      }
    }
    appData.income.forEach(function (itemMass, i) {
      alert(`Способы дополнительного заработка: ${i + 1}. ${itemMass}`)
    })

    for (let key in appData) {
      console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`)
    }

  }
};


appData.chooseExpenses()
appData.detectDayBudget()
appData.detectLevel()
appData.checkSavings()
appData.chooseExpenses()
appData.chooseIncome()


// let i = 0;
// while (i < 2) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', 'статья расходов'),
//     b = prompt('Во сколько обойдется?', 2500);

//   if ((typeof (a)) === 'string' &&
//     (typeof (a)) != null &&
//     (typeof (b)) != null &&
//     a != '' &&
//     b != '' &&
//     a.length < 50) {
//     console.log('command');
//     appData.expenses[a] = b;
//   } else {
//     i = 0;
//   }
//   console.log(i)
//   i++
// };

// let i = 0;
// do {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', 'статья расходов'),
//     b = prompt('Во сколько обойдется?', 2500);

//   if ((typeof (a)) === 'string' &&
//     (typeof (a)) != null &&
//     (typeof (b)) != null &&
//     a != '' &&
//     b != '' &&
//     a.length < 50) {
//     console.log('command');
//     appData.expenses[a] = b;
//   } else {
//     i = 0;
//   }
//   console.log(i)
//   i++
// } while (i < 2)