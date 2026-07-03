import { Component, computed, signal, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonWhatsappComponent } from '../../../compartido/componentes/boton-whatsapp/boton-whatsapp.component';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [RouterLink, BotonWhatsappComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.scss',
})
export class PaginaInicioComponent {
  readonly aniosTrayectoria = computed(() => new Date().getFullYear() - 1995);
  readonly videoListo = signal(false);

  @ViewChild('videoFondo') private readonly videoFondoRef!: ElementRef<HTMLVideoElement>;

  constructor() {
    afterNextRender(() => {
      const video = this.videoFondoRef.nativeElement;
      if (video) {
        video.src = 'assets/videos/tvbhd170.mp4';
        video.load();
        video.play().catch(() => {
          /* autoplay puede estar bloqueado */
        });
      }
    });
  }

  onVideoListo(): void {
    this.videoListo.set(true);
  }
}
