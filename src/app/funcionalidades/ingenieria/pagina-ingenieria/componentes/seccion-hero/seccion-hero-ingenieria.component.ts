import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-seccion-hero-ingenieria',
  standalone: true,
  templateUrl: './seccion-hero-ingenieria.component.html',
  styleUrl: './seccion-hero-ingenieria.component.scss',
})
export class SeccionHeroIngenieriaComponent {
  readonly aniosExperiencia = computed(() => new Date().getFullYear() - 1995);

  irAContacto(): void {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
