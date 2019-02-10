import { users, User } from '../model/user';
import { Store } from '@ngrx/store';
import { Login } from '../store/login/login.action';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccessMapperService } from './access-mapper.service';
import { take } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(
    private store: Store<any>,
    private router: Router,
    private mapper: AccessMapperService
  ) {}

  login(userObj: User) {
    const usersArr = users;

    const user = usersArr.filter(function(item) {
      return (
        item.username === userObj.username && item.password === userObj.password
      );
    })[0];
    if (user) {
      this.store.dispatch(
        new Login({ id: user.id, username: user.username, role: user.role })
      );
      // console.log(user.role);
      // if(user.role == 2)
      //   this.router.navigate(['/client'])
      this.store
        .select(state => state.login.isAuthenticated)
        .subscribe(isAuth => {
          debugger;
          if (isAuth) {
            // this.router.navigate(['/client']);
            this.router.navigate(['/candidate']);
          }
        });
    } else {
      console.log('invalid credentials!!');
    }
  }
}
