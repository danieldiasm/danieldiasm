<script>
  import { profileData } from '../data/profile.js';

  let amberVision = $state(true);
</script>

<section id="about" class="section-block hero-section">
  <div class="container">
    <!-- Top Status Banner -->
    <div class="status-strip">
      <div class="status-left">
        <span class="pulse-dot"></span>
        <span class="status-code">NODE // {profileData.callsign}</span>
        <span class="status-divider">|</span>
        <span class="status-msg">{profileData.status}</span>
      </div>
      <div class="status-right">
        <span>LOC: {profileData.location.toUpperCase()} ({profileData.coordinates})</span>
      </div>
    </div>

    <div class="hero-grid">
      <!-- Left Column: Introduction & Executive Summary -->
      <div class="hero-content">
        <div class="hud-tag">01 // EXECUTIVE DOSSIER & INTRODUCTION</div>

        <h1 class="hero-title">
          {profileData.name}
        </h1>

        <p class="hero-role">
          {profileData.role}
        </p>

        <h2 class="hero-headline">
          {profileData.introHeadline}
        </h2>

        <div class="intro-body">
          {#each profileData.introParagraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>

        <!-- Primary Action Controls -->
        <div class="hero-cta-row">
          <a href="#projects" class="btn-dx btn-dx-primary">
            <span>◈</span> EXPLORE PROJECT PAGES
          </a>
          <a href="#resume" class="btn-dx btn-dx-secondary">
            <span>↓</span> RESUME / CV DOSSIER
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dx btn-dx-ghost"
          >
            LINKEDIN ↗
          </a>
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dx btn-dx-ghost"
          >
            GITHUB ↗
          </a>
        </div>

        <!-- Key Telemetry Bar -->
        <div class="telemetry-grid">
          {#each profileData.telemetryStats as stat}
            <div class="telemetry-card dx-panel">
              <span class="t-label">{stat.label}</span>
              <strong class="t-val">{stat.value}</strong>
              <span class="t-detail">{stat.detail}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right Column: Augmented Portrait & Biometric Readout -->
      <aside class="portrait-column">
        <div class="portrait-frame dx-panel">
          <div class="frame-header">
            <span class="mono-sm">OPTIC FEED // SUBJECT_ID: DZDM-89</span>
            <button
              type="button"
              class="optic-toggle"
              onclick={() => (amberVision = !amberVision)}
              title="Toggle Sarif Amber HUD filter vs True Color photo"
            >
              {amberVision ? '◉ AMBER' : '○ TRUE OPTICS'}
            </button>
          </div>

          <div class="portrait-viewport" class:amber-mode={amberVision}>
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              class="portrait-img"
            />
            <div class="reticle-corner tl"></div>
            <div class="reticle-corner tr"></div>
            <div class="reticle-corner bl"></div>
            <div class="reticle-corner br"></div>
            <div class="scan-bar"></div>
          </div>

          <div class="biometric-meta">
            <div class="meta-row">
              <span class="m-key">BASE OF OPERATIONS</span>
              <span class="m-val">{profileData.location}</span>
            </div>
            <div class="meta-row">
              <span class="m-key">EXPERIENCE LOGGED</span>
              <span class="m-val">{profileData.experienceYears}</span>
            </div>
            <div class="meta-row">
              <span class="m-key">SAFETY & STANDARDS</span>
              <span class="m-val">ISO-26262 · OPC-UA · CLOUD</span>
            </div>
            <div class="meta-row">
              <span class="m-key">OPERATIONAL TRAITS</span>
              <span class="m-val">ADR & Documentation-Driven</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Core Engineering Pillars -->
    <div class="pillars-grid">
      {#each profileData.pillars as pillar}
        <article class="pillar-card dx-panel">
          <div class="pillar-top">
            <span class="pillar-code">{pillar.code}</span>
            <span class="pillar-line"></span>
          </div>
          <h3 class="pillar-title">{pillar.title}</h3>
          <p class="pillar-desc">{pillar.summary}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding-top: 3rem;
  }

  .status-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.55rem 1rem;
    margin-bottom: 2.25rem;
    background: rgba(235, 168, 35, 0.06);
    border: 1px solid var(--amber-border);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    color: var(--text-secondary);
  }

  .status-left {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--amber-bright);
    box-shadow: 0 0 10px var(--amber-bright);
    animation: pulseGlow 2.2s infinite ease-in-out;
  }

  @keyframes pulseGlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.85); }
  }

  .status-code {
    color: var(--amber-bright);
    font-weight: 600;
  }

  .status-divider {
    color: var(--amber-muted);
  }

  .status-right {
    color: var(--amber-primary);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.55fr 0.95fr;
    gap: 2.5rem;
    align-items: start;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4.5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--text-primary);
    text-shadow: 0 0 36px rgba(235, 168, 35, 0.22);
  }

  .hero-role {
    margin-top: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--amber-bright);
    letter-spacing: 0.05em;
  }

  .hero-headline {
    margin-top: 1.25rem;
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--amber-pale);
    border-left: 3px solid var(--amber-primary);
    padding-left: 0.9rem;
  }

  .intro-body {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    color: var(--text-secondary);
    font-size: 0.98rem;
    line-height: 1.68;
  }

  .hero-cta-row {
    margin-top: 1.85rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .telemetry-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.85rem;
  }

  .telemetry-card {
    padding: 0.9rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    clip-path: var(--clip-card-sm);
  }

  .t-label {
    font-family: var(--font-mono);
    font-size: 0.64rem;
    letter-spacing: 0.12em;
    color: var(--amber-muted);
  }

  .t-val {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--amber-bright);
  }

  .t-detail {
    font-size: 0.74rem;
    color: var(--text-secondary);
  }

  /* Portrait Frame */
  .portrait-frame {
    padding: 1.15rem;
    clip-path: var(--clip-card);
    background: linear-gradient(165deg, rgba(22, 26, 36, 0.92) 0%, rgba(11, 13, 18, 0.96) 100%);
  }

  .frame-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    padding-bottom: 0.55rem;
    border-bottom: 1px solid rgba(235, 168, 35, 0.2);
  }

  .mono-sm {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--amber-primary);
    letter-spacing: 0.1em;
  }

  .optic-toggle {
    background: rgba(235, 168, 35, 0.12);
    border: 1px solid var(--amber-primary);
    color: var(--amber-pale);
    font-family: var(--font-mono);
    font-size: 0.65rem;
    padding: 0.22rem 0.55rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .optic-toggle:hover {
    background: var(--amber-primary);
    color: #060709;
  }

  .portrait-viewport {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 4.4;
    overflow: hidden;
    background: #08090c;
    border: 1px solid rgba(235, 168, 35, 0.35);
  }

  .portrait-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: filter 0.35s ease, transform 0.35s ease;
  }

  /* Deus Ex Amber Duotone Filter Mode */
  .portrait-viewport.amber-mode .portrait-img {
    filter: sepia(88%) hue-rotate(352deg) saturate(190%) contrast(112%) brightness(0.92);
  }

  .portrait-viewport.amber-mode::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 45%, rgba(6, 7, 9, 0.75) 100%),
                linear-gradient(180deg, rgba(235, 168, 35, 0.08), rgba(6, 7, 9, 0.5));
    pointer-events: none;
  }

  .reticle-corner {
    position: absolute;
    width: 14px;
    height: 14px;
    border-color: var(--amber-bright);
    border-style: solid;
    z-index: 2;
    pointer-events: none;
  }
  .reticle-corner.tl { top: 10px; left: 10px; border-width: 2px 0 0 2px; }
  .reticle-corner.tr { top: 10px; right: 10px; border-width: 2px 2px 0 0; }
  .reticle-corner.bl { bottom: 10px; left: 10px; border-width: 0 0 2px 2px; }
  .reticle-corner.br { bottom: 10px; right: 10px; border-width: 0 2px 2px 0; }

  .scan-bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--amber-bright), transparent);
    opacity: 0.45;
    animation: scanVertical 6s infinite linear;
    z-index: 2;
    pointer-events: none;
  }

  @keyframes scanVertical {
    0% { top: 0%; }
    100% { top: 100%; }
  }

  .biometric-meta {
    margin-top: 0.95rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .meta-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.76rem;
    padding-bottom: 0.35rem;
    border-bottom: 1px dashed rgba(235, 168, 35, 0.16);
  }

  .m-key {
    font-family: var(--font-mono);
    color: var(--text-muted);
    font-size: 0.68rem;
  }

  .m-val {
    color: var(--amber-pale);
    font-weight: 500;
    text-align: right;
  }

  /* Core Engineering Pillars */
  .pillars-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.15rem;
  }

  .pillar-card {
    padding: 1.35rem;
    clip-path: var(--clip-card-sm);
  }

  .pillar-top {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.65rem;
  }

  .pillar-code {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.12);
    padding: 0.15rem 0.5rem;
    border: 1px solid rgba(235, 168, 35, 0.3);
  }

  .pillar-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(235, 168, 35, 0.35), transparent);
  }

  .pillar-title {
    font-family: var(--font-display);
    font-size: 1.08rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .pillar-desc {
    font-size: 0.86rem;
    color: var(--text-secondary);
    line-height: 1.55;
  }

  @media (max-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    .portrait-column {
      max-width: 440px;
    }

    .telemetry-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .pillars-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .telemetry-grid,
    .pillars-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
