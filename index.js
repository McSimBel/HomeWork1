import { usersArray } from './users.js';
import { usersInfoArray } from './userInfo.js';
const totalArray = usersArray.map((item, index) => ({ ...item, ...usersInfoArray[index] }));
function getUserInfo(totalArray) {
    let UsersJobPositions = [];
    let newUserJobPosition;
    totalArray.forEach(function (v) {
        newUserJobPosition = {
            name: v.name,
            // position: v.organization.position,
            age: v.age,
            gender: v.gender
        };
        UsersJobPositions.unshift(newUserJobPosition);
    });
    return UsersJobPositions;
}
const usersPositions = getUserInfo(totalArray);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map