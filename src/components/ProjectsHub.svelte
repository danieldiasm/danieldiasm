<script>
  import { onMount } from 'svelte';
  import { initialProjects, projectCategories } from '../data/projects.js';

  const STORAGE_KEY = 'dzdm_custom_projects_v1';

  let customProjects = $state([]);
  let selectedCategory = $state('ALL');
  let searchQuery = $state('');
  let showBuilder = $state(false);
  let copiedSnippet = $state(false);

  // Builder form fields
  let formTitle = $state('');
  let formSubtitle = $state('');
  let formCategory = $state('Platform & Cloud');
  let formStatus = $state('LIVE PAGE');
  let formYear = $state('2026');
  let formDesc = $state('');
  let formTech = $state('Go, Docker, Svelte');
  let formPageUrl = $state('https://danieldiasm.github.io/');
  let formRepoUrl = $state('https://github.com/danieldiasm/');
  let formFeatured = $state(true);

  onMount(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        customProjects = JSON.parse(saved);
      }
    } catch {
      customProjects = [];
    }
  });

  let allProjects = $derived([...customProjects, ...initialProjects]);

  let filteredProjects = $derived(
    allProjects.filter((proj) => {
      const matchesCat =
        selectedCategory === 'ALL' || proj.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.subtitle.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    })
  );

  let generatedSnippet = $derived(
    JSON.stringify(
      {
        id: `PRJ-${String(allProjects.length + 1).padStart(2, '0')}`,
        title: formTitle || 'New Project Page',
        subtitle: formSubtitle || 'Architecture & Engineering Showcase',
        category: formCategory,
        status: formStatus,
        year: formYear,
        description:
          formDesc ||
          'Dedicated project page showcasing system design, documentation, and implementation.',
        tech: formTech
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        pageUrl: formPageUrl || 'https://danieldiasm.github.io/',
        repoUrl: formRepoUrl || '',
        featured: formFeatured
      },
      null,
      2
    )
  );

  function addPreviewProject(e) {
    e.preventDefault();
    const newProj = JSON.parse(generatedSnippet);
    newProj.isCustomPreview = true;
    customProjects = [newProj, ...customProjects];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customProjects));
    } catch {}
    formTitle = '';
    formSubtitle = '';
    formDesc = '';
  }

  function removeCustomProject(id) {
    customProjects = customProjects.filter((p) => p.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customProjects));
    } catch {}
  }

  async function copyConfigSnippet() {
    try {
      await navigator.clipboard.writeText(generatedSnippet + ',');
      copiedSnippet = true;
      setTimeout(() => (copiedSnippet = false), 2500);
    } catch {}
  }
</script>

