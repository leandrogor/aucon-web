import { Component } from '@angular/core';
import { GrillaLogosComponent } from '../../../../../compartido/componentes/grilla-logos/grilla-logos.component';
import { ItemLogo } from '../../../../../modelos/item-logo';

@Component({
  selector: 'app-seccion-marcas',
  standalone: true,
  imports: [GrillaLogosComponent],
  templateUrl: './seccion-marcas.component.html',
  styleUrl: './seccion-marcas.component.scss',
})
export class SeccionMarcasComponent {
  readonly logosMarcas: ItemLogo[] = [
    { nombre: 'Siemens', rutaImagen: 'assets/images/marcas/siemens.jpg' },
    { nombre: 'Danfoss', rutaImagen: 'assets/images/marcas/danfoss.jpg' },
    { nombre: 'Zoloda', rutaImagen: 'assets/images/marcas/zoloda.jpg' },
    { nombre: 'Allen Bradley', rutaImagen: 'assets/images/marcas/allen.jpg' },
    { nombre: 'Wonderware', rutaImagen: 'assets/images/marcas/wonderware.jpg' },
    { nombre: 'Weidmüller', rutaImagen: 'assets/images/marcas/weidmuller.jpg' },
    { nombre: 'WEG', rutaImagen: 'assets/images/marcas/weg.jpg' },
    { nombre: 'SMC', rutaImagen: 'assets/images/marcas/smc.jpg' },
    { nombre: 'SEW', rutaImagen: 'assets/images/marcas/sew.jpg' },
    { nombre: 'Schneider', rutaImagen: 'assets/images/marcas/schneider.jpg' },
    { nombre: 'Phoenix', rutaImagen: 'assets/images/marcas/phoenix.jpg' },
    { nombre: 'Pepperl+Fuchs', rutaImagen: 'assets/images/marcas/peperl.jpg' },
    { nombre: 'Optex', rutaImagen: 'assets/images/marcas/optex.jpg' },
    { nombre: 'Omron', rutaImagen: 'assets/images/marcas/omron.jpg' },
    { nombre: 'Micro', rutaImagen: 'assets/images/marcas/micro.jpg' },
    { nombre: 'Intellution', rutaImagen: 'assets/images/marcas/intellution.jpg' },
    { nombre: 'ABB', rutaImagen: 'assets/images/marcas/abb.jpg' },
    { nombre: 'Hitachi', rutaImagen: 'assets/images/marcas/hitachi.jpg' },
    { nombre: 'Exemis', rutaImagen: 'assets/images/marcas/exemis.jpg' },
    { nombre: 'Bürkert', rutaImagen: 'assets/images/marcas/burkert.jpg' },
    { nombre: 'Baldor', rutaImagen: 'assets/images/marcas/baldor.jpg' },
  ];
}
