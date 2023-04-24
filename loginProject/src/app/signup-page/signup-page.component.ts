import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this._router.navigate(["login-page"]);
  }

}
