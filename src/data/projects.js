/**
 * ============================================================================
 * PROJECT PAGES REGISTRY — src/data/projects.js
 * ============================================================================
 * HOW TO ADD A NEW PROJECT PAGE:
 * 1. Copy one of the project objects inside `initialProjects` below.
 * 2. Paste it at the top of the `initialProjects` array and update the fields:
 *    - `id`:          Unique identifier string (e.g. "PRJ-07")
 *    - `title`:       Project title shown on the card
 *    - `subtitle`:    Short tagline or domain label
 *    - `category`:    One of: "Platform & Cloud" | "IoT & Protocols" | "Embedded & HIL" | "Labs & Open Source"
 *    - `status`:      e.g. "LIVE PAGE", "ACTIVE REPO", "ARCHITECTURE", "PROTOTYPE"
 *    - `year`:        Year or timeframe string (e.g. "2026")
 *    - `description`: 1-3 sentences explaining the project and its impact
 *    - `tech`:        Array of technology badges (e.g. ["Go", "Protobuf", "Docker"])
 *    - `pageUrl`:     URL to your dedicated project page (GitHub Pages URL, live demo, or docs page)
 *    - `repoUrl`:     URL to the GitHub repository (optional — leave "" if private/none)
 *    - `featured`:    true to highlight with a gold priority badge
 *
 * TIP: You can also use the "[ + NEW PROJECT NODE ]" button right on the webpage
 *      to preview a new card visually and generate the exact code snippet!
 * ============================================================================
 */

export const projectCategories = [
  "ALL",
  "Platform & Cloud",
  "IoT & Protocols",
  "Embedded & HIL",
  "Labs & Open Source"
];

export const initialProjects = [
  {
    id: "PRJ-01",
    title: "Low-Latency Edge Orchestration & Protocol Translators",
    subtitle: "High-Throughput Go & Protocol Buffers Platform",
    category: "IoT & Protocols",
    status: "PRODUCTION ARCHITECTURE",
    year: "2024 – 2026",
    description:
      "End-to-end edge device orchestration platform engineered from prototype to production. Features high-performance protocol translators in Go and Protocol Buffers, automated edge provisioning, and end-to-end encrypted field sensor communication.",
    tech: ["Go", "Protocol Buffers", "MQTT", "Edge Linux", "E2E Encryption", "Ansible", "Docker"],
    pageUrl: "https://github.com/danieldiasm",
    repoUrl: "https://github.com/danieldiasm",
    featured: true
  },
  {
    id: "PRJ-02",
    title: "OPC-UA Microservice & Protocol Translator",
    subtitle: "Industrial IoT Interoperability Blueprint",
    category: "IoT & Protocols",
    status: "ARCHITECTURE & PoC",
    year: "2026",
    description:
      "Microservice architecture and functional Node-RED protocol translator aligned with OPC-UA Foundation specifications. Accompanied by full Architecture Decision Records (ADRs) and standardized microservice templates.",
    tech: ["OPC-UA", "Node-RED", "Microservices", "ADRs", "Industrial IoT", "Docker"],
    pageUrl: "https://github.com/danieldiasm",
    repoUrl: "https://github.com/danieldiasm",
    featured: true
  },
  {
    id: "PRJ-03",
    title: "Cloud-Native SRE & Infrastructure Automation Suite",
    subtitle: "Immutable IaC, Observability & Delivery Pipelines",
    category: "Platform & Cloud",
    status: "REFERENCE STACK",
    year: "2021 – 2026",
    description:
      "Modular Infrastructure-as-Code patterns using Terraform/OpenTofu, Ansible, and Kubernetes across AWS, Hetzner, and Proxmox VE. Integrated with Prometheus/Grafana observability and automated GitLab CI / Buildkite security gates.",
    tech: ["Terraform / OpenTofu", "Kubernetes", "AWS", "Proxmox", "Prometheus", "Grafana", "HashiCorp Vault"],
    pageUrl: "https://github.com/danieldiasm",
    repoUrl: "https://github.com/danieldiasm",
    featured: true
  },
  {
    id: "PRJ-04",
    title: "Automotive HIL Validation & Firmware Delivery Tooling",
    subtitle: "ISO-26262 Hardware-in-the-Loop Automation",
    category: "Embedded & HIL",
    status: "ENGINEERING CASE",
    year: "2022 – 2024",
    description:
      "Firmware update delivery pipeline tooling and automated validation plugins for automotive embedded ECUs on Hardware-in-the-Loop (HIL) rigs using Vector CANoe, RT-Rack, and Kvaser interfaces.",
    tech: ["Python", "C/C++", "CAN Bus", "Vector CANoe", "HIL Rigs", "ISO-26262", "Yocto"],
    pageUrl: "https://github.com/danieldiasm",
    repoUrl: "",
    featured: false
  },
  {
    id: "PRJ-05",
    title: "Local AI & Self-Hosted Homelab Laboratory",
    subtitle: "Private Proxmox Cluster & Local LLM PoCs",
    category: "Labs & Open Source",
    status: "ACTIVE LAB",
    year: "2025 – 2026",
    description:
      "Self-hosted engineering laboratory running on Proxmox and Linux for experimenting with local AI-assisted coding workflows, open-weight model deployments, embedded telemetry collectors, and applied cybersecurity.",
    tech: ["Proxmox", "Linux", "Local LLMs", "Go", "Python", "TimescaleDB", "Networking"],
    pageUrl: "https://github.com/danieldiasm",
    repoUrl: "https://github.com/danieldiasm",
    featured: false
  },
  {
    id: "PRJ-06",
    title: "Custom Project Page Slot // Ready to Link",
    subtitle: "Template Node — Edit in src/data/projects.js",
    category: "Labs & Open Source",
    status: "TEMPLATE SLOT",
    year: "2026",
    description:
      "Ready-to-use project card slot! Point `pageUrl` to any GitHub Pages sub-site (e.g., https://danieldiasm.github.io/my-project) or external service, or click '+ NEW PROJECT NODE' above to generate a new card.",
    tech: ["Svelte", "GitHub Pages", "Custom URL", "Documentation"],
    pageUrl: "#projects",
    repoUrl: "https://github.com/danieldiasm",
    featured: false
  }
];