<section id="projects" class="section-block">
  <div class="container">
    <div class="projects-header-row">
      <div class="section-header" style="margin-bottom: 0;">
        <div class="hud-tag">02 // PROJECT PAGES DIRECTORY</div>
        <h2 class="section-title">
          PROJECT <span class="accent">PAGES & LABS</span>
        </h2>
        <p class="section-subtitle">
          Central launchpad pointing to dedicated project pages, architectural case studies, and repositories.
          Add new pages anytime in <code>src/data/projects.js</code> or test them live with the Node Builder.
        </p>
      </div>

      <button
        type="button"
        class="btn-dx btn-dx-secondary"
        onclick={() => (showBuilder = !showBuilder)}
      >
        {showBuilder ? '✕ CLOSE NODE BUILDER' : '+ NEW PROJECT NODE'}
      </button>
    </div>

    <!-- Interactive Project Node Builder Drawer -->
    {#if showBuilder}
      <div class="builder-drawer dx-panel">
        <div class="builder-top">
          <div>
            <span class="hud-tag">SARIF-OS // PROJECT NODE GENERATOR</span>
            <h3>Add or Preview a New Project Page</h3>
            <p class="builder-hint">
              Fill out the fields below to preview your card immediately on this page and generate the config object to paste into
              <code>src/data/projects.js</code>.
            </p>
          </div>
        </div>

        <div class="builder-grid">
          <form class="builder-form" onsubmit={addPreviewProject}>
            <div class="form-row-2">
              <label>
                <span>PROJECT TITLE *</span>
                <input type="text" bind:value={formTitle} placeholder="e.g. Distributed Telemetry Gateway" required />
              </label>
              <label>
                <span>SUBTITLE / TAGLINE</span>
                <input type="text" bind:value={formSubtitle} placeholder="e.g. Go + Protobuf Edge Broker" />
              </label>
            </div>

            <div class="form-row-3">
              <label>
                <span>CATEGORY</span>
                <select bind:value={formCategory}>
                  {#each projectCategories.filter((c) => c !== 'ALL') as cat}
                    <option value={cat}>{cat}</option>
                  {/each}
                </select>
              </label>
              <label>
                <span>STATUS BADGE</span>
                <input type="text" bind:value={formStatus} placeholder="LIVE PAGE" />
              </label>
              <label>
                <span>YEAR</span>
                <input type="text" bind:value={formYear} placeholder="2026" />
              </label>
            </div>

            <label>
              <span>DESCRIPTION</span>
              <textarea rows="2" bind:value={formDesc} placeholder="Brief overview of the project page..."></textarea>
            </label>

            <div class="form-row-2">
              <label>
                <span>PROJECT PAGE URL (Destination Link) *</span>
                <input type="url" bind:value={formPageUrl} placeholder="https://danieldiasm.github.io/my-project" required />
              </label>
              <label>
                <span>GITHUB REPO URL (Optional)</span>
                <input type="url" bind:value={formRepoUrl} placeholder="https://github.com/danieldiasm/my-project" />
              </label>
            </div>

            <label>
              <span>TECH TAGS (Comma-separated)</span>
              <input type="text" bind:value={formTech} placeholder="Go, Kubernetes, MQTT, Svelte" />
            </label>

            <div class="builder-actions">
              <button type="submit" class="btn-dx btn-dx-primary">
                + ADD LIVE PREVIEW CARD
              </button>
              <button type="button" class="btn-dx btn-dx-secondary" onclick={copyConfigSnippet}>
                {copiedSnippet ? '✓ COPIED TO CLIPBOARD!' : '⎘ COPY JSON FOR src/data/projects.js'}
              </button>
            </div>
          </form>

          <div class="snippet-box">
            <div class="snippet-header">
              <span>READY TO PASTE INTO <code>src/data/projects.js</code></span>
            </div>
            <pre class="snippet-code">{generatedSnippet},</pre>
          </div>
        </div>
      </div>
    {/if}

    <!-- Filter & Search Controls -->
    <div class="filter-bar">
      <div class="category-tabs">
        {#each projectCategories as category}
          <button
            type="button"
            class="cat-tab"
            class:active={selectedCategory === category}
            onclick={() => (selectedCategory = category)}
          >
            {category}
          </button>
        {/each}
      </div>

      <div class="search-box">
        <span class="search-icon">⌕</span>
        <input
          type="search"
          bind:value={searchQuery}
          placeholder="Filter by tech, protocol, or title..."
          aria-label="Filter projects"
        />
      </div>
    </div>

    <!-- Project Cards Grid -->
    <div class="projects-grid">
      {#each filteredProjects as project (project.id + project.title)}
        <article class="project-card dx-panel" class:featured={project.featured}>
          <div class="card-top-meta">
            <div class="meta-badges">
              <span class="proj-id">{project.id}</span>
              <span class="proj-cat">{project.category}</span>
              {#if project.featured}
                <span class="proj-featured">★ PRIORITY NODE</span>
              {/if}
            </div>
            <span class="proj-status">{project.status} // {project.year}</span>
          </div>

          <h3 class="proj-title">{project.title}</h3>
          <p class="proj-subtitle">{project.subtitle}</p>
          <p class="proj-desc">{project.description}</p>

          <div class="proj-tech-list">
            {#each project.tech as badge}
              <span class="tech-pill">{badge}</span>
            {/each}
          </div>

          <div class="card-footer-links">
            <a
              href={project.pageUrl}
              target={project.pageUrl.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              class="btn-dx btn-dx-primary btn-sm"
            >
              OPEN PROJECT PAGE ↗
            </a>

            {#if project.repoUrl}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="btn-dx btn-dx-ghost btn-sm"
              >
                SOURCE REPO ↗
              </a>
            {/if}

            {#if project.isCustomPreview}
              <button
                type="button"
                class="btn-remove-preview"
                onclick={() => removeCustomProject(project.id)}
                title="Remove local preview card"
              >
                ✕ REMOVE PREVIEW
              </button>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-header-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 2.25rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: 0.85em;
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.12);
    padding: 0.12rem 0.4rem;
    border: 1px solid rgba(235, 168, 35, 0.25);
  }

  /* Builder Drawer */
  .builder-drawer {
    padding: 1.5rem;
    margin-bottom: 2.25rem;
    clip-path: var(--clip-card);
    border-color: var(--amber-primary);
  }

  .builder-top h3 {
    font-family: var(--font-display);
    font-size: 1.35rem;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .builder-hint {
    color: var(--text-secondary);
    font-size: 0.88rem;
    margin-bottom: 1.25rem;
  }

  .builder-grid {
    display: grid;
    grid-template-columns: 1.35fr 0.85fr;
    gap: 1.5rem;
    align-items: stretch;
  }

  .builder-form {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .form-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
  }

  .form-row-3 {
    display: grid;
    grid-template-columns: 1.2fr 1fr 0.8fr;
    gap: 0.85rem;
  }

  .builder-form label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .builder-form label span {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--amber-primary);
    letter-spacing: 0.08em;
  }

  .builder-form input,
  .builder-form select,
  .builder-form textarea {
    background: rgba(6, 7, 9, 0.85);
    border: 1px solid rgba(235, 168, 35, 0.3);
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 0.88rem;
    padding: 0.55rem 0.75rem;
    outline: none;
  }

  .builder-form input:focus,
  .builder-form select:focus,
  .builder-form textarea:focus {
    border-color: var(--amber-bright);
    box-shadow: 0 0 12px rgba(235, 168, 35, 0.2);
  }

  .builder-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.35rem;
  }

  .snippet-box {
    background: #060709;
    border: 1px solid rgba(235, 168, 35, 0.28);
    display: flex;
    flex-direction: column;
  }

  .snippet-header {
    padding: 0.55rem 0.85rem;
    background: rgba(235, 168, 35, 0.08);
    border-bottom: 1px solid rgba(235, 168, 35, 0.2);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--amber-pale);
  }

  .snippet-code {
    padding: 0.85rem;
    font-family: var(--font-mono);
    font-size: 0.74rem;
    color: var(--amber-bright);
    overflow-x: auto;
    line-height: 1.5;
    flex: 1;
  }

  /* Filter Bar */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.75rem;
  }

  .category-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .cat-tab {
    background: rgba(17, 20, 28, 0.8);
    border: 1px solid rgba(235, 168, 35, 0.22);
    color: var(--text-secondary);
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.48rem 0.95rem;
    cursor: pointer;
    clip-path: var(--clip-btn);
    transition: all 0.2s ease;
  }

  .cat-tab:hover,
  .cat-tab.active {
    background: var(--amber-primary);
    color: #060709;
    border-color: var(--amber-bright);
    font-weight: 700;
    box-shadow: 0 0 16px rgba(235, 168, 35, 0.3);
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(11, 13, 18, 0.9);
    border: 1px solid var(--amber-border);
    padding: 0.42rem 0.85rem;
    min-width: 270px;
  }

  .search-icon {
    color: var(--amber-primary);
    font-size: 1rem;
  }

  .search-box input {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    width: 100%;
    outline: none;
  }

  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 1.35rem;
  }

  .project-card {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    clip-path: var(--clip-card);
  }

  .project-card.featured {
    border-color: rgba(235, 168, 35, 0.48);
    background: linear-gradient(160deg, rgba(25, 29, 40, 0.9) 0%, rgba(14, 17, 24, 0.92) 100%);
  }

  .card-top-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 0.85rem;
    padding-bottom: 0.65rem;
    border-bottom: 1px solid rgba(235, 168, 35, 0.15);
  }

  .meta-badges {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .proj-id {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: #060709;
    background: var(--amber-primary);
    font-weight: 700;
    padding: 0.12rem 0.45rem;
  }

  .proj-cat {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--amber-pale);
    background: rgba(235, 168, 35, 0.1);
    border: 1px solid rgba(235, 168, 35, 0.25);
    padding: 0.1rem 0.45rem;
  }

  .proj-featured {
    font-family: var(--font-mono);
    font-size: 0.64rem;
    color: var(--amber-bright);
  }

  .proj-status {
    font-family: var(--font-mono);
    font-size: 0.66rem;
    color: var(--text-muted);
  }

  .proj-title {
    font-family: var(--font-display);
    font-size: 1.28rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.25;
  }

  .proj-subtitle {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--amber-primary);
    margin-top: 0.25rem;
    margin-bottom: 0.75rem;
  }

  .proj-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
    flex: 1;
    margin-bottom: 1.15rem;
  }

  .proj-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  .tech-pill {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(235, 168, 35, 0.22);
    padding: 0.2rem 0.55rem;
  }

  .card-footer-links {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    padding-top: 0.85rem;
    border-top: 1px dashed rgba(235, 168, 35, 0.18);
  }

  .btn-sm {
    padding: 0.52rem 0.95rem;
    font-size: 0.78rem;
  }

  .btn-remove-preview {
    background: rgba(239, 68, 68, 0.12);
    border: 1px solid rgba(239, 68, 68, 0.45);
    color: #fca5a5;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    padding: 0.42rem 0.65rem;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .builder-grid {
      grid-template-columns: 1fr;
    }
    .form-row-2,
    .form-row-3 {
      grid-template-columns: 1fr;
    }
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
