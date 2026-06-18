import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServicioTema {
  private readonly _tema = signal<'claro' | 'oscuro'>(
    (localStorage.getItem('aucon-tema') as 'claro' | 'oscuro') ??
      (typeof globalThis !== 'undefined' &&
      typeof globalThis.matchMedia === 'function' &&
      globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'oscuro'
        : 'claro'),
  );

  readonly esOscuro = computed(() => this._tema() === 'oscuro');

  constructor() {
    effect(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', this.esOscuro());
      }
      localStorage.setItem('aucon-tema', this._tema());
    });
  }

  alternar(): void {
    this._tema.update((t) => (t === 'claro' ? 'oscuro' : 'claro'));
  }
}
