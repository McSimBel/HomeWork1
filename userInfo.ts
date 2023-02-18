
interface IOrganization{
    name: string,
    position: string
}
interface IUserInfo {
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    organization: IOrganization
}
const user1InfoArray: IUserInfo = {
    userid: '127e4567-e89b-12d3-a458-426614174000',
    name: 'John',
    birthdate: '1982-02-17T21:00:00.000Z',
    age: 40,
    organization: {
        name: 'Amazon',
        position: 'General manager'
    }
};

const user2InfoArray: IUserInfo = {
    userid: '127e4567-e89a-12f3-a458-327395154000',
    name: 'Anna',
    birthdate: '1988-02-17T21:00:00.000Z',
    age: 34,
    organization: {
        name: 'Amazon',
        position: 'Manager'
    }
};
export let usersInfoArray: IUserInfo[] = [
    user1InfoArray,
    user2InfoArray
];