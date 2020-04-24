'use strict'

let money,
  time;

money = prompt('Ваш бюджет на месяц?', '4000');
time = prompt('Введите дату в формате YYYY-MM-DD', '2020-04-24');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let a = prompt('Введите обязательную статью расходов в этом месяце', 'статья расходов'),
  b = prompt('Во сколько обойдется?', 2500),
  c = prompt('Введите обязательную статью расходов в этом месяце', 'статья расходов'),
  d = prompt('Во сколько обойдется?', 800);

appData.expenses[a] = b;
appData.expenses[c] = d;

console.log(appData)

alert('Бюджет на 1 день - ' + Math.round(appData.budget / 30) + '$')