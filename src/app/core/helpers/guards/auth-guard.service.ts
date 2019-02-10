import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { Logout } from '../../store/login/login.action';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router) {

    }

    canActivate( route: ActivatedRouteSnapshot, Routerstate: RouterStateSnapshot) {
        return this.store.select((state) => {
            if (state.login.isAuthenticated) {
                return true;
            } else {
                this.router.navigate(['/login']);
                this.store.dispatch(new Logout({}));
            }
            return false;
        });
    }
}
