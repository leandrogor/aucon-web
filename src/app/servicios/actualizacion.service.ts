import { ApplicationRef, inject, Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicioActualizacion {
  private readonly swUpdate = inject(SwUpdate);
  private readonly appRef = inject(ApplicationRef);

  constructor() {
    if (typeof globalThis !== 'undefined' && this.swUpdate.isEnabled) {
      // Escuchar actualizaciones del Service Worker y recargar directamente sin preguntar
      this.swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe(() => {
          globalThis.location.reload();
        });

      // Comprobar actualizaciones periódicamente cada 6 horas una vez que la app se estabilice
      const appEstable$ = this.appRef.isStable.pipe(first((estable) => estable));
      const cadaSeisHoras$ = interval(6 * 60 * 60 * 1000);
      const programacion$ = concat(appEstable$, cadaSeisHoras$);

      programacion$.subscribe(async () => {
        try {
          await this.swUpdate.checkForUpdate();
        } catch (error) {
          console.warn('Error al verificar actualizaciones:', error);
        }
      });
    }
  }
}
