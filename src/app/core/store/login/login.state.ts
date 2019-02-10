import { User } from '../../model/user';

export interface LoginState{
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    // error message
    errorMessage: string | null;
    token: string | null;
    userRole: number;
    useraccess: any;
}


export const initialLoginState: LoginState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    token : '',
    userRole : 8,
    useraccess : null
  };
