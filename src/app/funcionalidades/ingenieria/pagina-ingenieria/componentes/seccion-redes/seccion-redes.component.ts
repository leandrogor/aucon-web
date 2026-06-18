import { Component } from '@angular/core';
import { GrillaLogosComponent } from '../../../../../compartido/componentes/grilla-logos/grilla-logos.component';
import { ItemLogo } from '../../../../../modelos/item-logo';

@Component({
  selector: 'app-seccion-redes',
  standalone: true,
  imports: [GrillaLogosComponent],
  templateUrl: './seccion-redes.component.html',
  styleUrl: './seccion-redes.component.scss',
})
export class SeccionRedesComponent {
  readonly logosRedes: ItemLogo[] = [
    { nombre: 'WiFi', rutaImagen: 'assets/images/redes/wifi.jpg' },
    { nombre: 'Profibus', rutaImagen: 'assets/images/redes/profibus.jpg' },
    { nombre: 'Profinet', rutaImagen: 'assets/images/redes/profinet.jpg' },
    { nombre: 'Modbus (TCP)', rutaImagen: 'assets/images/redes/modbus-tcp.jpg' },
    { nombre: 'Modbus (RTU)', rutaImagen: 'assets/images/redes/modbus-rtu.jpg' },
    { nombre: 'HART', rutaImagen: 'assets/images/redes/hart.jpg' },
    { nombre: 'Fieldbus', rutaImagen: 'assets/images/redes/fieldbus.jpg' },
    { nombre: 'Ethernet (IP)', rutaImagen: 'assets/images/redes/ethernet-ip.jpg' },
    { nombre: 'Ethernet', rutaImagen: 'assets/images/redes/ethernet.jpg' },
    { nombre: 'CAN', rutaImagen: 'assets/images/redes/can.jpg' },
    { nombre: 'ASi', rutaImagen: 'assets/images/redes/asi.jpg' },
    { nombre: '3G', rutaImagen: 'assets/images/redes/3g.jpg' },
  ];
}
