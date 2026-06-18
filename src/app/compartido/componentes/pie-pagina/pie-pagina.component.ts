import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pie-pagina',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.scss',
})
export class PiePaginaComponent {
  readonly anioActual = computed(() => new Date().getFullYear());
}
