import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioActualizacion } from './servicios/actualizacion.service';
import { ServicioSeo } from './servicios/seo.service';
import { ServicioTema } from './servicios/tema.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  constructor() {
    inject(ServicioActualizacion);
    inject(ServicioSeo);
    inject(ServicioTema);
  }
}
