"use strict";
// ***********************Задача1***********************
// function getSum(x) {
//     let sum = 0;
//     for (let i = 0; i <= x; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   let x = getSum(100);
//   console.log(x);

// ***********************Задача2***********************
// const sumOfCredit = parseInt(prompt("Введите сумму кредита"));
// const interestRate = 17; // Процентная ставка (годовая)
// const creditOfyear = 5;
// const creditOfManth  = 5 * 12;// Продолжительность кредита (в месяцах)

// const creditInfo = calculateCredit(sumOfCredit, interestRate, creditOfManth );
// function calculateCredit(sumOfCredit, interestRate, duration) {
//   const monthlyInterestRate = interestRate / creditOfManth / 100;
//   const monthlyPayment = (sumOfCredit * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), creditOfManth )) / (Math.pow((1 + monthlyInterestRate), creditOfManth ) - 1);
//   const totalOverpayment = monthlyPayment * creditOfManth  - sumOfCredit;

//   return {
//     monthlyPayment,
//     totalOverpayment,
//   };
// }

// alert(`Ежемесячный платеж: (${creditInfo.monthlyPayment.toFixed(1)}) рублей.`);
// alert(`Общая переплата: ${creditInfo.totalOverpayment.toFixed(1)} рублей.`);

// ***********************Задача3***********************
// function trimString() {
//   let sString = prompt('Введите текст.');
//   let nFrom = +prompt('Введите значение "от".');
//   let nTo = +prompt('Введите значение "по".');

//   alert(sString.substring(nFrom, nTo));
// }
// trimString();

// ***********************Задача4***********************
// function getSumNumbers(year) {
//   const numberYear = String(year);
//   let sumOfDigits = 0;
//   for (let digit of numberYear) {
//       sumOfDigits += parseInt(digit);
//   }

//   return sumOfDigits;
// }

// const numberYear = 2021;
// console.log("Сумма цифр числа", numberYear, ":", getSumNumbers(numberYear));

// ***********************Задача5***********************
// function getSum(a, b) {
//   if (a === b) {
//       return a;
//   }
//   let sum = 0;
//   const start = Math.min(a, b);
//   const end = Math.max(a, b);
//   for (let i = start; i <= end; i++) {
//       sum += i;
//   }
  
//   return sum;
// }
// console.log(getSum(1, 0));
// console.log(getSum(1, 2));
// console.log(getSum(0, 1));
// console.log(getSum(1, 1));
// console.log(getSum(-1, 0));
// console.log(getSum(-1, 2));

// ***********************Задача6***********************
function foo() {
  console.log("foo");
}

function boo() {
  console.log("boo");
}

function fooBoo(trueOrFalse, fooFunc, booFunc) {
  trueOrFalse ? fooFunc() : booFunc();
}
fooBoo(true, foo, boo);
fooBoo(false, foo, boo); 