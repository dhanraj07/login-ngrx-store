import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ClientComponent } from './client/client.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuardService, RoleGuardService } from './core/helpers/guards';

const routes: Routes = [
    { path : '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', pathMatch: 'full' , component: LoginComponent},
    { path: 'client', component: ClientComponent ,  pathMatch: 'full', canActivate: [AuthGuardService, RoleGuardService]},
    { path: 'candidate', loadChildren: './candidate/candidate.module#CandidateModule' , canActivate : [AuthGuardService, RoleGuardService] }
    // { path: 'candidate', loadChildren:'./candidate/candidate.module#CandidateModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
