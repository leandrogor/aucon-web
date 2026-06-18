import { Component } from '@angular/core';
import { BarraNavegacionComponent } from '../../../compartido/componentes/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from '../../../compartido/componentes/pie-pagina/pie-pagina.component';
import { BotonWhatsappComponent } from '../../../compartido/componentes/boton-whatsapp/boton-whatsapp.component';
import { SeccionHeroIngenieriaComponent } from './componentes/seccion-hero/seccion-hero-ingenieria.component';
import { SeccionExperienciaComponent } from './componentes/seccion-experiencia/seccion-experiencia.component';
import { SeccionBeneficiosComponent } from './componentes/seccion-beneficios/seccion-beneficios.component';
import { BarraEstadisticasIngenieriaComponent } from './componentes/barra-estadisticas/barra-estadisticas-ingenieria.component';
import { SeccionClientesComponent } from './componentes/seccion-clientes/seccion-clientes.component';
import { SeccionMarcasComponent } from './componentes/seccion-marcas/seccion-marcas.component';
import { SeccionRedesComponent } from './componentes/seccion-redes/seccion-redes.component';
import { SeccionContactoIngenieriaComponent } from './componentes/seccion-contacto/seccion-contacto-ingenieria.component';

@Component({
  selector: 'app-pagina-ingenieria',
  standalone: true,
  imports: [
    BarraNavegacionComponent,
    PiePaginaComponent,
    BotonWhatsappComponent,
    SeccionHeroIngenieriaComponent,
    SeccionExperienciaComponent,
    SeccionBeneficiosComponent,
    BarraEstadisticasIngenieriaComponent,
    SeccionClientesComponent,
    SeccionMarcasComponent,
    SeccionRedesComponent,
    SeccionContactoIngenieriaComponent,
  ],
  templateUrl: './pagina-ingenieria.component.html',
  styleUrl: './pagina-ingenieria.component.scss',
})
export class PaginaIngenieriaComponent {
  readonly enlacesNav = [
    { etiqueta: 'Inicio', fragmento: 'inicio' },
    { etiqueta: 'Experiencia', fragmento: 'experiencia' },
    { etiqueta: 'Beneficios', fragmento: 'beneficios' },
    { etiqueta: 'Clientes', fragmento: 'clientes' },
    { etiqueta: 'Contacto', fragmento: 'contacto' },
  ];
}
