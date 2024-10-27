import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'lib-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
})
export class AuthButtonComponent {
  constructor(public auth: AuthService) {}
}
