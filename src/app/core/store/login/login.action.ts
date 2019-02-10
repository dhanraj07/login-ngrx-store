import { Action } from '@ngrx/store';

export const LoginActionType = {
    'LOGIN' : 'LOGIN',
    'LOGIN_SUCCESS' : 'LOGIN_SUCCESS',
    'LOGIN_FAILURE' : 'LOGIN_FAILURE',
    'LOGOUT' : 'LOGOUT',
};

export class Login implements Action {
    readonly type = LoginActionType.LOGIN;
    constructor(public payload: any) {}
}

export class Logout implements Action {
    readonly type = LoginActionType.LOGOUT;
    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type = LoginActionType.LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export class LoginFailure implements Action {
    readonly type = LoginActionType.LOGIN_FAILURE;
    constructor(public payload: any) {}
}




export type LoginActions =
Login |
Logout |
LoginSuccess |
LoginFailure;
