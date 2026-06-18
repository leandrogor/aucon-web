import { Routes } from '@angular/router';

export const rutasInicio: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pagina-inicio/pagina-inicio.component').then((m) => m.PaginaInicioComponent),
  },
];
