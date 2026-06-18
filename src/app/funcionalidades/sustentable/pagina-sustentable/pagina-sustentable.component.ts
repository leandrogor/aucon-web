import { Component } from '@angular/core';
import { BarraNavegacionComponent } from '../../../compartido/componentes/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from '../../../compartido/componentes/pie-pagina/pie-pagina.component';
import { BotonWhatsappComponent } from '../../../compartido/componentes/boton-whatsapp/boton-whatsapp.component';
import { SeccionHeroSustentableComponent } from './componentes/seccion-hero/seccion-hero-sustentable.component';
import { SeccionServiciosComponent } from './componentes/seccion-servicios/seccion-servicios.component';
import { SeccionVentajasComponent } from './componentes/seccion-ventajas/seccion-ventajas.component';
import { BarraEstadisticasSustentableComponent } from './componentes/barra-estadisticas/barra-estadisticas-sustentable.component';
import { SeccionBeneficiosImpositivosComponent } from './componentes/seccion-beneficios-impositivos/seccion-beneficios-impositivos.component';
import { SeccionFaqComponent } from './componentes/seccion-faq/seccion-faq.component';
import { SeccionContactoSustentableComponent } from './componentes/seccion-contacto/seccion-contacto-sustentable.component';

@Component({
  selector: 'app-pagina-sustentable',
  standalone: true,
  imports: [
    BarraNavegacionComponent,
    PiePaginaComponent,
    BotonWhatsappComponent,
    SeccionHeroSustentableComponent,
    SeccionServiciosComponent,
    SeccionVentajasComponent,
    BarraEstadisticasSustentableComponent,
    SeccionBeneficiosImpositivosComponent,
    SeccionFaqComponent,
    SeccionContactoSustentableComponent,
  ],
  templateUrl: './pagina-sustentable.component.html',
  styleUrl: './pagina-sustentable.component.scss',
})
export class PaginaSustentableComponent {
  readonly enlacesNav = [
    { etiqueta: 'Inicio', fragmento: 'inicio' },
    { etiqueta: 'Servicios', fragmento: 'servicios' },
    { etiqueta: 'Ventajas', fragmento: 'ventajas' },
    { etiqueta: 'Beneficios', fragmento: 'beneficios' },
    { etiqueta: 'FAQ', fragmento: 'faq' },
    { etiqueta: 'Contacto', fragmento: 'contacto' },
  ];
}
