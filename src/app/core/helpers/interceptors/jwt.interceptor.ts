import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginState } from '../../store/login/login.state';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private store : Store<LoginState>) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        this.store.select(state=>state.token).subscribe((token)=>{
            if(token){
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        });
        
        return next.handle(request);
    }
}