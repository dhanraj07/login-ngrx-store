import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from '../../store/login/login.action';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    isErrorShown = false;

    constructor(private router: Router,
        private store:Store<any>
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.store.dispatch( new Logout({}));
                this.router.navigate(['/login']);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}