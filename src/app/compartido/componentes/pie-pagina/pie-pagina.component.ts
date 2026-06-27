import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
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
}
