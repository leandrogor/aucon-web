import { Component } from '@angular/core';
import { CONTACTO_CONFIG } from '../../constantes/contacto.const';

@Component({
  selector: 'app-boton-whatsapp',
  standalone: true,
  templateUrl: './boton-whatsapp.component.html',
  styleUrl: './boton-whatsapp.component.scss',
})
export class BotonWhatsappComponent {
  readonly contactoInfo = CONTACTO_CONFIG;
}
