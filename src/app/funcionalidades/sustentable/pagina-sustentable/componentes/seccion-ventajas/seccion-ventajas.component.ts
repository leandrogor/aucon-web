import { Component, signal } from '@angular/core';

interface ItemVentaja {
  icono: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-seccion-ventajas',
  standalone: true,
  templateUrl: './seccion-ventajas.component.html',
  styleUrl: './seccion-ventajas.component.scss',
})
export class SeccionVentajasComponent {
  readonly ventajas = signal<ItemVentaja[]>([
    {
      icono: 'sun',
      titulo: 'Inagotables',
      descripcion:
        'La energía solar que recibe la Tierra se considera una fuente importante de energías limpias y renovables. Utiliza ciclos naturales para producir energía y no produce residuos tóxicos. Son recursos naturales gratuitos e inagotables.',
    },
    {
      icono: 'globe',
      titulo: 'Cuidamos el Planeta',
      descripcion:
        'La principal ventaja de las energías renovables es su limpieza: no generan impacto al medio ambiente. La energía es generada a partir del uso de mecanismos sostenibles y tienden a bajar emisiones de carbono, disminuyendo la generación de gases de efecto invernadero.',
    },
    {
      icono: 'scales',
      titulo: 'Horizonte Político Favorable',
      descripcion:
        'Disponer de energías renovables contribuye al crecimiento de la red energética en Argentina. La Ley nacional 27.424 establece un proceso de apoyo e incentivos a las energías renovables a través del régimen de fomento a la generación distribuida integrada a la red eléctrica pública.',
    },
    {
      icono: 'trending-up',
      titulo: 'Crecimiento Competitivo',
      descripcion:
        'Generar la propia energía ofrece mayor autonomía y ahorros en la factura eléctrica, convirtiendo al consumidor en el verdadero protagonista de su matriz energética.',
    },
    {
      icono: 'leaf',
      titulo: 'Desarrollo Sostenible',
      descripcion:
        'El desarrollo sostenible garantiza el equilibrio entre el crecimiento económico, la preservación del medio ambiente y el bienestar social — una transición hacia una sociedad más respetuosa con el entorno.',
    },
    {
      icono: 'briefcase',
      titulo: 'Generan Empleo',
      descripcion:
        'Contribuyen a la economía y generan nuevos puestos de trabajo. Los recursos económicos se destinan a inversión en I+D en lugar de importaciones energéticas.',
    },
    {
      icono: 'shield',
      titulo: 'Seguridad Energética',
      descripcion:
        'Las energías renovables permiten incrementar la seguridad energética logrando una cierta independencia de los combustibles fósiles y disponibilidad de energía a precios asumibles.',
    },
  ]);
}
