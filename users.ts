import {IOrganization, IUserInfo} from "./userInfo";

export interface IUser {
    userid: string,
    name: string,
    birthdate?: string,
    age?: number,
    organization?: IOrganization
    gender: string
}

let user1: IUser = {
    userid: '127e4567-e89b-12d3-a458-426614174000',
    name: 'John',
    gender: 'man'
};

let user2: IUser = {
    userid: '127e4567-e89a-12f3-a458-327395154000',
    name: 'Anna',
    gender: 'woman'
};

export let usersArray: IUser[] = [
    user1,
    user2
];