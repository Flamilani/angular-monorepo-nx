import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkTheme = true;

  constructor(public router: Router) {}
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
