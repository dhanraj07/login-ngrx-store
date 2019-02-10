import { LoginState, initialLoginState } from '../core/store/login/login.state';

export interface AppState {
    login: LoginState;
}

export const initialAppState: AppState = {
    login : initialLoginState
};

export function getInitialAppState() {
    return initialAppState;
}
