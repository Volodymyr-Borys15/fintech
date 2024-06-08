import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@fintech/auth').then((m) => m.authRoutes),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
