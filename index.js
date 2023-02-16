"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_js_1 = require("./users.js");
var userInfo_js_1 = require("./userInfo.js");
console.log(users_js_1.usersArray[1].name);
console.log(userInfo_js_1.usersInfoArray);
// let newUserJobPosition = [
//             usersArray[1].name,
//             usersInfoArray[1].organization.position,
//             usersInfoArray[1].age,
//             usersArray[1].gender
//         ];
// console.log(newUserJobPosition)
function getUsersJobPositions(usersArray, usersInfoArray) {
    var UsersJobPositions = [];
    var newUserJobPosition;
    for (var i = 0; i < usersArray.length; i++) {
        newUserJobPosition = [
            usersArray[i].name,
            usersInfoArray[i].organization.position,
            usersInfoArray[i].age,
            usersArray[i].gender
        ];
        UsersJobPositions.push(newUserJobPosition);
    }
    return UsersJobPositions;
}
var usersPositions = getUsersJobPositions(users_js_1.usersArray, userInfo_js_1.usersInfoArray);
console.log('userPositions', usersPositions);
