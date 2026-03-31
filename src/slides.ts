export type TimelineEntry = {
  period: string
  role: string
  org: string
  body: string
}

export type SlideBlock =
  | { type: 'bullets'; items: string[] }
  | { type: 'cards'; title?: string; items: { title: string; body: string }[] }
  | { type: 'twoCol'; left: { title: string; body: string }; right: { title: string; body: string } }
  | { type: 'code'; lines: string[] }
  | { type: 'qa'; items: { q: string; a: string }[] }
  | { type: 'tips'; items: string[] }
  | {
      type: 'profileTimeline'
      name?: string
      photo: { src: string; alt: string; caption?: string }
      intro: string
      timelineTitle?: string
      entries: TimelineEntry[]
    }

export type SlideVisual =
  | { kind: 'image'; src: string; alt: string; caption?: string }
  | { kind: 'diagram'; variant: 'ohmsLaw' | 'water' | 'blink' | 'ledPolarity' | 'ideas' }

export type Slide = {
  id: string
  section: string
  title: string
  lead?: string
  /** Referencias visuales: fotos en /public o diagramas SVG */
  visuals?: SlideVisual[]
  blocks: SlideBlock[]
}

export const slides: Slide[] = [
  {
    id: 'welcome',
    section: 'Bienvenida',
    title: 'Bienvenidos',
    visuals: [
      {
        kind: 'image',
        src: '/images/RAS.jpeg',
        alt: 'RAS',
      },
    ],
    blocks: [],
  },
  {
    id: 'aboutPresenter',
    section: 'Sobre mí',
    title: 'Sobre mí',
    blocks: [
      {
        type: 'profileTimeline',
        name: 'David Bustamante',
        photo: {
          src: '/yo_david.jpeg',
          alt: 'David Bustamante, profesional de tecnología e IT',
        },
        intro:
          'Analista de IT en Copa Airlines · Panamá. CEO y fundador de Panama Trust Bit Solutions: ERP, SaaS, integraciones y redes.',
        timelineTitle: 'Experiencia',
        entries: [
          {
            period: 'feb. 2026 – actualidad',
            role: 'Analista de IT',
            org: 'Copa Airlines',
            body: 'Panamá · Híbrido. Comunicación, SQL y mejora de procesos con IA.',
          },
          {
            period: 'ene. 2023 – actualidad',
            role: 'CEO y fundador',
            org: 'Panama Trust Bit Solutions',
            body: 'ERP a medida (inventario, logística, facturación con trazabilidad). CRM/chatbot con WhatsApp (Express, TypeScript, React, Gemini). POS multisucursal; integraciones SAP B1, Zoho y Odoo; infra on-prem y cloud, redes LAN/WAN y VPN.',
          },
          {
            period: 'oct. 2025 – feb. 2026',
            role: 'Ingeniero de software',
            org: 'WareLogic Solutions',
            body: 'Híbrido. Liderazgo en WMS, APIs en tiempo real con almacén y ERPs (SAP, Zoho Books), redes LAN e impresoras de etiquetas; menos deuda técnica con flujos colaborativos en Git.',
          },
          {
            period: 'may. 2025 – ago. 2025',
            role: 'Desarrollador Full Stack',
            org: 'Universidad Especializada de Las Américas',
            body: 'Presencial. Infraestructura de software y desarrollo front end.',
          },
          {
            period: 'feb. 2024 – jun. 2025',
            role: 'Desarrollador y gestor de software',
            org: 'Grupo ITEMU',
            body: 'Presencial. Carga internacional, aduanas y facturación; QuickBooks y Zoho Books; apps móviles para logística.',
          },
          {
            period: 'feb. 2022 – actualidad',
            role: 'Diseñador de show de drones y plan de vuelo',
            org: 'Panama Show Time FX',
            body: 'Presencial. Shows con iluminación de drones, figuras en el cielo y logística de vuelo para eventos.',
          },
          {
            period: 'oct. 2022 – nov. 2022',
            role: 'Asistente técnico (mantenimiento y procesos)',
            org: 'Estrella Azul',
            body: 'Práctica profesional · Presencial. Electromecánica y controles eléctricos.',
          },
          {
            period: 'dic. 2021 – abr. 2023',
            role: 'Atención al cliente y ventas',
            org: 'Comercio',
            body: 'Jornada completa. Atención al cliente y liderazgo de equipos.',
          },
        ],
      },
    ],
  },
  {
    id: 'cover',
    section: 'Introducción',
    title: 'Arduino en el mundo real',
    lead: 'De la idea al objeto que se mueve, brilla o siente.',
    visuals: [
      {
        kind: 'image',
        src: '/ArduinoUnoIlustracion.png',
        alt: 'Ilustración de una placa Arduino UNO con conectores y zona del microcontrolador',
        caption: 'Placa tipo UNO: microcontrolador, alimentación y pines de entrada/salida.',
      },
    ],
    blocks: [],
  },
  {
    id: 'hook',
    section: '1. El gancho',
    title: '¿Qué tienen en común un microondas y un cohete?',
    lead: 'La computación no solo ocurre en pantallas: también en objetos que se mueven, brillan o sienten. Eso es computación física.',
    visuals: [{ kind: 'diagram', variant: 'ideas' }],
    blocks: [
      {
        type: 'bullets',
        items: [
          'Arduino no es una “computadora gigante”: es como un interruptor inteligente que toma decisiones según lo que le programamos.',
        ],
      },
    ],
  },
  {
    id: 'water',
    section: '2. Electrónica: el agua',
    title: 'Voltaje, corriente y resistencia',
    lead: 'La ley de Ohm relaciona las tres magnitudes (V, I, R). Después, la analogía del agua ayuda a imaginarlas sin perderse.',
    visuals: [
      { kind: 'diagram', variant: 'ohmsLaw' },
      { kind: 'diagram', variant: 'water' },
    ],
    blocks: [
      {
        type: 'cards',
        items: [
          {
            title: 'Voltaje (presión)',
            body: 'Qué tanta “fuerza” empuja la electricidad, como la presión del agua en una tubería.',
          },
          {
            title: 'Corriente (flujo)',
            body: 'Cuánta electricidad pasa por el cable en un instante: el caudal.',
          },
          {
            title: 'Resistencia (el grifo)',
            body: 'Controlamos cuánto pasa para no “quemar” componentes: como cerrar el grifo un poco.',
          },
          {
            title: 'El circuito',
            body: 'La electricidad tiene que volver a casa: siempre un camino de ida y vuelta (GND o tierra). Sin camino completo, no pasa nada útil.',
          },
        ],
      },
    ],
  },
  {
    id: 'uno',
    section: '3. El protagonista: Arduino UNO',
    title: 'Entradas, cerebro y salidas',
    visuals: [
      {
        kind: 'image',
        src: '/images/arduino-uno-r3.jpg',
        alt: 'Fotografía de una placa Arduino UNO R3 vista desde arriba, con pines y conector USB',
        caption: 'Placa real: identifica alimentación, GND y pines digitales/analógicos.',
      },
      {
        kind: 'image',
        src: '/ARDUINO_UNO_ESQUEMA.png',
        alt: 'Esquema o diagrama de la placa Arduino UNO con zonas y conexiones señaladas',
        caption: 'Referencia visual: partes de la placa y cómo se organizan los pines.',
      },
    ],
    blocks: [
      {
        type: 'cards',
        items: [
          {
            title: 'Entradas (sentidos)',
            body: 'Botones, sensores de luz, de temperatura… el mundo entra aquí.',
          },
          {
            title: 'Cerebro (chip)',
            body: 'Donde vive el código que decide qué hacer.',
          },
          {
            title: 'Salidas (acciones)',
            body: 'LEDs, motores, zumbadores: lo que el Arduino “hace” afuera.',
          },
        ],
      },
      {
        type: 'twoCol',
        left: {
          title: 'Pines digitales',
          body: 'Solo dos estados: encendido o apagado (sí/no).',
        },
        right: {
          title: 'Pines analógicos',
          body: 'Valores intermedios, como subir o bajar el volumen de un radio.',
        },
      },
    ],
  },
  {
    id: 'lab',
    section: '4. El laboratorio',
    title: 'Herramientas básicas',
    visuals: [
      {
        kind: 'image',
        src: '/protoboard.jpg',
        alt: 'Fotografía de una protoboard con filas de contactos y canal central',
        caption: 'Las columnas comparten contacto; el canal divide las dos mitades.',
      },
      { kind: 'diagram', variant: 'ledPolarity' },
    ],
    blocks: [
      {
        type: 'cards',
        items: [
          {
            title: 'Breadboard (protoboard)',
            body: 'Conectar componentes sin soldar: las filas interiores comparten contacto; útil para probar rápido.',
          },
          {
            title: 'El LED',
            body: 'Pata larga y corta no es capricho: indica polaridad. Al revés, no enciende (y a veces ¡eso está bien para aprender!).',
          },
          {
            title: 'Cables jumper',
            body: 'Los puentes que unen Arduino, protoboard y sensores.',
          },
        ],
      },
    ],
  },
  {
    id: 'code',
    section: '5. El código',
    title: 'Hablando con el “robot”',
    lead: 'Sin entrar en detalles de C++: la lógica es lo importante.',
    visuals: [
      {
        kind: 'image',
        src: '/ArduinoUnoIlustracion.png',
        alt: 'Ilustración de placa Arduino UNO R3 para asociar el código con el hardware',
        caption: 'El código define el comportamiento; en esta presentación trabajamos con Arduino UNO R3.',
      },
    ],
    blocks: [
      {
        type: 'twoCol',
        left: {
          title: 'void setup()',
          body: 'Instrucciones que se leen una sola vez al encender: configuración inicial.',
        },
        right: {
          title: 'void loop()',
          body: 'Lo que se repite una y otra vez: el comportamiento continuo.',
        },
      },
      {
        type: 'bullets',
        items: [
          'Ejemplo: setup = “toma una linterna”. Loop = “enciéndela, espera un segundo, apágala, espera un segundo”.',
        ],
      },
    ],
  },
  {
    id: 'blink',
    section: '6. Manos a la obra',
    title: 'El “Hola mundo”: Blink',
    lead: 'Reto: que un LED parpadee. Luego, cambiar tiempos para que parpadee más rápido.',
    visuals: [
      {
        kind: 'image',
        src: '/images/arduino-uno-r3.jpg',
        alt: 'Arduino UNO con LED integrado asociado al pin 13 en muchas revisiones',
        caption: 'Muchas placas UNO llevan un LED de prueba: ideal para el primer Blink sin cables extra.',
      },
      { kind: 'diagram', variant: 'blink' },
    ],
    blocks: [
      {
        type: 'code',
        lines: [
          '// Idea (estructura típica)',
          'void setup() {',
          '  pinMode(LED_BUILTIN, OUTPUT);',
          '}',
          'void loop() {',
          '  digitalWrite(LED_BUILTIN, HIGH);',
          '  delay(1000);',
          '  digitalWrite(LED_BUILTIN, LOW);',
          '  delay(1000);',
          '}',
        ],
      },
      {
        type: 'bullets',
        items: [
          'Diagrama de conexión: pin → resistencia → LED → GND (según tu montaje en protoboard o LED integrado en la placa).',
        ],
      },
    ],
  },
  {
    id: 'inspire',
    section: '7. Inspiración y tips',
    title: '¿Qué sigue después?',
    visuals: [
      {
        kind: 'image',
        src: '/ArduinoUnoIlustracion.png',
        alt: 'Ilustración de placa Arduino como base para proyectos creativos',
        caption: 'De un Blink a proyectos que combinan sensores y actuadores.',
      },
    ],
    blocks: [
      {
        type: 'cards',
        items: [
          {
            title: 'Regador automático',
            body: 'Sensores de humedad y una bombita o válvula.',
          },
          {
            title: 'Carrito que esquiva',
            body: 'Ultrasonido + motores: medir distancia y girar.',
          },
          {
            title: 'Lámpara según el clima',
            body: 'Datos o sensores + LEDs de color para mostrar el estado.',
          },
        ],
      },
      {
        type: 'tips',
        items: [
          'Lleva componentes físicos: tocar sensores y cables ayuda más que cualquier diapositiva.',
          'Cero miedo al error: si un LED no enciende, a menudo solo está al revés.',
          'Tinkercad: simulador gratuito para “ver” la electricidad si no hay material para todos.',
        ],
      },
    ],
  },
  {
    id: 'toolbox',
    section: '7. La caja de herramientas',
    title: 'Nuestros superpoderes',
    visuals: [
      {
        kind: 'image',
        src: '/MATERIALES.png',
        alt: 'Fotografía del kit de materiales: Arduino UNO R3, protoboard, sensores, LEDs, cables y componentes del taller',
        caption: 'Vista del material que armamos en el taller: placa, protoboard, sensores y actuadores.',
      },
    ],
    blocks: [
      {
        type: 'cards',
        title: 'A. Corazón y cuerpo',
        items: [
          {
            title: 'Arduino UNO R3',
            body: 'Placa estándar con USB, alimentación y pines de entrada/salida: el cerebro del kit que usamos en clase.',
          },
          {
            title: 'Protoboard',
            body: 'El patio de juegos: conectar sin pegamento ni soldadura.',
          },
          {
            title: 'Cables M–M',
            body: 'Las “venas” que llevan energía e información de un punto a otro.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'B. Actuadores (lo que hace)',
        items: [
          {
            title: 'LEDs',
            body: 'Luces indicadoras: verde = ok, rojo = alerta, etc.',
          },
          {
            title: 'Buzzer 5 V',
            body: 'La “boca”: pitidos, alarmas, melodías simples.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'C. Sensores (los sentidos)',
        items: [
          {
            title: 'KY-018 (luz)',
            body: 'El “ojo”: día/noche o pasar la mano y cambiar la lectura.',
          },
          {
            title: 'KY-038 (sonido)',
            body: 'El “oído”: aplausos, gritos, ruido ambiental.',
          },
          {
            title: 'HC-SR04 (ultrasonido)',
            body: 'Como un radar: mide distancia con eco.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'D. Protectores',
        items: [
          {
            title: 'Resistencias (220 Ω, 10 kΩ)',
            body: 'Frenan un poco la corriente para no dañar LEDs ni entradas.',
          },
        ],
      },
    ],
  },
  {
    id: 'dynamic',
    section: '8. Dinámica visual',
    title: '¿Qué podemos construir?',
    lead: 'Preguntas rápidas para conectar ideas.',
    blocks: [
      {
        type: 'qa',
        items: [
          {
            q: '¿Alarma de reversa para un carro?',
            a: 'Sensor ultrasónico para la distancia + buzzer que pita al acercarse.',
          },
          {
            q: '¿Lámpara que se enciende sola al oscurecer?',
            a: 'Sensor de luz + LED (o relé para una lámpara grande).',
          },
          {
            q: '¿Interruptor de luces con aplausos?',
            a: 'Sensor de sonido + LED (y umbral en código para no disparar con cualquier ruido).',
          },
        ],
      },
    ],
  },
]
