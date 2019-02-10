import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app.route.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
// import { AuthGuard } from "./services/auth-guard.service";
import { JwtInterceptor, ErrorInterceptor } from './helpers/interceptors';
import { GetService } from './services/getapi.service';
import { HttpService } from './services/http.service';
import { AuthGuardService, RoleGuardService } from './helpers/guards';
import { AccessMapperService } from './services/access-mapper.service';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    LoginService,
    GetService,
    AccessMapperService,
    HttpService,
    AuthGuardService,
    RoleGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule {}
