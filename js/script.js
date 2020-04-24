'use strict'

let money = +prompt('Ваш бюджет на месяц?', '4000'),
  time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-24');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

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


appData.moneyPerDay = Math.round(appData.budget / 30)

alert('Бюджет на 1 день: ' + appData.moneyPerDay + '$')

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка")
} else {
  console.log("Произошла ошибка")

}