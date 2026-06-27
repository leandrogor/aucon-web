import { Component, afterNextRender, inject, input, signal, DestroyRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicioTema } from '../../../servicios/tema.service';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.scss',
})
export class BarraNavegacionComponent {
  readonly enlaces = input.required<{ etiqueta: string; fragmento: string }[]>();
  readonly rutaLogo = input.required<string>();
  readonly colorFondo = input<string | undefined>(undefined);

  readonly menuAbierto = signal(false);
  readonly esScrolled = signal(false);

  readonly tema = inject(ServicioTema);
  private readonly destruirRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const manejarScroll = (): void => {
        this.esScrolled.set(window.scrollY > 50);
      };

      window.addEventListener('scroll', manejarScroll, { passive: true });
      manejarScroll();

      this.destruirRef.onDestroy(() => {
        window.removeEventListener('scroll', manejarScroll);
      });
    });
  }

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  alternarTema(): void {
    this.tema.alternar();
  }

  irASeccion(fragmento: string): void {
    this.menuAbierto.set(false);
    const elemento = document.getElementById(fragmento);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
