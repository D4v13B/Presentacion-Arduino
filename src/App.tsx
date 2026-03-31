import { useCallback, useEffect, useState } from 'react'
import { slides } from './slides'
import type { SlideBlock, SlideVisual } from './slides'
import { SlideDiagram } from './SlideDiagrams'
import { useTheme } from './useTheme'
import type { Theme } from './useTheme'
import './App.css'

function Block({ block }: { block: SlideBlock }) {
  switch (block.type) {
    case 'bullets':
      return (
        <ul className="slide-list">
          {block.items.map((item, i) => (
            <li key={item.slice(0, 48)} style={{ animationDelay: `${0.08 + i * 0.06}s` }}>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'cards':
      return (
        <div className="block-cards">
          {block.title ? <h3 className="block-cards__heading">{block.title}</h3> : null}
          <div className="card-grid">
            {block.items.map((c, i) => (
              <article
                key={c.title}
                className="card"
                style={{ animationDelay: `${0.06 * i}s` }}
              >
                <h4 className="card__title">{c.title}</h4>
                <p className="card__body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      )
    case 'twoCol':
      return (
        <div className="two-col">
          <div className="two-col__cell" style={{ animationDelay: '0.05s' }}>
            <h3 className="two-col__title">{block.left.title}</h3>
            <p className="two-col__body">{block.left.body}</p>
          </div>
          <div className="two-col__cell" style={{ animationDelay: '0.12s' }}>
            <h3 className="two-col__title">{block.right.title}</h3>
            <p className="two-col__body">{block.right.body}</p>
          </div>
        </div>
      )
    case 'code':
      return (
        <pre className="slide-code slide-code--pop" tabIndex={0}>
          <code>{block.lines.join('\n')}</code>
        </pre>
      )
    case 'qa':
      return (
        <dl className="qa-list">
          {block.items.map((row, i) => (
            <div key={row.q} className="qa-item" style={{ animationDelay: `${0.08 * i}s` }}>
              <dt className="qa-q">{row.q}</dt>
              <dd className="qa-a">{row.a}</dd>
            </div>
          ))}
        </dl>
      )
    case 'tips':
      return (
        <aside className="tips tips--pop" aria-label="Consejos">
          <ul className="tips__list">
            {block.items.map((t) => (
              <li key={t.slice(0, 40)}>{t}</li>
            ))}
          </ul>
        </aside>
      )
    default:
      return null
  }
}

function VisualBlock({ v }: { v: SlideVisual }) {
  if (v.kind === 'diagram') {
    return (
      <div className="visual-block visual-block--diagram">
        <SlideDiagram variant={v.variant} />
      </div>
    )
  }
  return (
    <figure className="visual-block visual-block--image">
      <div className="visual-block__frame">
        <img src={v.src} alt={v.alt} className="visual-block__img" loading="lazy" decoding="async" />
      </div>
      {v.caption ? <figcaption className="visual-block__caption">{v.caption}</figcaption> : null}
    </figure>
  )
}

function ThemeSwitch({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  return (
    <div className="theme-switch" role="group" aria-label="Tema de la interfaz">
      <button
        type="button"
        className={`theme-switch__btn${theme === 'light' ? ' is-active' : ''}`}
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
      >
        Claro
      </button>
      <button
        type="button"
        className={`theme-switch__btn${theme === 'dark' ? ' is-active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
      >
        Oscuro
      </button>
    </div>
  )
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const [index, setIndex] = useState(0)
  const total = slides.length
  const slide = slides[index]

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => Math.min(total - 1, Math.max(0, i + dir)))
    },
    [total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        go(-1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        setIndex(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        setIndex(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, total])

  return (
    <div className="deck">
      <div className="deck__aurora" aria-hidden="true" />
      <div className="deck__grid" aria-hidden="true" />

      <header className="deck__bar">
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </header>

      <header className="deck__top">
        <p className="deck__section">{slide.section}</p>
        <div
          className="progress"
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Diapositiva ${index + 1} de ${total}`}
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`progress__dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a: ${s.title}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      </header>

      <main className="slide" aria-live="polite" key={slide.id}>
        <div className="slide-panel">
          <h1 className="slide__title">{slide.title}</h1>
          {slide.lead ? <p className="slide__lead">{slide.lead}</p> : null}

          {slide.visuals && slide.visuals.length > 0 ? (
            <div
              className={`slide__visuals${slide.visuals.length > 1 ? ' slide__visuals--multi' : ''}`}
            >
              {slide.visuals.map((v, vi) => (
                <VisualBlock key={`${slide.id}-v-${vi}`} v={v} />
              ))}
            </div>
          ) : null}

          <div className="slide__body">
            {slide.blocks.map((block, bi) => (
              <Block key={bi} block={block} />
            ))}
          </div>
        </div>
      </main>

      <footer className="deck__nav">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Diapositiva anterior"
        >
          Anterior
        </button>
        <span className="deck__counter">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => go(1)}
          disabled={index === total - 1}
          aria-label="Siguiente diapositiva"
        >
          Siguiente
        </button>
      </footer>
    </div>
  )
}
