import { Component } from '@angular/core';
import { FormularioContactoComponent } from '../../../../../compartido/componentes/formulario-contacto/formulario-contacto.component';
import { CONTACTO_CONFIG } from '../../../../../compartido/constantes/contacto.const';

@Component({
  selector: 'app-seccion-contacto-ingenieria',
  standalone: true,
  imports: [FormularioContactoComponent],
  templateUrl: './seccion-contacto-ingenieria.component.html',
  styleUrl: './seccion-contacto-ingenieria.component.scss',
})
export class SeccionContactoIngenieriaComponent {
  readonly contactoInfo = CONTACTO_CONFIG;
}
