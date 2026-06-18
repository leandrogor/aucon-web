import { Component, inject, input, signal } from '@angular/core';
import { ServicioContacto } from '../../../servicios/contacto.service';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.scss',
})
export class FormularioContactoComponent {
  readonly nombrePagina = input.required<string>();
  readonly mostrarCiudad = input<boolean>(false);

  readonly nombre = signal('');
  readonly email = signal('');
  readonly telefono = signal('');
  readonly ciudad = signal('');
  readonly mensaje = signal('');
  readonly enviado = signal(false);
  readonly errores = signal<Record<string, string>>({});

  private readonly servicioContacto = inject(ServicioContacto);

  validarFormulario(): boolean {
    const nuevosErrores: Record<string, string> = {};

    if (!this.nombre().trim()) {
      nuevosErrores['nombre'] = 'El nombre es obligatorio';
    }
    if (!this.email().trim()) {
      nuevosErrores['email'] = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())) {
      nuevosErrores['email'] = 'Ingresá un email válido';
    }
    if (!this.telefono().trim()) {
      nuevosErrores['telefono'] = 'El teléfono es obligatorio';
    }
    if (!this.mensaje().trim()) {
      nuevosErrores['mensaje'] = 'El mensaje es obligatorio';
    }

    this.errores.set(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  enviarFormulario(): void {
    if (!this.validarFormulario()) return;

    this.servicioContacto.enviarConsulta(this.nombrePagina(), {
      nombre: this.nombre(),
      email: this.email(),
      telefono: this.telefono(),
      mensaje: this.mensaje(),
    });

    this.enviado.set(true);
  }
}
