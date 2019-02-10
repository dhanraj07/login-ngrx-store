import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
  isUserAuthenticated = false;
  constructor(private store:Store<AppState>){
    this.store.select(state => state.login.isAuthenticated).subscribe((authenticated)=>{ this.isUserAuthenticated  = authenticated});
  }
  
 
}
