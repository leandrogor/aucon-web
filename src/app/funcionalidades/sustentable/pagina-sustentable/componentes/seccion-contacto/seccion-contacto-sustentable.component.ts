import { Component } from '@angular/core';
import { FormularioContactoComponent } from '../../../../../compartido/componentes/formulario-contacto/formulario-contacto.component';
import { CONTACTO_CONFIG } from '../../../../../compartido/constantes/contacto.const';

@Component({
  selector: 'app-seccion-contacto-sustentable',
  standalone: true,
  imports: [FormularioContactoComponent],
  templateUrl: './seccion-contacto-sustentable.component.html',
  styleUrl: './seccion-contacto-sustentable.component.scss',
})
export class SeccionContactoSustentableComponent {
  readonly contactoInfo = CONTACTO_CONFIG;
}
