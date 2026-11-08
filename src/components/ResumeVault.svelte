<script>
  import { profileData } from '../data/profile.js';

  let showInlinePreview = $state(false);
</script>

<section id="resume" class="section-block resume-section">
  <div class="container">
    <div class="section-header">
      <div class="hud-tag">05 // OFFICIAL DOSSIER & CURRICULUM VITAE</div>
      <h2 class="section-title">
        RESUME <span class="accent">DOWNLOAD VAULT</span>
      </h2>
      <p class="section-subtitle">
        Download the complete EU-format Curriculum Vitae (PDF) with full employment history, technical competencies, education, and language proficiencies.
      </p>
    </div>

    <div class="vault-card dx-panel">
      <div class="vault-grid">
        <!-- Left: Document Telemetry & Description -->
        <div class="vault-info">
          <div class="doc-badge-row">
            <span class="doc-status">● VERIFIED PDF ARCHIVE</span>
            <span class="doc-ver">{profileData.resumeMeta.version}</span>
          </div>

          <h3 class="vault-title">
            {profileData.name} — Curriculum Vitae (EU Version)
          </h3>

          <p class="vault-desc">
            Ready for offline review, ATS parsing, and technical evaluation. Includes detailed accomplishments across Wittra Networks AB, BL!XT Tech AB, Volvo Cars Corp., Trimble Transportation, and earlier SRE & Embedded Engineering roles.
          </p>

          <div class="doc-specs">
            <div class="spec-cell">
              <span class="s-key">FILE NAME</span>
              <span class="s-val">Daniel_03Nov26_EU-Version.pdf</span>
            </div>
            <div class="spec-cell">
              <span class="s-key">DOCUMENT LENGTH</span>
              <span class="s-val">{profileData.resumeMeta.pages} ({profileData.resumeMeta.size})</span>
            </div>
            <div class="spec-cell">
              <span class="s-key">FORMAT STANDARD</span>
              <span class="s-val">{profileData.resumeMeta.format}</span>
            </div>
            <div class="spec-cell">
              <span class="s-key">CLEARANCE</span>
              <span class="s-val">{profileData.resumeMeta.clearance}</span>
            </div>
          </div>
        </div>

        <!-- Right: Primary Download Actions -->
        <div class="vault-actions-box">
          <div class="pdf-emblem">
            <span class="emblem-tri">▲</span>
            <span class="emblem-lbl">PDF // CV</span>
          </div>

          <a
            href={profileData.resumePath}
            download={profileData.resumeFileName}
            class="btn-dx btn-dx-primary btn-full"
          >
            ↓ DOWNLOAD RESUME (PDF)
          </a>

          <a
            href={profileData.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dx btn-dx-secondary btn-full"
          >
            ↗ OPEN PDF IN NEW TAB
          </a>

          <button
            type="button"
            class="btn-dx btn-dx-ghost btn-full"
            onclick={() => (showInlinePreview = !showInlinePreview)}
          >
            {showInlinePreview ? '✕ HIDE INLINE HUD VIEWER' : '◈ PREVIEW RESUME INLINE'}
          </button>
        </div>
      </div>

      {#if showInlinePreview}
        <div class="inline-pdf-viewer">
          <div class="viewer-bar">
            <span>SARIF-OS // EMBEDDED DOCUMENT STREAM // {profileData.resumeFileName}</span>
            <a href={profileData.resumePath} download={profileData.resumeFileName}>
              [ DIRECT DOWNLOAD ]
            </a>
          </div>
          <iframe
            src={profileData.resumePath}
            title="Daniel Zulato Dias de Moraes Resume PDF"
            class="pdf-frame"
          ></iframe>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .vault-card {
    padding: 2.25rem;
    clip-path: var(--clip-card);
    background: linear-gradient(145deg, rgba(24, 28, 39, 0.92) 0%, rgba(10, 12, 17, 0.96) 100%);
    border-color: var(--amber-border-strong);
  }

  .vault-grid {
    display: grid;
    grid-template-columns: 1.55fr 0.85fr;
    gap: 2.25rem;
    align-items: center;
  }

  .doc-badge-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
  }

  .doc-status {
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.12);
    border: 1px solid rgba(235, 168, 35, 0.35);
    padding: 0.18rem 0.6rem;
  }

  .doc-ver {
    color: var(--text-muted);
  }

  .vault-title {
    font-family: var(--font-display);
    font-size: clamp(1.45rem, 2.5vw, 1.95rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.7rem;
  }

  .vault-desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }

  .doc-specs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .spec-cell {
    background: rgba(6, 7, 9, 0.7);
    border: 1px solid rgba(235, 168, 35, 0.2);
    padding: 0.65rem 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .s-key {
    font-family: var(--font-mono);
    font-size: 0.64rem;
    color: var(--amber-muted);
    letter-spacing: 0.1em;
  }

  .s-val {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--amber-pale);
  }

  .vault-actions-box {
    background: rgba(6, 7, 9, 0.82);
    border: 1px solid rgba(235, 168, 35, 0.32);
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    clip-path: var(--clip-card-sm);
  }

  .pdf-emblem {
    width: 68px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(235, 168, 35, 0.12);
    border: 1px solid var(--amber-primary);
    margin-bottom: 0.4rem;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    box-shadow: 0 0 24px rgba(235, 168, 35, 0.25);
  }

  .emblem-tri {
    color: var(--amber-bright);
    font-size: 1.15rem;
    line-height: 1;
  }

  .emblem-lbl {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    color: var(--amber-pale);
    margin-top: 0.15rem;
  }

  .btn-full {
    width: 100%;
  }

  /* Inline PDF Viewer */
  .inline-pdf-viewer {
    margin-top: 1.75rem;
    border: 1px solid var(--amber-primary);
    background: #060709;
  }

  .viewer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(235, 168, 35, 0.12);
    border-bottom: 1px solid rgba(235, 168, 35, 0.3);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--amber-pale);
  }

  .pdf-frame {
    width: 100%;
    height: 680px;
    border: none;
    display: block;
  }

  @media (max-width: 900px) {
    .vault-grid {
      grid-template-columns: 1fr;
    }
    .doc-specs {
      grid-template-columns: 1fr;
    }
  }
</style>
