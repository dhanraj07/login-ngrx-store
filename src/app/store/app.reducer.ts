import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { LoginReducer } from '../core/store/login/login.reducer';

export const AppReducer:ActionReducerMap<AppState> = {
    login : LoginReducer
}