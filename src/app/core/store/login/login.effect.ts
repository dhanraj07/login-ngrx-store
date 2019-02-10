import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect , ofType } from '@ngrx/effects';
import { LoginActionType ,  LoginSuccess } from './login.action';
import { HttpClient } from '@angular/common/http';
import { switchMap , map } from 'rxjs/operators';
import { UserAccess } from '../../model/user-access';
import { ComponentAccess } from '../../constants/access-constant'
import { AccessMapperService } from '../../services/access-mapper.service';

@Injectable()
export class LoginEffect {

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private mapper: AccessMapperService
    ) {}

    @Effect()
    Login$: Observable<Action> = this.actions$.pipe(
        ofType(LoginActionType.LOGIN),
        switchMap(
            () => {
                return this.http.post<any>('http://phsdemoapi.azilenservices.com:8098/api/User/login',
                                            {'Email': 'dhanraj.c@azilen.com', 'Password': 'Test@123'}).pipe(
                                                    map((result) => {
                                                       const allowedRoutes = this.mapper.mapRoutes(UserAccess, ComponentAccess);
                                                       return new LoginSuccess({'loginData': result.Data, 'routes': allowedRoutes});
                                                    })
                                            );
            }
        )
    );
}
