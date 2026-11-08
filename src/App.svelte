<script>
  import GeometricBackdrop from './components/GeometricBackdrop.svelte';
  import Navbar from './components/Navbar.svelte';
  import HeroDossier from './components/HeroDossier.svelte';
  import ProjectsHub from './components/ProjectsHub.svelte';
  import AugmentationsMatrix from './components/AugmentationsMatrix.svelte';
  import ServiceRecord from './components/ServiceRecord.svelte';
  import ResumeVault from './components/ResumeVault.svelte';
  import { profileData } from './data/profile.js';

  let scanlines = $state(true);
</script>

{#if scanlines}
  <div class="scanlines-overlay" aria-hidden="true"></div>
{/if}

<GeometricBackdrop />

<div class="app-shell">
  <Navbar bind:scanlines />

  <main>
    <HeroDossier />
    <ProjectsHub />
    <AugmentationsMatrix />
    <ServiceRecord />
    <ResumeVault />
  </main>

  <footer class="hud-footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-brand">▲ {profileData.name}</span>
        <span class="footer-meta">
          BUILT WITH SVELTE · DEUS EX CYBER-RENAISSANCE INTERFACE · STOCKHOLM, SWEDEN
        </span>
      </div>

      <div class="footer-links">
        <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
        <a href={profileData.links.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
        <a href={profileData.resumePath} download={profileData.resumeFileName}>RESUME PDF ↓</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .app-shell {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  .hud-footer {
    border-top: 1px solid var(--amber-border);
    background: rgba(6, 7, 9, 0.92);
    padding: 2rem 0;
  }

  .footer-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .footer-brand {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--amber-bright);
    letter-spacing: 0.06em;
  }

  .footer-meta {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--text-muted);
    letter-spacing: 0.08em;
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }
</style>
