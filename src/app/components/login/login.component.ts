import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _authService: AuthService, private _router: Router) {}
  username: string = '';
  password: string = '';
  login() {
    this._authService.login(this.username, this.password);
    this._router.navigate(['/product']);
  }
}
