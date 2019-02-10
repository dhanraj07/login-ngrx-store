import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Logout } from '../../store/login/login.action';
import { RoleManagementService } from '../../services/role-management.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private store: Store<AppState>, private router: Router, private rolemanager: RoleManagementService) {}

  canActivate(route: ActivatedRouteSnapshot, Routerstate: RouterStateSnapshot) {
    let isAuthorized = false;
    return this.store.select(state => {
      isAuthorized = this.rolemanager.checkUserAccess(state.login.useraccess, Routerstate);
      if (isAuthorized) {
        return true;
      } else {
        this.router.navigate(['/']);
      }
      return false;
    });
  }
}
