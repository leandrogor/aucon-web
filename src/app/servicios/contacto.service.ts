import { Injectable } from '@angular/core';
import { CONTACTO_CONFIG } from '../compartido/constantes/contacto.const';

// NOTA: replace with Formspree or serverless function in the future if a backend is added
@Injectable({ providedIn: 'root' })
export class ServicioContacto {
  construirUrlMailto(
    nombrePagina: string,
    datos: { nombre: string; email: string; telefono: string; mensaje: string },
  ): string {
    const asunto = encodeURIComponent(`Consulta desde aucon-web — ${nombrePagina}`);
    const cuerpo = encodeURIComponent(
      `Nombre: ${datos.nombre}\r\nE-mail: ${datos.email}\r\nTeléfono: ${datos.telefono}\r\n\r\n${datos.mensaje}`,
    );
    return `mailto:${CONTACTO_CONFIG.email}?subject=${asunto}&body=${cuerpo}`;
  }

  enviarConsulta(
    nombrePagina: string,
    datos: { nombre: string; email: string; telefono: string; mensaje: string },
  ): void {
    const url = this.construirUrlMailto(nombrePagina, datos);
    window.open(url, '_blank');
  }
}
