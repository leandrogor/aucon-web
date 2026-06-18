import { Component } from '@angular/core';
import { GrillaLogosComponent } from '../../../../../compartido/componentes/grilla-logos/grilla-logos.component';
import { ItemLogo } from '../../../../../modelos/item-logo';

@Component({
  selector: 'app-seccion-clientes',
  standalone: true,
  imports: [GrillaLogosComponent],
  templateUrl: './seccion-clientes.component.html',
  styleUrl: './seccion-clientes.component.scss',
})
export class SeccionClientesComponent {
  readonly logosClientes: ItemLogo[] = [
    { nombre: 'FEMSA', rutaImagen: 'assets/images/clientes/femsa.jpg' },
    { nombre: 'VW', rutaImagen: 'assets/images/clientes/vw.jpg' },
    { nombre: 'Valeo', rutaImagen: 'assets/images/clientes/valeo.jpg' },
    { nombre: 'Vélez', rutaImagen: 'assets/images/clientes/velez.jpg' },
    { nombre: 'Zumol', rutaImagen: 'assets/images/clientes/zumol.jpg' },
    { nombre: 'Sitec Baires', rutaImagen: 'assets/images/clientes/sitec-baires.jpg' },
    { nombre: 'SIMM', rutaImagen: 'assets/images/clientes/simm.jpg' },
    { nombre: 'Rolop', rutaImagen: 'assets/images/clientes/rolop.jpg' },
    { nombre: 'PSI', rutaImagen: 'assets/images/clientes/psi.jpg' },
    { nombre: 'Politron', rutaImagen: 'assets/images/clientes/politron.jpg' },
    { nombre: 'Palmar', rutaImagen: 'assets/images/clientes/palmar.jpg' },
    { nombre: 'Murten', rutaImagen: 'assets/images/clientes/murten.jpg' },
    { nombre: 'Infas', rutaImagen: 'assets/images/clientes/infas.jpg' },
    { nombre: 'Ilasa', rutaImagen: 'assets/images/clientes/ilasa.jpg' },
    { nombre: 'Hokke', rutaImagen: 'assets/images/clientes/hokke.jpg' },
    { nombre: 'Fundición', rutaImagen: 'assets/images/clientes/fundicion.jpg' },
    { nombre: 'EDASA', rutaImagen: 'assets/images/clientes/edasa.jpg' },
    { nombre: 'Cummaleu', rutaImagen: 'assets/images/clientes/cummaleu.jpg' },
    { nombre: 'DHSystem', rutaImagen: 'assets/images/clientes/dhsystem.jpg' },
  ];
}
