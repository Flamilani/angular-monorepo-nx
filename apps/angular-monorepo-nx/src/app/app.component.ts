import { ShareModule } from '@angular-monorepo-nx/share';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ShareModule, ReactiveFormsModule, FormsModule],
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
