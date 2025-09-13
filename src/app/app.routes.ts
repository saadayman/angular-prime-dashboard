import { Routes } from '@angular/router';
import { AppLayout } from './layout/app.layout';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'users',
    redirectTo: 'dashboard/users',
    pathMatch: 'full',
  },
  {
    path: 'user',
    redirectTo: 'dashboard/users',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
          },
          {
            path: 'reports',
            loadComponent: () => import('./pages/reports/reports').then((m) => m.ReportsComponent),
          },

          {
            path: 'users',
            loadComponent: () =>
              import('./pages/organization/users/user-form/user-form').then((m) => m.UserForm),
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
