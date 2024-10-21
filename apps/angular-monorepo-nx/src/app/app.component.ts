import { LayoutsModule } from '@angular-monorepo-nx/layouts';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutsModule],
  selector: 'app-root',
  template: ` <article>
    <lib-header></lib-header>
    <main class="container mx-auto">
      <router-outlet></router-outlet>
    </main>
    <lib-footer></lib-footer>
  </article>`,
})
export class AppComponent {
  title = 'angular-monorepo-nx';
}
