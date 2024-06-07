"use strict";
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// ****************1************
function getStringUsersNames(users, separator = ", ") {
    return users
        .map(user => user.name)
        .join(separator);
}
console.log(getStringUsersNames(users));
// ****************2************
function calcUsersCars(users) {
    return users
        .map(user => user.cars)
        .filter(cars => cars !== undefined)
        .map(cars => cars.length)
        .reduce((sum, curr) => sum + curr, 0);
}
console.log(calcUsersCars(users));
// ****************3************
function getUsersWithEducation(users) {
    return users.filter(user => user.hasEducation);
}
console.log(getUsersWithEducation(users));
// ****************4************
function getUsersWithAnimals(arrayUsers) {
    return arrayUsers.filter(user => user.animals && user.animals.length !== 0);
}
console.log(getUsersWithAnimals(users));
// ****************5************
function getStringCarsBrand(users, removeDuplicates) {
    let usersCars = [].concat(...users.filter(user => user.cars && user.cars.length !== 0).map(user => user.cars));
    if (removeDuplicates) {
        return usersCars
            .filter((brand, index, array) => array.indexOf(brand) === index)
            .join(", ");
    }
    return usersCars.join(", ");
}
console.log(getStringCarsBrand(users, true));
console.log(getStringCarsBrand(users, false));
