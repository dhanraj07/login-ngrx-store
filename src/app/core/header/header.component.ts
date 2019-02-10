import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../store/login/login.action'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store : Store<any> , private router:Router) { }

  ngOnInit() {
  }

  Logout(){
    this.store.dispatch( new Logout({}))
    this.router.navigate(['/login']);
  }

}
