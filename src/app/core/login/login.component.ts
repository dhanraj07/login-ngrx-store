import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User()
  constructor(private loginService : LoginService ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.loginService.login(this.user);
  }

}
