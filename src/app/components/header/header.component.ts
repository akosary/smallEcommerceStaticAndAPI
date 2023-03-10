import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  flag: boolean = false;
  flagLogin: boolean = true;
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {
    if (this._auth.isLoggedIn) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
  logout() {
    this._auth.logOut();
    this._router.navigate(['/login']);
  }
}
