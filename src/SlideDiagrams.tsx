/** Diagramas SVG educativos — referencias visuales sin dependencias externas */

export function DiagramOhmsLaw() {
  return (
    <figure className="diagram diagram--ohm">
      <svg viewBox="0 0 420 228" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ohm-title" role="img">
        <title id="ohm-title">Ley de Ohm: V igual a I por R; triángulo mnemotécnico</title>
        <defs>
          <linearGradient id="ohmFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--arduino)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--arduino-muted)" stopOpacity="0.07" />
          </linearGradient>
        </defs>
        <rect x="24" y="8" width="372" height="44" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="210" y="28" textAnchor="middle" className="diagram-label" fontSize="17" fontWeight="700">
          V = I · R
        </text>
        <text x="210" y="46" textAnchor="middle" className="diagram-muted" fontSize="11">
          Ley de Ohm (unidades: V, A, Ω)
        </text>
        <path
          d="M 210 72 L 68 200 L 352 200 Z"
          fill="url(#ohmFill)"
          stroke="currentColor"
          strokeWidth="2.5"
          className="diagram-stroke"
        />
        <text x="210" y="128" textAnchor="middle" className="diagram-label" fontSize="24" fontWeight="700">
          V
        </text>
        <text x="210" y="150" textAnchor="middle" className="diagram-muted" fontSize="10">
          voltaje
        </text>
        <text x="112" y="188" textAnchor="middle" className="diagram-label" fontSize="24" fontWeight="700">
          I
        </text>
        <text x="112" y="208" textAnchor="middle" className="diagram-muted" fontSize="10">
          corriente
        </text>
        <text x="308" y="188" textAnchor="middle" className="diagram-label" fontSize="24" fontWeight="700">
          R
        </text>
        <text x="308" y="208" textAnchor="middle" className="diagram-muted" fontSize="10">
          resistencia
        </text>
      </svg>
      <figcaption className="diagram-caption">
        Tapando una letra en el triángulo obtienes la fórmula: I = V / R y R = V / I.
      </figcaption>
    </figure>
  )
}

export function DiagramWater() {
  /* Recorrido del fluido: depósito → tubería horizontal → bajada → retorno horizontal → subida → GND */
  const pipePath = 'M 88 92 L 200 92 L 200 172 L 332 172 L 332 92'
  return (
    <figure className="diagram diagram--water">
      <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="water-title" role="img">
        <title id="water-title">Analogía del agua: depósito, tubería, resistencia y retorno a GND</title>
        <defs>
          <linearGradient id="wTank" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5cb3b8" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#00979d" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="wFlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8ed4d8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00979d" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Depósito = presión (voltaje) */}
        <rect x="14" y="38" width="76" height="108" rx="8" fill="url(#wTank)" stroke="currentColor" strokeWidth="2" className="diagram-stroke" />
        <text x="52" y="100" textAnchor="middle" className="diagram-label" fontSize="11">
          Presión
        </text>
        <text x="52" y="118" textAnchor="middle" className="diagram-muted" fontSize="9">
          (voltaje)
        </text>

        {/* Pared exterior de la tubería (forma de “U” con codos redondeados) */}
        <path
          d={pipePath}
          fill="none"
          strokeWidth="26"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="diagram-pipe-outer"
        />
        {/* Agua dentro de la tubería */}
        <path
          d={pipePath}
          fill="none"
          stroke="url(#wFlow)"
          strokeWidth="14"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Tramo más estrecho encima = resistencia (tubería “apretada”) */}
        <path
          d="M 148 92 L 212 92"
          fill="none"
          stroke="#98b0ad"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M 148 92 L 212 92"
          fill="none"
          stroke="url(#wFlow)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <rect x="148" y="72" width="64" height="38" rx="6" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" className="diagram-stroke" />
        <text x="180" y="94" textAnchor="middle" className="diagram-label" fontSize="12" fontWeight="700">
          R
        </text>

        {/* Tubería: flecha de sentido del flujo */}
        <path d="M 118 92 L 132 92 M 126 88 L 132 92 L 126 96" fill="none" stroke="var(--arduino)" strokeWidth="2" strokeLinecap="round" />
        <text x="124" y="78" textAnchor="middle" className="diagram-muted" fontSize="9">
          tubería
        </text>

        {/* GND */}
        <circle cx="332" cy="92" r="24" fill="var(--surface)" stroke="currentColor" strokeWidth="2" className="diagram-stroke" />
        <text x="332" y="96" textAnchor="middle" className="diagram-label" fontSize="11" fontWeight="600">
          GND
        </text>
      </svg>
      <figcaption className="diagram-caption">
        Tubería completa: el agua recorre el circuito como la corriente eléctrica; en R el tubo se estrecha (más
        resistencia). Todo vuelve a referencia (GND).
      </figcaption>
    </figure>
  )
}

