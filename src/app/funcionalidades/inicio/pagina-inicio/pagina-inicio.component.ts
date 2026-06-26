import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonWhatsappComponent } from '../../../compartido/componentes/boton-whatsapp/boton-whatsapp.component';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [RouterLink, BotonWhatsappComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.scss',
})
export class PaginaInicioComponent {
  readonly aniosTrayectoria = computed(() => new Date().getFullYear() - 1995);
}
