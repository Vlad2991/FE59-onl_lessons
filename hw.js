"use strict";
// *********************Задача1*********************
const string = 'true';
const bool = false;
const number = 17;
const not = undefined ;
const nOOl = null;
console.log(typeof string, bool, number, not, nOOl);

// *********************Задача2*********************
let height = 15
let width = 20
if (width > height){
    console.log(width)
}
else (height < width); {
    console.log("Правильный ответ число:", width ,"число:", height ,"не верно")
}

// *********************Задача3*********************
let first = 1;
for (first = 1; first <= 20; ++first) {
    if (first % 3 === 0) {
      console.log(first, "делится 3");
    }
  }

  // *********************Задача4*********************
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// *********************Задача5*********************
let ageNumber = (prompt("Введите число:"));
let three = ageNumber % 3 === 0;
let five = ageNumber % 5 === 0;
if (three && five) {
  alert("FizBuzz");
} else if (three) {
  alert("Fizz");
} else if (five) {
  alert("Buzz");
} else {
  alert(ageNumber);
}

// *********************Задача6*********************
const army = (prompt("Сколько вам: "));
if (army >= 18) {
    alert("Ты уже там , наслаждайся...");
} else if (army >= 16) {
    alert("Будь готов сходить в армуху и получить бесконечный опыт");
} else {
    alert("Вам еще рано идти в армию , но ты все равно пойдешь" )
}

// *********************Задача7*********************
const куды = prompt("Куды пойдешь? Может в армию=)");
switch (куды) {
    case "юг":
        prompt("На юг пойдешь - счастье найдешь.");
        break;
    case "север":
        prompt("На север пойдешь - много денег найдешь.");
        break;
    case "запад":
        prompt("На запад пойдешь - верного друга найдешь.");
        break;
    case "восток":
        prompt("На восток пойдешь - разработчиком станешь.");
        break;
    default:
        prompt("Неверно введено направление. Попробуйте еще раз.");
}
// чучуть жизни)