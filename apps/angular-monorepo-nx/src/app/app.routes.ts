import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'admin',
    loadChildren: () => import('@angular-monorepo-nx/admin').then((m) => m.AdminModule),
  },
  {
    path: 'home',
    loadChildren: () => import('@angular-monorepo-nx/home').then((m) => m.HomeModule),
  },
  {
    path: 'tasks',
    loadChildren: () => import('@angular-monorepo-nx/home').then((m) => m.TasksModule),
  },
  {
    path: 'slides',
    loadChildren: () => import('@angular-monorepo-nx/home').then((m) => m.SlidesModule),
  },
];
