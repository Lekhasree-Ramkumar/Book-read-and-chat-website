import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;
  listArr = [];
  inputTxt = '';

  addToList() {
    if (this.inputTxt != '') {
      this.listArr.push(this.inputTxt);
    }
  }
  removeItem(index: number) {
    this.listArr.splice(index, 1);
  }
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  blog() {
    this.router.navigate(['/blog']);
  }
  games() {
    this.router.navigate(['/games']);
  }
  chat() {
    this.router.navigate(['/chat']);
  }
}
