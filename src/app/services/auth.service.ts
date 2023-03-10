import { IUser } from './../iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;
  constructor() {}
  login(_username: string, _password: string) {
    this.user = {
      username: _username,
      password: _password,
    };
  }
  get isLoggedIn(): boolean {
    if (this.user?.username && this.user.password) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    this.user = null;
  }
}
