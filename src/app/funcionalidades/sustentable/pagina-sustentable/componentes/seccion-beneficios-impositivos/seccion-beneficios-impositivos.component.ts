import { Component, signal } from '@angular/core';

interface SeccionBeneficio {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-seccion-beneficios-impositivos',
  standalone: true,
  templateUrl: './seccion-beneficios-impositivos.component.html',
  styleUrl: './seccion-beneficios-impositivos.component.scss',
})
export class SeccionBeneficiosImpositivosComponent {
  readonly indiceAbierto = signal<number | null>(null);

  readonly secciones = signal<SeccionBeneficio[]>([
    {
      titulo: 'Ley 27.424 — Generación Distribuida',
      contenido:
        'Habilita a los consumidores a convertirse en generadores de energía renovable para autoconsumo e inyección a la red. Permite disminuir el consumo eléctrico de la distribuidora; el excedente generado es pagado por la distribuidora al usuario. Establece un certificado de crédito fiscal de $30.000 por cada Kilowatt instalado, hasta un máximo de $2.000.000 por instalación. Crea el FODIS (Fondo para la Generación Distribuida de Energías Renovables): préstamos, incentivos, garantías.',
    },
    {
      titulo: 'Ley N° 10.604 — Provincia de Córdoba',
      contenido:
        'Adhiere a la Ley Nacional N° 27.424. Exención del Impuesto sobre Ingresos Brutos para ingresos de inyección de energía distribuida. Reducción de hasta el 5% para contribuyentes del Impuesto sobre Ingresos Brutos. Reducción de hasta el 20% del Impuesto Inmobiliario anual. Exención del Impuesto de Sellos a actos y contratos relacionados con la generación.',
    },
    {
      titulo: 'Resolución ERSEP N° 04 Año 2021',
      contenido:
        'Tarifa para usuarios de movilidad eléctrica aproximadamente un 50% del valor habitual en horario Valle.',
    },
    {
      titulo: 'Créditos BanCor',
      contenido:
        'Línea de préstamos personales para eficiencia energética hasta 60 meses (5% + UVA, hasta $460.000).',
    },
  ]);

  alternarSeccion(indice: number): void {
    this.indiceAbierto.update((actual) => (actual === indice ? null : indice));
  }
}
