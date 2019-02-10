export class User {
    id?: number;
    username?: string;
    password?: string;
    role?: number;
    token?: string;
  }

export const users: User[] = [
    {
        id: 1,
        username : 'dishank',
        password : 'abc@123',
        role: 2,
        token: 'myToken'
    }
]
