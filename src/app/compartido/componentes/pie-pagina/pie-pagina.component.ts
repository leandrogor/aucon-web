import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CONTACTO_CONFIG } from '../../constantes/contacto.const';

@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.scss',
})
export class PiePaginaComponent {
  readonly contactoInfo = CONTACTO_CONFIG;
  readonly anioActual = computed(() => new Date().getFullYear());
  private readonly router = inject(Router);

  navegarOScroll(ruta: string, event: Event): void {
    const urlActual = this.router.url.split('?')[0].split('#')[0];
    if (urlActual === ruta) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
