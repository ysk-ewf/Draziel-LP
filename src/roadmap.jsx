import './roadmap.css'
import { features } from './data'

/* ══════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════ */

function FeatureGroup({ group, icon, items, delay, wide }) {
  return (
    <div
      className="feat-group"
      style={{
        animationDelay: `${delay}s`,
        ...(wide ? { gridColumn: '1 / -1' } : {}),
      }}
    >
      <div className="fg-head">
        <span className="fg-icon">{icon}</span>
        <span className="fg-name">{group}</span>
        <span className="fg-cnt">{items.length} expansões</span>
      </div>
      <ul className="fg-list">
        {items.map((item, i) => (
          <li key={i} className="fg-item">
            <span style={{ color: 'var(--purple)', flexShrink: 0, marginTop: '2px' }}>◦</span>
            <span className="fg-lbl">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ══════════════════════════════════════════
   ROOT COMPONENT
══════════════════════════════════════════ */

export default function DrazielRoadmap() {
  return (
    <div className="page">

      {/* ─── HERO ─────────────────────────────── */}
      <header className="hero">
        <p className="eyebrow">protocol_expansion.log · hawise_universe · v1</p>
        <div className="title-wrap">
          <h1 className="title" data-text="DRAZIEL">DRAZIEL</h1>
        </div>
        <p className="tagline">
          <span className="prompt">&gt;</span>
          SUBJECT: protocol_v1.expansion &nbsp;|&nbsp; STATUS: catalogued
          <span className="cursor" />
        </p>
        <div>
          <span
            className="version"
            style={{
              color: 'var(--purple)',
              background: 'var(--purple-dim)',
              borderColor: 'rgba(139, 92, 246, 0.22)',
            }}
          >
            v1.0 - expansão de protocolo
          </span>
        </div>
        <div className="actions">
          <a href="https://github.com/ysk-ewf/Draziel" className="btn btn-ghost">◈ GitHub</a>
          <div className="platform">
            <span>Windows</span>
            <span className="sep">·</span>
            <span>.NET 10</span>
            <span className="sep">·</span>
            <span>AvaloniaUI</span>
            <span className="sep">·</span>
            <span>C#</span>
          </div>
        </div>
      </header>

      {/* ─── FEATURE BOARD ────────────────────── */}
      <section className="board">
        <p className="s-pre"><span className="slash">// </span>protocol_additions.log</p>
        <h2 className="s-h2">Expansões ao Protocolo - v1</h2>
        <div className="feat-grid">
          {features.map((fg, i) => (
            <FeatureGroup key={i} {...fg} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* ─── LORE ─────────────────────────────── */}
      <section className="lore">
        <p className="s-pre"><span className="slash">// </span>root_profile.log</p>
        <h2 className="s-h2">O que é o Draziel</h2>
        <div className="terminal">
          <div className="t-bar">
            <div className="tdot r" />
            <div className="tdot y" />
            <div className="tdot g" />
            <span className="t-title">draziel_core - root_intake.log</span>
          </div>
          <div className="t-body">
            <p className="t-prompt">
              <span className="cmd">DRAZIEL&gt;</span>{' '}
              <span className="arg">cat root_profile.txt</span>
            </p>
            <div className="t-text">
              <p>
                Assistente de foco para Windows com estética pixel art.
                Reside sobre a camada de exibição do sistema operacional -
                transparente para eventos de entrada, visível para o olho.
                Acompanha sessões de foco ativas. Persiste enquanto você
                trabalha. O arquivo cresce.
              </p>
              <p>
                Rastreia aplicativos em execução e classifica cada processo
                como produtivo, distração ou ignorado. Quando uma distração
                é detectada durante sessão ativa, o protocolo de intervenção
                é acionado - escalando progressivamente do alerta passivo
                à presença direta na tela. O sujeito não define o que é
                distração. O sistema define.
              </p>
              <p>
                Não é um timer genérico. É o Draziel. Auditor do universo
                de Hawise - terror cósmico em forma humanoide. Audita
                realidades. O usuário é mais um sujeito no registro. Toda
                distração é uma anomalia. Toda sessão de foco é um protocolo
                ativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────── */}
      <footer className="footer">
        <div className="foot-l">
          <span className="foot-brand">
            <span className="ic">◈ </span>DRAZIEL
          </span>
          <span className="foot-copy">© Sistema de Auditoria Ativo</span>
          <a href="https://github.com/ysk-ewf/Draziel" className="foot-gh">GitHub</a>
        </div>
        <p className="foot-r">Toda atividade está sendo registrada.</p>
      </footer>

    </div>
  )
}
