import { Routes } from '@angular/router';

export const rutas: Routes = [
  {
    path: '',
    loadChildren: () => import('./funcionalidades/inicio/inicio.routes').then((m) => m.rutasInicio),
    data: {
      title: 'Aucon Ingeniería SRL — Automatización, Control y Energía Sustentable',
      description:
        'Aucon Ingeniería SRL — Soluciones de Automatización y Control Industrial, Energías Renovables y Sustentabilidad. Córdoba, Argentina. Desde 1995.',
    },
  },
  {
    path: 'ingenieria',
    loadChildren: () =>
      import('./funcionalidades/ingenieria/ingenieria.routes').then((m) => m.rutasIngenieria),
    data: {
      title: 'Aucon | Ingeniería Industrial — Automatización y Control',
      description:
        'Líderes en automatización, tableros eléctricos y control de procesos en Córdoba desde 1995. Soluciones industriales confiables y escalables.',
    },
  },
  {
    path: 'sustentable',
    loadChildren: () =>
      import('./funcionalidades/sustentable/sustentable.routes').then((m) => m.rutasSustentable),
    data: {
      title: 'Aucon | Energía Sustentable — Energías Renovables',
      description:
        'Especialistas en energía solar térmica, fotovoltaica, domótica y conversión vehicular sustentable en Córdoba. Reduciendo la huella de carbono.',
    },
  },
  { path: '**', redirectTo: '' },
];
