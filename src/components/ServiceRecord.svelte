<script>
  import { profileData } from '../data/profile.js';
</script>

<section id="experience" class="section-block">
  <div class="container">
    <div class="section-header">
      <div class="hud-tag">04 // OPERATIONAL SERVICE RECORD</div>
      <h2 class="section-title">
        CAREER <span class="accent">TIMELINE & CREDENTIALS</span>
      </h2>
      <p class="section-subtitle">
        Over a decade of engineering leadership and hands-on delivery across Sweden, the United States (remote), and Brazil.
      </p>
    </div>

    <div class="record-grid">
      <!-- Left: Chronological Experience Timeline -->
      <div class="timeline-col">
        {#each profileData.experience as job, idx}
          <article class="timeline-card dx-panel">
            <div class="tl-marker">
              <span class="tl-num">0{idx + 1}</span>
            </div>
            <div class="tl-body">
              <div class="tl-meta-top">
                <span class="tl-tag">{job.tag}</span>
                <span class="tl-period">{job.period}</span>
              </div>
              <h3 class="tl-role">{job.role}</h3>
              <p class="tl-company">
                <strong>{job.company}</strong> · <span>{job.location}</span>
              </p>
              <ul class="tl-highlights">
                {#each job.highlights as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
          </article>
        {/each}
      </div>

      <!-- Right: Education, Languages & Qualities -->
      <aside class="credentials-col">
        <!-- Education & Certifications -->
        <div class="cred-box dx-panel">
          <div class="hud-tag">ACADEMIC & TECHNICAL TRAINING</div>
          <h3 class="cred-heading">Education & Qualifications</h3>
          <div class="edu-list">
            {#each profileData.education as edu}
              <div class="edu-item">
                <div class="edu-top">
                  <strong>{edu.title}</strong>
                  <span class="edu-year">{edu.year}</span>
                </div>
                <span class="edu-org">{edu.org}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Spoken Languages -->
        <div class="cred-box dx-panel">
          <div class="hud-tag">LINGUISTIC PROTOCOLS</div>
          <h3 class="cred-heading">Spoken Languages</h3>
          <div class="lang-list">
            {#each profileData.languages as lang}
              <div class="lang-item">
                <div class="lang-row">
                  <span class="lang-name">{lang.name}</span>
                  <span class="lang-lvl">{lang.level}</span>
                </div>
                <div class="lang-bar">
                  <div class="lang-fill" style="width: {lang.pct}%"></div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Personal Qualities -->
        <div class="cred-box dx-panel">
          <div class="hud-tag">OPERATOR ATTRIBUTES</div>
          <h3 class="cred-heading">Engineering Ethos</h3>
          <div class="qualities-wrap">
            {#each profileData.qualities as q}
              <span class="quality-badge">◈ {q}</span>
            {/each}
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<style>
  .record-grid {
    display: grid;
    grid-template-columns: 1.45fr 0.9fr;
    gap: 1.75rem;
    align-items: start;
  }

  .timeline-col {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  .timeline-card {
    display: flex;
    gap: 1.1rem;
    padding: 1.4rem;
    clip-path: var(--clip-card);
  }

  .tl-marker {
    flex-shrink: 0;
  }

  .tl-num {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    font-family: var(--font-mono);
    font-size: 0.76rem;
    font-weight: 700;
    color: #060709;
    background: var(--amber-primary);
    clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
  }

  .tl-body {
    flex: 1;
  }

  .tl-meta-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .tl-tag {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.1);
    border: 1px solid rgba(235, 168, 35, 0.25);
    padding: 0.1rem 0.5rem;
  }

  .tl-period {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    color: var(--amber-pale);
  }

  .tl-role {
    font-family: var(--font-display);
    font-size: 1.22rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .tl-company {
    font-size: 0.88rem;
    color: var(--amber-primary);
    margin-top: 0.15rem;
    margin-bottom: 0.75rem;
  }

  .tl-company span {
    color: var(--text-muted);
  }

  .tl-highlights {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.42rem;
  }

  .tl-highlights li {
    position: relative;
    padding-left: 1.1rem;
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.55;
  }

  .tl-highlights li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--amber-primary);
  }

  /* Credentials Column */
  .credentials-col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .cred-box {
    padding: 1.4rem;
    clip-path: var(--clip-card-sm);
  }

  .cred-heading {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .edu-item {
    padding-bottom: 0.65rem;
    border-bottom: 1px dashed rgba(235, 168, 35, 0.16);
  }

  .edu-top {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 0.86rem;
    color: var(--text-primary);
  }

  .edu-year {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--amber-primary);
    white-space: nowrap;
  }

  .edu-org {
    font-size: 0.78rem;
    color: var(--text-secondary);
  }

  /* Languages */
  .lang-list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .lang-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
    margin-bottom: 0.25rem;
  }

  .lang-name {
    font-weight: 600;
    color: var(--text-primary);
  }

  .lang-lvl {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--amber-pale);
  }

  .lang-bar {
    height: 5px;
    background: rgba(255, 255, 255, 0.07);
  }

  .lang-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--amber-deep), var(--amber-bright));
  }

  .qualities-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .quality-badge {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    color: var(--amber-pale);
    background: rgba(235, 168, 35, 0.08);
    border: 1px solid rgba(235, 168, 35, 0.28);
    padding: 0.32rem 0.65rem;
  }

  @media (max-width: 960px) {
    .record-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
