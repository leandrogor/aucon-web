import { Component, input } from '@angular/core';

@Component({
  selector: 'app-grilla-logos',
  standalone: true,
  templateUrl: './grilla-logos.component.html',
  styleUrl: './grilla-logos.component.scss',
})
export class GrillaLogosComponent {
  readonly logos = input.required<{ nombre: string; rutaImagen: string }[]>();
  readonly titulo = input<string>('');
}
