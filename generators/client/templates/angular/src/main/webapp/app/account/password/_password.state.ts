import { Injectable } from '@angular/core';
import { CanActivate, Routes } from '@angular/router';

import {PasswordComponent} from './password.component';

import {Principal} from '../../shared';

@Injectable()
export class PasswordResolve implements CanActivate {

  constructor(private principal: Principal) {}

  canActivate() {
    return this.principal.identity().then(account => this.principal.hasAnyAuthority(['ROLE_USER']));
  }
}
<<<<<<< HEAD
=======

export const passwordRoute: Routes = [
  {
    path: 'password',
    component: PasswordComponent,
    canActivate: [PasswordResolve]
  }
];
>>>>>>> refactor layout routing and account
