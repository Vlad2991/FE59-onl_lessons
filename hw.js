'use strict'
// ************************Задача1************************
// const job = {
//     oklad : 1200,
//     schedule : "five-day"
// }
// console.log(job);
// delete job.oklad;
// console.log(job);
// ************************Задача2************************
// const job = {
//     oklad : 1200,
//     schedule : "five-day"
// }
// console.log(job.hasOwnProperty("oklad"));
// console.log(job.hasOwnProperty("stavka"));

// ************************Задача3************************
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
//     }
//     for (const cikl in student) {
//         console.log({cikl})
//     };
//     for(const values in student){
//         console.log(student[values])
//     }

   // ************************Задача4************************
//    const colors = {
//     'ru pum pu ru rum': {
//     red: 'красный',
//     green: 'зеленый',
//     blue: 'синий'
//     },
//     }
//     console.log(colors['ru pum pu ru rum'].red);
//     console.log(colors['ru pum pu ru rum'].blue);

//     // ************************Задача5************************

// let salaries = {
// andrey: 500,
// sveta: 413,
// anton: 987,
// igor: 664,
// alexandra: 199
// }
// let salariesArray = Object.values(salaries);
// let keyInObject = Object.keys(salaries).length;
// let sum = 0;
// for (const numberSum of salariesArray) {
//     sum += numberSum;
//   }
// let finalZp = sum / keyInObject;
//   console.log(finalZp)
  // ************************Задача6************************
  function registrationValidator() {
    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");
    let user = {
        login: login,
        password: password
    };
    let confirmation = confirm(`Подтвердите данные:\nЛогин: ${user.login}\nПароль: ${user.password}`);
    if (confirmation) {
        alert("Добро пожаловать!");
    } else {
        alert("Регистрация отменена.");
    }
}
registrationValidator();
