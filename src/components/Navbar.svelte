<script>
  import { onMount } from 'svelte';
  import { profileData } from '../data/profile.js';

  let { scanlines = $bindable(true), activeSection = 'about' } = $props();

  let stockholmTime = $state('');
  let mobileMenuOpen = $state(false);

  function updateClock() {
    try {
      const now = new Date();
      stockholmTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Stockholm',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
    } catch {
      stockholmTime = new Date().toTimeString().slice(0, 8);
    }
  }

  onMount(() => {
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  });

  const navItems = [
    { id: 'about', code: '01', label: 'DOSSIER' },
    { id: 'projects', code: '02', label: 'PROJECT PAGES' },
    { id: 'augmentations', code: '03', label: 'COMPETENCE' },
    { id: 'experience', code: '04', label: 'SERVICE LOG' },
    { id: 'resume', code: '05', label: 'RESUME PDF' }
  ];
</script>

<header class="hud-navbar">
  <div class="container nav-inner">
    <a href="#about" class="brand-ident">
      <div class="brand-tri">
        <span>▲</span>
      </div>
      <div class="brand-text">
        <span class="brand-name">{profileData.shortName}</span>
        <span class="brand-sub">SYS.HUB // {profileData.location.toUpperCase()} // {stockholmTime} CET</span>
      </div>
    </a>

    <button
      class="mobile-toggle"
      onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      aria-label="Toggle navigation menu"
    >
      {mobileMenuOpen ? '✕ CLOSE' : '☰ HUD MENU'}
    </button>

    <nav class="nav-links" class:open={mobileMenuOpen}>
      {#each navItems as item}
        <a
          href="#{item.id}"
          class="nav-item"
          class:active={activeSection === item.id}
          onclick={() => (mobileMenuOpen = false)}
        >
          <span class="nav-code">{item.code}</span>
          <span class="nav-label">{item.label}</span>
        </a>
      {/each}

      <div class="nav-actions">
        <button
          type="button"
          class="hud-toggle-btn"
          class:active={scanlines}
          onclick={() => (scanlines = !scanlines)}
          title="Toggle CRT Scanline HUD Overlay"
        >
          HUD: {scanlines ? 'ON' : 'OFF'}
        </button>

        <a
          href={profileData.resumePath}
          download={profileData.resumeFileName}
          class="nav-cta"
        >
          ↓ CV PDF
        </a>
      </div>
    </nav>
  </div>
</header>

<style>
  .hud-navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(8, 10, 14, 0.9);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--amber-border);
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.7);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 68px;
    gap: 1rem;
  }

  .brand-ident {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  .brand-tri {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    background: rgba(235, 168, 35, 0.12);
    border: 1px solid var(--amber-primary);
    color: var(--amber-bright);
    font-size: 0.95rem;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    box-shadow: 0 0 14px rgba(235, 168, 35, 0.25);
  }

  .brand-text {
    display: flex;
    flex-direction: column;
  }

  .brand-name {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.98rem;
    letter-spacing: 0.08em;
    color: var(--text-primary);
  }

  .brand-sub {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--amber-primary);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 0.38rem;
    padding: 0.45rem 0.75rem;
    font-family: var(--font-display);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: var(--text-secondary);
    border: 1px solid transparent;
    transition: all 0.2s ease;
  }

  .nav-code {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--amber-muted);
  }

  .nav-item:hover,
  .nav-item.active {
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.08);
    border-color: rgba(235, 168, 35, 0.3);
  }

  .nav-item:hover .nav-code,
  .nav-item.active .nav-code {
    color: var(--amber-bright);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-left: 0.6rem;
    padding-left: 0.8rem;
    border-left: 1px solid rgba(235, 168, 35, 0.2);
  }

  .hud-toggle-btn {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(235, 168, 35, 0.28);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.68rem;
    padding: 0.38rem 0.65rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .hud-toggle-btn.active {
    border-color: var(--amber-primary);
    color: var(--amber-bright);
    background: rgba(235, 168, 35, 0.12);
  }

  .nav-cta {
    background: var(--amber-primary);
    color: #060709;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    padding: 0.42rem 0.85rem;
    clip-path: var(--clip-btn);
  }

  .nav-cta:hover {
    background: var(--amber-bright);
    color: #060709;
    box-shadow: 0 0 16px rgba(235, 168, 35, 0.5);
  }

  .mobile-toggle {
    display: none;
    background: rgba(235, 168, 35, 0.1);
    border: 1px solid var(--amber-primary);
    color: var(--amber-bright);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    padding: 0.45rem 0.75rem;
    cursor: pointer;
  }

  @media (max-width: 980px) {
    .mobile-toggle {
      display: block;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: 68px;
      left: 0;
      right: 0;
      background: rgba(8, 10, 14, 0.98);
      border-bottom: 1px solid var(--amber-primary);
      flex-direction: column;
      align-items: stretch;
      padding: 1rem 1.5rem;
      gap: 0.5rem;
    }

    .nav-links.open {
      display: flex;
    }

    .nav-actions {
      margin-left: 0;
      padding-left: 0;
      padding-top: 0.75rem;
      border-left: none;
      border-top: 1px solid rgba(235, 168, 35, 0.2);
      justify-content: space-between;
    }
  }
</style>
