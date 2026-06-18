import { Component, signal } from '@angular/core';

interface ItemFaqLocal {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-seccion-faq',
  standalone: true,
  templateUrl: './seccion-faq.component.html',
  styleUrl: './seccion-faq.component.scss',
})
export class SeccionFaqComponent {
  readonly indiceFaqAbierto = signal<number | null>(null);

  readonly preguntas: ItemFaqLocal[] = [
    {
      pregunta: '¿Qué es la Generación Distribuida?',
      respuesta:
        'La Generación Distribuida es el uso de Fuentes Renovables —sol, viento, agua, biomasa— para generar energía eléctrica destinada al autoconsumo, con posible inyección del excedente a la red de distribución. Los equipos (paneles solares, pequeños aerogeneradores u otras tecnologías) pueden instalarse en industrias, PyMEs y hogares, generando ahorro económico y contribuyendo a la mitigación del cambio climático. El Régimen de Generación Distribuida es una iniciativa del gobierno nacional que establece el marco regulatorio para ello.',
    },
    {
      pregunta:
        '¿Cuál es el beneficio de instalar un equipo de generación distribuida en mi hogar o empresa?',
      respuesta:
        'Mediante la instalación de paneles solares u otras tecnologías, podemos generar energía para consumo propio, reducir nuestra demanda y, eventualmente, inyectar el excedente a la red obteniendo una compensación económica.',
    },
    {
      pregunta: '¿Quién instala el equipo de generación distribuida?',
      respuesta:
        'El equipo conectado a la red deberá ser instalado por un instalador calificado: un profesional con matrícula habilitante en la jurisdicción donde se realice la instalación.',
    },
    {
      pregunta: '¿El panel solar tiene algún mantenimiento?',
      respuesta:
        'Sí. El instalador calificado te informará de los cambios necesarios para poder realizar la instalación del equipo de generación distribuida en tu vivienda, PyME, industria o emprendimiento agroproductivo.',
    },
    {
      pregunta: '¿Cómo está compuesto un equipo de generación distribuida?',
      respuesta:
        'Está compuesto por un Generador de Fuente Renovable (por ejemplo, paneles solares) y un Equipo de Acople a la Red (por ejemplo, un inversor que convierte la corriente continua en corriente alterna).',
    },
    {
      pregunta: '¿La instalación de energía distribuida requiere mantenimiento?',
      respuesta:
        'Sí. Dos veces al año conviene limpiar los paneles con un trapo húmedo para mejorar la eficiencia de captación solar, dado la tierra acumulada y suciedad generada por los animales.',
    },
    {
      pregunta: '¿Cuánto tiempo lleva instalar los paneles solares y cuán complicado es?',
      respuesta:
        'Depende del tamaño de la instalación y el lugar de montaje. Techos planos y de chapa son los más simples. Los inversores se pueden colocar debajo de los paneles sin gabinetes adicionales.',
    },
    {
      pregunta: '¿Cuánto cuesta instalar el sistema de generación?',
      respuesta:
        'El costo varía en base a la complejidad de la instalación física y al estado de la instalación eléctrica (que debe ser certificada). Comunícate con nosotros y te cotizamos.',
    },
  ];

  alternarFaq(indice: number): void {
    this.indiceFaqAbierto.update((actual) => (actual === indice ? null : indice));
  }
}
