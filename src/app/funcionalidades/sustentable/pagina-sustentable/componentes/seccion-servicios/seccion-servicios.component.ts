import { Component, signal } from '@angular/core';
import { TarjetaServicio } from '../../../../../modelos/tarjeta-servicio';

@Component({
  selector: 'app-seccion-servicios',
  standalone: true,
  templateUrl: './seccion-servicios.component.html',
  styleUrl: './seccion-servicios.component.scss',
})
export class SeccionServiciosComponent {
  readonly servicios = signal<TarjetaServicio[]>([
    {
      titulo: 'Paneles Solares',
      descripcion:
        'Convertimos la energía brindada por el sol en energía eléctrica utilizable para nuestras empresas u hogares, para inyectar a la red o cargar nuestros vehículos eléctricos.',
      imagen: 'assets/images/servicios/paneles-solares.jpg',
    },
    {
      titulo: 'Termotanques Solares',
      descripcion:
        'Convertimos la energía brindada por el sol para calentar agua que puede ser usada para agua caliente domiciliaria, calefacción o piletas.',
      imagen: 'assets/images/servicios/termotanque-solar.jpg',
    },
    {
      titulo: 'Domótica Profesional',
      descripcion:
        'Automatizamos tu vivienda para integrar los sistemas de seguridad, gestión energética, bienestar y comunicaciones.',
      urlVideo: 'https://www.youtube.com/embed/0ht_wihBe40',
    },
    {
      titulo: 'Conversión Vehicular',
      descripcion:
        'Modificamos tu vehículo de combustión interna a propulsión eléctrica para reducir tus gastos en un 90% y minimizar el impacto ambiental.',
      imagen: 'assets/images/servicios/conversion-vehicular.jpg',
    },
  ]);

  desplazarAContacto(): void {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
