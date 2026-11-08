<script>
  import { profileData } from '../data/profile.js';

  let activeNodeId = $state(profileData.competencies[0].id);

  let selectedNode = $derived(
    profileData.competencies.find((c) => c.id === activeNodeId) ||
      profileData.competencies[0]
  );
</script>

<section id="augmentations" class="section-block">
  <div class="container">
    <div class="section-header">
      <div class="hud-tag">03 // TECHNICAL COMPETENCE MATRIX</div>
      <h2 class="section-title">
        SYSTEM <span class="accent">AUGMENTATIONS & STACK</span>
      </h2>
      <p class="section-subtitle">
        Multidisciplinary engineering stack spanning high-concurrency backend microservices, cloud infrastructure, embedded Linux, and industrial/automotive communication protocols.
      </p>
    </div>

    <div class="matrix-layout">
      <!-- Left: Selectable Competence Nodes -->
      <div class="nodes-grid">
        {#each profileData.competencies as comp}
          <button
            type="button"
            class="comp-node dx-panel"
            class:selected={activeNodeId === comp.id}
            onclick={() => (activeNodeId = comp.id)}
          >
            <div class="node-head">
              <span class="node-code">{comp.code}</span>
              <span class="node-pct">{comp.level}% SYNC</span>
            </div>
            <h3 class="node-title">{comp.category}</h3>
            <div class="progress-track">
              <div class="progress-fill" style="width: {comp.level}%"></div>
            </div>
            <div class="node-preview-tags">
              {#each comp.skills.slice(0, 4) as skill}
                <span>{skill}</span>
              {/each}
              {#if comp.skills.length > 4}
                <span>+{comp.skills.length - 4}</span>
              {/if}
            </div>
          </button>
        {/each}
      </div>

      <!-- Right: Detailed Competence Readout -->
      <aside class="inspector-panel dx-panel">
        <div class="inspector-top">
          <span class="hud-tag">DIAGNOSTIC // {selectedNode.code}</span>
          <span class="sync-badge">STATUS: ACTIVE</span>
        </div>

        <h3 class="inspector-title">{selectedNode.category}</h3>
        <p class="inspector-summary">{selectedNode.summary}</p>

        <div class="inspector-divider">
          <span>INSTALLED MODULES & PROTOCOLS</span>
        </div>

        <div class="module-list">
          {#each selectedNode.skills as skill, i}
            <div class="module-item">
              <span class="mod-idx">0{i + 1}</span>
              <span class="mod-name">{skill}</span>
              <span class="mod-status">ONLINE</span>
            </div>
          {/each}
        </div>
      </aside>
    </div>
  </div>
</section>

<style>
  .matrix-layout {
    display: grid;
    grid-template-columns: 1.35fr 0.95fr;
    gap: 1.75rem;
    align-items: start;
  }

  .nodes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .comp-node {
    text-align: left;
    padding: 1.25rem;
    cursor: pointer;
    clip-path: var(--clip-card-sm);
    color: var(--text-primary);
  }

  .comp-node.selected {
    border-color: var(--amber-bright);
    background: linear-gradient(145deg, rgba(235, 168, 35, 0.16) 0%, rgba(17, 20, 28, 0.95) 100%);
    box-shadow: 0 0 24px rgba(235, 168, 35, 0.22);
  }

  .node-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.45rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
  }

  .node-code {
    color: var(--amber-primary);
  }

  .node-pct {
    color: var(--amber-pale);
  }

  .node-title {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.65rem;
    color: var(--text-primary);
  }

  .progress-track {
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
    margin-bottom: 0.75rem;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--amber-deep), var(--amber-bright));
    box-shadow: 0 0 8px var(--amber-primary);
  }

  .node-preview-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .node-preview-tags span {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-secondary);
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(235, 168, 35, 0.18);
    padding: 0.12rem 0.42rem;
  }

  /* Inspector Panel */
  .inspector-panel {
    padding: 1.65rem;
    clip-path: var(--clip-card);
    position: sticky;
    top: 90px;
  }

  .inspector-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .sync-badge {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--amber-bright);
    border: 1px solid rgba(235, 168, 35, 0.35);
    padding: 0.18rem 0.55rem;
    background: rgba(235, 168, 35, 0.1);
  }

  .inspector-title {
    font-family: var(--font-display);
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--amber-bright);
    margin-bottom: 0.55rem;
  }

  .inspector-summary {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.6;
    margin-bottom: 1.35rem;
  }

  .inspector-divider {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    color: var(--amber-primary);
    padding-bottom: 0.45rem;
    margin-bottom: 0.85rem;
    border-bottom: 1px solid rgba(235, 168, 35, 0.25);
  }

  .module-list {
    display: flex;
    flex-direction: column;
    gap: 0.48rem;
  }

  .module-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: rgba(6, 7, 9, 0.65);
    border: 1px solid rgba(235, 168, 35, 0.2);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .mod-idx {
    color: var(--amber-muted);
    font-size: 0.68rem;
  }

  .mod-name {
    flex: 1;
    color: var(--text-primary);
    font-weight: 500;
  }

  .mod-status {
    font-size: 0.64rem;
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.12);
    padding: 0.1rem 0.4rem;
  }

  @media (max-width: 960px) {
    .matrix-layout {
      grid-template-columns: 1fr;
    }
    .inspector-panel {
      position: static;
    }
  }

  @media (max-width: 600px) {
    .nodes-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
