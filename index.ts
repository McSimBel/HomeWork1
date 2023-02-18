
import {IUser, usersArray} from './users.js';
import {usersInfoArray} from './userInfo.js';

export interface IUsersResume{
    name: string,
    position: string,
    age: number,
    gender: string
}


function getUserInfo(usersArray: IUser[]) {
    let UsersJobPositions:IUsersResume[] = [];
    usersArray.forEach(
        function (v,i) {
            let newUserJobPosition:IUsersResume = {
                name: v.name,
                position: usersInfoArray[i].organization.position,
                age: usersInfoArray[i].age,
                gender: v.gender
            }
            UsersJobPositions.unshift(newUserJobPosition);
        }
    );
    return UsersJobPositions;
}


const usersPositions = getUserInfo(usersArray);
console.log('userPositions', usersPositions);

