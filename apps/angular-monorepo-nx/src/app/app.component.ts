import { ShareModule } from '@angular-monorepo-nx/share';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ShareModule],
  selector: 'app-root',
  template: ` <article>
    <lib-header></lib-header>
    @if (router.url === '/slides') {
      <main>
      <router-outlet></router-outlet>
      </main>
    } @else {
      <main class="container mx-auto">
      <router-outlet></router-outlet>
    </main>
    }
    <lib-footer></lib-footer>
  </article>`,
})
export class AppComponent {
  constructor(public router: Router) {}
}
