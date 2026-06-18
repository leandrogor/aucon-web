import { Routes } from '@angular/router';

export const rutas: Routes = [
  {
    path: '',
    loadChildren: () => import('./funcionalidades/inicio/inicio.routes').then((m) => m.rutasInicio),
  },
  {
    path: 'ingenieria',
    loadChildren: () =>
      import('./funcionalidades/ingenieria/ingenieria.routes').then((m) => m.rutasIngenieria),
  },
  {
    path: 'sustentable',
    loadChildren: () =>
      import('./funcionalidades/sustentable/sustentable.routes').then((m) => m.rutasSustentable),
  },
  { path: '**', redirectTo: '' },
];
