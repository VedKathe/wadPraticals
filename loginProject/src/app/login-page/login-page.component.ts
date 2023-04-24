import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user :string = '';
  pass :string = '';
  pre : string = "";
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToHome() { 
    this._router.navigate(["home-page"]);
  }

  goToRegister() {
  
    this._router.navigate(["signup-page"]);
  }

}
