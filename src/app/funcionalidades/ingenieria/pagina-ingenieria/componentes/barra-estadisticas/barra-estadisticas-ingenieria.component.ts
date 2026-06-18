import { Component } from '@angular/core';
import { ContadorAnimadoComponent } from '../../../../../compartido/componentes/contador-animado/contador-animado.component';

@Component({
  selector: 'app-barra-estadisticas-ingenieria',
  standalone: true,
  imports: [ContadorAnimadoComponent],
  templateUrl: './barra-estadisticas-ingenieria.component.html',
  styleUrl: './barra-estadisticas-ingenieria.component.scss',
})
export class BarraEstadisticasIngenieriaComponent {}
