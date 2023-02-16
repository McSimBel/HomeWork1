
import {IUser, usersArray} from './users.js';
import {IUserInfo, usersInfoArray} from './userInfo.js';

export interface IUsersJobPositions{
    name: string,
    position: string,
    age: number,
    gender: string
}

console.log(usersArray[1].name);

console.log(usersInfoArray);

// let newUserJobPosition = [
//             usersArray[1].name,
//             usersInfoArray[1].organization.position,
//             usersInfoArray[1].age,
//             usersArray[1].gender
//         ];
// console.log(newUserJobPosition)


function getUsersJobPositions(usersArray: IUser[], usersInfoArray: IUserInfo[]) {
    let UsersJobPositions = [];
    let newUserJobPosition;
    for (let i = 0; i < usersArray.length; i++) {
        newUserJobPosition = [
            usersArray[i].name,
            usersInfoArray[i].organization.position,
            usersInfoArray[i].age,
            usersArray[i].gender
        ]
        UsersJobPositions.push(newUserJobPosition);
    }
    return UsersJobPositions
}
const usersPositions = getUsersJobPositions(usersArray, usersInfoArray);

console.log('userPositions', usersPositions);