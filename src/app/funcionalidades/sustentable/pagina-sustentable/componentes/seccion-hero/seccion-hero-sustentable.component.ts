import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-seccion-hero-sustentable',
  standalone: true,
  templateUrl: './seccion-hero-sustentable.component.html',
  styleUrl: './seccion-hero-sustentable.component.scss',
})
export class SeccionHeroSustentableComponent {
  readonly aniosExperiencia = computed(() => new Date().getFullYear() - 1995);

  desplazarAContacto(): void {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
