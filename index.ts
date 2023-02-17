
import {IUser, usersArray} from './users.js';
import {IUserInfo, usersInfoArray} from './userInfo.js';

export interface IUsersResume{
    name: string,
    position?: string,
    age?: number,
    gender: string
}

const totalArray: IUser[] = usersArray.map((item, index) => ({...item, ...usersInfoArray[index]}));


function getUserInfo(totalArray: IUser[]) {
    let UsersJobPositions:IUsersResume[] = [];
    let newUserJobPosition:IUsersResume;
    totalArray.forEach(
        function (v,i) {
            newUserJobPosition = {
                name: v.name,
                position: usersInfoArray[i].organization.position,
                age: v.age,
                gender: v.gender
            }
            UsersJobPositions.unshift(newUserJobPosition);
        }
    );
    return UsersJobPositions;
}


const usersPositions = getUserInfo(totalArray);
console.log('userPositions', usersPositions);

