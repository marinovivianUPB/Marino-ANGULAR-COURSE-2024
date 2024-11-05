import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _authService: AuthService, private _router: Router) { }

  public onLogin(){
    this._authService.login()
    this.goToStudent()
  }

  public goToStudent(){
    this._router.navigate(['student'])
  }
}
