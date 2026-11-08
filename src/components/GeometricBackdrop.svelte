<div class="geo-backdrop" aria-hidden="true">
  <svg class="geo-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="amberLine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#eba823" stop-opacity="0.24" />
        <stop offset="50%" stop-color="#ffc44d" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#eba823" stop-opacity="0.02" />
      </linearGradient>
      <linearGradient id="amberFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#eba823" stop-opacity="0.07" />
        <stop offset="100%" stop-color="#eba823" stop-opacity="0.0" />
      </linearGradient>
      <pattern id="dxGrid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(235, 168, 35, 0.04)" stroke-width="1" />
      </pattern>
    </defs>

    <!-- Subtle Technical Grid -->
    <rect width="1440" height="900" fill="url(#dxGrid)" />

    <!-- Deus Ex Icarus / Cyber-Renaissance Geometric Triangles -->
    <g stroke="url(#amberLine)" stroke-width="1" fill="url(#amberFill)">
      <polygon points="1080,40 1380,190 1160,360" />
      <polygon points="1080,40 1160,360 890,240" />
      <polygon points="890,240 1160,360 980,540" />
      <polygon points="1160,360 1380,190 1420,510" />
      <polygon points="1160,360 1420,510 1190,680" />
      <polygon points="60,120 310,40 240,310" />
      <polygon points="60,120 240,310 20,420" />
      <polygon points="240,310 470,210 380,490" />
    </g>

    <!-- Constellation Nodes -->
    <g fill="#eba823" opacity="0.45">
      <circle cx="1080" cy="40" r="3" />
      <circle cx="1380" cy="190" r="2.5" />
      <circle cx="1160" cy="360" r="3.5" />
      <circle cx="890" cy="240" r="2.5" />
      <circle cx="980" cy="540" r="2" />
      <circle cx="1420" cy="510" r="2.5" />
      <circle cx="310" cy="40" r="2.5" />
      <circle cx="240" cy="310" r="3" />
      <circle cx="470" cy="210" r="2" />
    </g>
  </svg>
</div>

<style>
  .geo-backdrop {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .geo-svg {
    width: 100%;
    height: 100%;
    opacity: 0.85;
  }
</style>
