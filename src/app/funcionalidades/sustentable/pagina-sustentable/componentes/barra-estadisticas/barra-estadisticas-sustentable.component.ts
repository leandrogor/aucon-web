import { Component, signal } from '@angular/core';
import { ContadorAnimadoComponent } from '../../../../../compartido/componentes/contador-animado/contador-animado.component';
import { ItemContador } from '../../../../../modelos/item-contador';

@Component({
  selector: 'app-barra-estadisticas-sustentable',
  standalone: true,
  imports: [ContadorAnimadoComponent],
  templateUrl: './barra-estadisticas-sustentable.component.html',
  styleUrl: './barra-estadisticas-sustentable.component.scss',
})
export class BarraEstadisticasSustentableComponent {
  // NOTA: replace with real values from client if updated in the future
  readonly contadores = signal<ItemContador[]>([
    { valor: 1800, sufijo: '', etiqueta: 'MW de Energía Renovable en Argentina' },
    { valor: 150, sufijo: '', etiqueta: 'MW Aportados por Usuarios Generadores' },
    { valor: 8000, sufijo: '', etiqueta: 'Usuarios Generadores en Argentina' },
    { valor: 90, sufijo: '%', etiqueta: 'de Ahorro con Auto Eléctrico' },
    {
      valor: 75,
      sufijo: '%',
      etiqueta: 'de Gases de Efecto Invernadero provienen de Combustibles Fósiles',
    },
  ]);
}
