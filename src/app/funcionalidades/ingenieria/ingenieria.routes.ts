import { Routes } from '@angular/router';

export const rutasIngenieria: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pagina-ingenieria/pagina-ingenieria.component').then(
        (m) => m.PaginaIngenieriaComponent,
      ),
  },
];
