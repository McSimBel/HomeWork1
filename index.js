import { usersArray } from './users.js';
import { usersInfoArray } from "./userInfo.js";
function getUserInfo(usersArray) {
    let UsersJobPositions = [];
    usersArray.forEach(function (v) {
        let userById = usersInfoArray.find(item => item.userid === v.userid);
        let newUserJobPosition;
        if (userById === undefined) {
            newUserJobPosition = {
                name: v.name,
                gender: v.gender
            };
        }
        else
            newUserJobPosition = {
                name: v.name,
                position: userById.organization.position,
                age: userById.age,
                gender: v.gender
            };
        UsersJobPositions.unshift(newUserJobPosition);
    });
    return UsersJobPositions;
}
const usersPositions = getUserInfo(usersArray);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map