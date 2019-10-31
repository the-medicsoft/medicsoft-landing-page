import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.sass']
})
export class LoginSignupComponent implements OnInit {

  constructor(private loginSignupService: LoginSignupService) { }

  ngOnInit() {
    this.test()
  }

  test(): void {
    console.log(this.loginSignupService.user())
  }

}
