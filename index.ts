
import {IUser, usersArray} from './users.js';
import {usersInfoArray} from "./userInfo.js";


interface IUsersResume{
    name: string,
    position?: string,
    age?: number,
    gender: string
}

function getUserInfo(usersArray: IUser[]) {
    let UsersJobPositions:IUsersResume[] = [];
    usersArray.forEach(
        function (v) {
            let userById: any = usersInfoArray.find(item => item.userid === v.userid);
            let newUserJobPosition:IUsersResume;
            if (userById === undefined) {
                newUserJobPosition = {
                    name: v.name,
                    gender: v.gender
                }
            }
            else newUserJobPosition = {
                name: v.name,
                position: userById.organization.position,
                age: userById.age,
                gender: v.gender
            }
            UsersJobPositions.unshift(newUserJobPosition);
        }
    );
    return UsersJobPositions;
}


const usersPositions = getUserInfo(usersArray);
console.log('userPositions', usersPositions);

