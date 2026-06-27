import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TarjetaServicio } from '../../../../../modelos/tarjeta-servicio';

interface ServicioPresentacion extends Omit<TarjetaServicio, 'urlVideo'> {
  urlVideo?: SafeResourceUrl;
}

@Component({
  selector: 'app-seccion-servicios',
  standalone: true,
  templateUrl: './seccion-servicios.component.html',
  styleUrl: './seccion-servicios.component.scss',
})
export class SeccionServiciosComponent {
  private readonly sanitizer = inject(DomSanitizer);

  private readonly serviciosRaw = signal<TarjetaServicio[]>([
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

  readonly servicios = computed<ServicioPresentacion[]>(() =>
    this.serviciosRaw().map((s) => {
      let safeUrl: SafeResourceUrl | undefined = undefined;

      if (s.urlVideo) {
        // Validación de seguridad para prevenir XSS y asegurar que la URL sea segura para omitir la sanitización
        const esYoutubeEmbed =
          /^https:\/\/(www\.)?youtube\.com\/embed\/[a-zA-Z0-9_-]+(?:\?.*)?$/.test(s.urlVideo);

        if (esYoutubeEmbed) {
          safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(s.urlVideo);
        } else {
          console.warn(`URL de video bloqueada por políticas de seguridad: ${s.urlVideo}`);
        }
      }

      return {
        ...s,
        urlVideo: safeUrl,
      };
    }),
  );

  desplazarAContacto(): void {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