export function DiagramBlink() {
  return (
    <figure className="diagram diagram--blink">
      <svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" aria-labelledby="blink-title" role="img">
        <title id="blink-title">Esquema LED: pin digital, resistencia, LED y GND</title>
        <rect x="20" y="50" width="100" height="60" rx="6" fill="var(--surface)" stroke="currentColor" strokeWidth="2" className="diagram-stroke" />
        <text x="70" y="88" textAnchor="middle" className="diagram-label" fontSize="11">
          Pin ~13
        </text>
        <path d="M 125 80 L 170 80" stroke="currentColor" strokeWidth="3" className="diagram-wire" />
        <rect x="170" y="65" width="40" height="30" rx="2" fill="#c4a86e" stroke="currentColor" strokeWidth="1.5" />
        <text x="190" y="84" textAnchor="middle" className="diagram-label" fontSize="9">
          220Ω
        </text>
        <path d="M 215 80 L 250 80" stroke="currentColor" strokeWidth="3" className="diagram-wire" />
        <path d="M 250 65 L 265 80 L 250 95 Z" fill="#f4d03f" stroke="currentColor" strokeWidth="1.5" />
        <line x1="265" y1="72" x2="275" y2="88" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 275 80 L 330 80 L 330 115" stroke="currentColor" strokeWidth="3" className="diagram-wire" />
        <text x="350" y="118" textAnchor="middle" className="diagram-label" fontSize="11">
          GND
        </text>
      </svg>
      <figcaption className="diagram-caption">Resistencia en serie con el LED; cátodo (lado plano del triángulo) hacia GND.</figcaption>
    </figure>
  )
}

export function DiagramLedPolarity() {
  return (
    <figure className="diagram diagram--led">
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" aria-labelledby="led-title" role="img">
        <title id="led-title">LED: ánodo pata larga, cátodo pata corta</title>
        <line x1="40" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="4" className="diagram-wire" />
        <text x="30" y="45" className="diagram-muted" fontSize="9">
          larga +
        </text>
        <path d="M 120 45 L 120 75 L 150 60 Z" fill="#f1c40f" stroke="currentColor" strokeWidth="1.5" />
        <line x1="150" y1="60" x2="220" y2="60" stroke="currentColor" strokeWidth="4" className="diagram-wire" />
        <text x="230" y="45" className="diagram-muted" fontSize="9">
          corta −
        </text>
      </svg>
      <figcaption className="diagram-caption">Pata larga: ánodo (+). Pata corta: cátodo (−).</figcaption>
    </figure>
  )
}

export function DiagramIdeas() {
  return (
    <figure className="diagram diagram--ideas">
      <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g opacity="0.9">
          <rect x="20" y="25" width="100" height="50" rx="8" fill="var(--surface)" stroke="currentColor" strokeWidth="1.5" className="diagram-stroke" />
          <text x="70" y="56" textAnchor="middle" className="diagram-label" fontSize="10">
            Sensores
          </text>
          <path d="M 125 50 L 155 50" stroke="currentColor" strokeWidth="2" markerEnd="url(#arr)" />
          <rect
            x="160"
            y="25"
            width="80"
            height="50"
            rx="8"
            className="diagram-arduino-chip"
            stroke="var(--arduino)"
            strokeWidth="2"
          />
          <text x="200" y="56" textAnchor="middle" className="diagram-label" fontSize="10" fontWeight="600">
            Arduino
          </text>
          <path d="M 245 50 L 275 50" stroke="currentColor" strokeWidth="2" />
          <rect x="280" y="25" width="100" height="50" rx="8" fill="var(--surface)" stroke="currentColor" strokeWidth="1.5" className="diagram-stroke" />
          <text x="330" y="56" textAnchor="middle" className="diagram-label" fontSize="10">
            Actuadores
          </text>
        </g>
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </figure>
  )
}

type Variant = 'ohmsLaw' | 'water' | 'blink' | 'ledPolarity' | 'ideas'

export function SlideDiagram({ variant }: { variant: Variant }) {
  switch (variant) {
    case 'ohmsLaw':
      return <DiagramOhmsLaw />
    case 'water':
      return <DiagramWater />
    case 'blink':
      return <DiagramBlink />
    case 'ledPolarity':
      return <DiagramLedPolarity />
    case 'ideas':
      return <DiagramIdeas />
    default:
      return null
  }
}
