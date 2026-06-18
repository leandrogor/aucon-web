import { Routes } from '@angular/router';

export const rutasSustentable: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pagina-sustentable/pagina-sustentable.component').then(
        (m) => m.PaginaSustentableComponent,
      ),
  },
];
