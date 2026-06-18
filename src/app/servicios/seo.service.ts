import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicioSeo {
  private readonly servicioTitulo = inject(Title);
  private readonly servicioMeta = inject(Meta);
  private readonly router = inject(Router);
  private readonly rutaActiva = inject(ActivatedRoute);

  constructor() {
    this.router.events.pipe(filter((evento) => evento instanceof NavigationEnd)).subscribe(() => {
      let rutaActual = this.rutaActiva;
      while (rutaActual.firstChild) {
        rutaActual = rutaActual.firstChild;
      }

      const datos = rutaActual.snapshot.data;
      const titulo =
        datos['title'] || 'Aucon Ingeniería SRL — Automatización, Control y Energía Sustentable';
      const descripcion =
        datos['description'] ||
        'Aucon Ingeniería SRL — Soluciones de Automatización y Control Industrial, Energías Renovables y Sustentabilidad. Córdoba, Argentina. Desde 1995.';

      this.servicioTitulo.setTitle(titulo);
      this.servicioMeta.updateTag({ name: 'description', content: descripcion });

      // Open Graph / Redes Sociales
      this.servicioMeta.updateTag({ property: 'og:title', content: titulo });
      this.servicioMeta.updateTag({ property: 'og:description', content: descripcion });

      const imagenOg = datos['ogImage'] || 'assets/images/general/logo-cabecera.png';
      this.servicioMeta.updateTag({ property: 'og:image', content: imagenOg });
    });
  }
}
