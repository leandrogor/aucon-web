import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-contador-animado',
  standalone: true,
  templateUrl: './contador-animado.component.html',
  styleUrl: './contador-animado.component.scss',
})
export class ContadorAnimadoComponent {
  readonly valor = input.required<number>();
  readonly sufijo = input<string>('');
  readonly etiqueta = input.required<string>();
  readonly duracion = input<number>(2000);

  readonly valorActual = signal(0);
  readonly textoValor = computed(() => `${this.valorActual()}${this.sufijo()}`);

  private readonly elementoRef = inject(ElementRef);
  private readonly destruirRef = inject(DestroyRef);
  private observador: IntersectionObserver | null = null;
  private animacionIniciada = false;

  constructor() {
    afterNextRender(() => {
      this.inicializarObservador();
    });
  }

  private inicializarObservador(): void {
    this.observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting && !this.animacionIniciada) {
            this.animacionIniciada = true;
            this.animarContador();
            this.observador?.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );

    this.observador.observe(this.elementoRef.nativeElement);

    this.destruirRef.onDestroy(() => {
      this.observador?.disconnect();
      this.observador = null;
    });
  }

  private animarContador(): void {
    const valorFinal = this.valor();
    const duracionMs = this.duracion();
    const tiempoInicio = performance.now();

    const paso = (tiempoActual: number): void => {
      const progreso = Math.min((tiempoActual - tiempoInicio) / duracionMs, 1);
      const valorEased = this.easeOutCubic(progreso);
      this.valorActual.set(Math.round(valorEased * valorFinal));

      if (progreso < 1) {
        requestAnimationFrame(paso);
      } else {
        this.valorActual.set(valorFinal);
      }
    };

    requestAnimationFrame(paso);
  }

  private easeOutCubic(progreso: number): number {
    return 1 - Math.pow(1 - progreso, 3);
  }
}
