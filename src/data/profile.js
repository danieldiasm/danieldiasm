export const profileData = {
  name: "Daniel",
  shortName: "DANIEL Z. DIAS DE MORAES",
  callsign: "DZDM",
  role: "Senior Software Engineer · Platform & SRE · IoT & Embedded Systems",
  location: "Stockholm, Sweden",
  coordinates: "59.3293° N, 18.0686° E",
  experienceYears: "12+ Years IT // 10+ Years Software Dev",
  status: "AVAILABLE FOR HIGH-IMPACT ARCHITECTURE & ENGINEERING",
  avatarUrl: "./profile.jpg",
  resumePath: "./resume/Daniel_03Nov26_EU-Version.pdf",
  resumeFileName: "Daniel_Zulato_Dias_de_Moraes_Resume_EU.pdf",
  resumeMeta: {
    version: "EU-Version // Nov 2026",
    pages: "4 Pages",
    size: "146 KB",
    format: "PDF / ISO-32000",
    clearance: "PUBLIC DOSSIER",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-zulato-dias-moraes/",
    github: "https://github.com/danieldiasm",
    githubPages: "https://danieldiasm.github.io",
  },
  introHeadline:
    "Bridging Cloud-Native Platform Engineering, Site Reliability & Embedded Systems.",
  introParagraphs: [
    "Seasoned Software Engineer and IT Professional with over 12 years of hands-on industry experience, including more than a decade dedicated to software architecture and development.",
    "After specializing in safety-critical embedded automotive test automation (HIL rigs & ISO-26262 compliance), I transitioned back into core IT Platform Software Engineering, distributed microservices, and infrastructure automation.",
    "I bring a rare multidisciplinary perspective spanning low-level hardware communication protocols, edge device orchestration, cloud-native infrastructure, and cybersecurity awareness. With a deep passion for SRE, IoT, and resilient Web Services, I advocate for technical excellence through clean architecture, Architecture Decision Records (ADRs), and streamlined delivery pipelines.",
  ],
  pillars: [
    {
      code: "AUG-01",
      title: "Platform & Distributed Systems",
      summary:
        "End-to-end platform architecture from initial prototype to hardened production deployment, high-throughput Go & Protocol Buffers microservices, and real-time device orchestration.",
    },
    {
      code: "AUG-02",
      title: "SRE, Cloud & DevOps Automation",
      summary:
        "Infrastructure-as-Code with Terraform/OpenTofu & Ansible, Kubernetes/Docker orchestration, GitLab CI & Buildkite pipelines, and full-stack observability via Prometheus, Grafana & Datadog.",
    },
    {
      code: "AUG-03",
      title: "IoT, Edge & Industrial Protocols",
      summary:
        "Low-latency telemetry & protocol translation across OPC-UA, MQTT, CoAP, Protobuf, CAN, UART, I2C, and TCP/UDP with end-to-end cryptographic hardening for field sensors.",
    },
    {
      code: "AUG-04",
      title: "Embedded & Automotive Systems",
      summary:
        "Hardware-in-the-Loop (HIL) test automation, Yocto & Buildroot Linux distributions, ISO-26262 functional safety risk assessment, and microcontroller firmware (AVR/PIC/TI).",
    },
  ],
  telemetryStats: [
    {
      label: "INDUSTRY TENURE",
      value: "12+ YRS",
      detail: "10+ Yrs Software Engineering",
    },
    {
      label: "PRIMARY STACK",
      value: "GO / PYTHON / C++",
      detail: "Cloud, Edge & Embedded",
    },
    {
      label: "INFRASTRUCTURE",
      value: "AWS / K8S / IaC",
      detail: "Terraform, Ansible, Proxmox",
    },
    {
      label: "HUMAN LANGUAGES",
      value: "3 SPOKEN",
      detail: "PT · EN · IT",
    },
    {
      label: "HUMAN LANGUAGES",
      value: "6 UNDERSTOOD",
      detail: "PT · EN · IT · FR · DE · SV",
    },
  ],
  competencies: [
    {
      id: "prog",
      code: "SYS // 01",
      category: "Programming & Scripting",
      level: 95,
      summary:
        "Strong foundation in data structures, algorithms, concurrency, and systems design patterns across modern and legacy stacks.",
      skills: [
        "Go (Golang)",
        "Python",
        "C / C++",
        "JavaScript / Node-RED",
        "Bash / Shell",
        "Java",
        "C#",
      ],
    },
    {
      id: "cloud",
      code: "SYS // 02",
      category: "Cloud & Infrastructure",
      level: 92,
      summary:
        "Cloud systems architecture, hybrid bare-metal virtualization, cost optimization, and multi-region high-availability design.",
      skills: [
        "AWS (Primary)",
        "Hetzner Cloud",
        "Proxmox VE",
        "Google Cloud (GCP)",
        "Microsoft Azure",
        "System Design",
      ],
    },
    {
      id: "devops",
      code: "SYS // 03",
      category: "DevOps, Delivery & Orchestration",
      level: 94,
      summary:
        "Automated provisioning, immutable infrastructure, container orchestration, and secrets management.",
      skills: [
        "Terraform / OpenTofu",
        "Kubernetes",
        "Docker",
        "Ansible",
        "Helm",
        "HashiCorp Vault",
      ],
    },
    {
      id: "cicd-obs",
      code: "SYS // 04",
      category: "CI/CD & Observability",
      level: 90,
      summary:
        "Automated software delivery pipelines, static analysis gates, and real-time metrics/alerting telemetry.",
      skills: [
        "GitLab CI",
        "Buildkite",
        "AWS Cloud Deploy",
        "Prometheus",
        "Grafana",
        "Datadog",
        "AWS CloudWatch",
        "Jenkins",
      ],
    },
    {
      id: "iot-embedded",
      code: "SYS // 05",
      category: "Embedded, Automotive & Protocols",
      level: 92,
      summary:
        "Industrial & automotive communication protocols, custom embedded Linux images, and HIL rig validation.",
      skills: [
        "OPC-UA",
        "MQTT",
        "CoAP",
        "Protocol Buffers",
        "CAN Bus",
        "Yocto / Buildroot",
        "ISO-26262",
        "Vector CANoe / RT-Rack",
        "AVR / PIC / TI",
        "UART / I2C / SNMP",
      ],
    },
    {
      id: "data-tools",
      code: "SYS // 06",
      category: "Databases, Security & AI Tooling",
      level: 88,
      summary:
        "Relational and time-series data stores, code quality/vulnerability scanning, and local LLM PoC laboratories.",
      skills: [
        "PostgreSQL / TimescaleDB",
        "MySQL",
        "InfluxDB",
        "MongoDB",
        "SonarQube / Mend",
        "Git / Gerrit",
        "Local LLM Labs (Claude / Mistral / OpenCode)",
      ],
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer (Contract)",
      company: "Wittra Networks AB",
      period: "Aug 2026 – Nov 2026",
      location: "Stockholm, Sweden · On-Site",
      tag: "IOT MICROSERVICES // OPC-UA",
      highlights: [
        "Architected and documented the OPC-UA as a Microservice initiative.",
        "Authored Architecture Decision Records (ADRs) and engineering standards aligned with the OPC-UA Foundation specifications.",
        "Prototyped a functional OPC-UA Protocol Translator microservice in Node-RED.",
        "Created standardized blueprint documentation for designing and deploying future microservices.",
      ],
    },
    {
      role: "Platform Engineer",
      company: "BL!XT Tech AB",
      period: "Sep 2024 – Aug 2026",
      location: "Stockholm, Sweden · On-Site",
      tag: "EDGE PLATFORM // GO & PROTOBUF",
      highlights: [
        "Architected and delivered the core product platform from early prototype to production-ready deployment.",
        "Hardened field sensor and control security using end-to-end encryption.",
        "Engineered high-performance protocol translators in Go and Protocol Buffers.",
        "Automated platform deployment and edge computer provisioning to enable rapid fleet scaling.",
        "Conceptualized and built a low-latency, near real-time device orchestration system.",
      ],
    },
    {
      role: "Software Engineer & Test Automation Engineer",
      company: "Volvo Cars Corp. | ALTEN Consulting Services",
      period: "Jun 2022 – Sep 2024",
      location: "Gothenburg, Sweden · On-Site & Hybrid",
      tag: "AUTOMOTIVE HIL // ISO-26262",
      highlights: [
        "Maintained the Firmware Update Tool, improving the delivery pipeline relied upon across multiple engineering teams.",
        "Developed custom test tools and plugins for validation workflows, substantially reducing manual testing overhead.",
        "Optimized automated software testing on Hardware-in-the-Loop (HIL) rigs for consistent, reproducible execution.",
        "Led integration of new hardware test implementations and performed risk assessments for ISO-26262 compliance using Vector and Kvaser tooling.",
      ],
    },
    {
      role: "Senior Site Reliability Engineer (SRE)",
      company: "Trimble Transportation",
      period: "Jun 2021 – May 2022",
      location: "São Paulo, Brazil · Remote (US FedEx Ground Team)",
      tag: "CLOUD SRE // DELIVERY PIPELINES",
      highlights: [
        "Worked embedded with the United States TTM team dedicated to FedEx Ground mission-critical operations.",
        "Maintained and evolved the core Software Delivery System and implemented cloud cost-reduction initiatives.",
        "Integrated automated code quality and security review gates including SonarQube and Mend.",
        "Authored comprehensive operational runbooks and architectural documentation.",
      ],
    },
    {
      role: "Analyst SRE & Issue Tracking Team Leader",
      company: "Smart MEI",
      period: "Oct 2019 – Jun 2021",
      location: "São Paulo, Brazil · On-Site & Hybrid",
      tag: "FINTECH SRE // INCIDENT RESPONSE",
      highlights: [
        "Implemented CI/CD pipelines and supported core SRE, Anti-Fraud, and Central Bank auditing integrations.",
        "Coordinated a software engineering team handling platform incident response and operational tooling.",
      ],
    },
    {
      role: "Embedded Systems Developer (Contractor) & Early Career",
      company:
        "Splice do Brasil Telecom S/A · Fox & Earth GmbH · Star Computer",
      period: "2010 – Aug 2019",
      location: "Brazil",
      tag: "EMBEDDED GO/C++ // SCADA & NETWORKING",
      highlights: [
        "Developed embedded software in Go and C++, co-developing an image streaming subsystem implementing open-source codecs.",
        "Built a strong foundation across network administration, SCADA systems, AVR/PIC microcontrollers, and IT infrastructure.",
      ],
    },
  ],
  education: [
    {
      title: "B.Sc. in Information Technology Management",
      org: "FATEC — Faculdade de Tecnologia de São Paulo",
      year: "2014 – 2017",
    },
    {
      title: "Automotive Functional Safety Course (ISO-26262)",
      org: "Volvo Cars Corp.",
      year: "Nov 2022",
    },
    {
      title: "Digital & Analog Industrial Automation Technician",
      org: "SENAI",
      year: "Jul – Aug 2018",
    },
    {
      title: "Microchip Embedded System Congress",
      org: "Microchip Technology",
      year: "2017 & 2018",
    },
    { title: "Certified Building Electrician", org: "SENAI", year: "Jul 2008" },
  ],
  languages: [
    { name: "Portuguese", level: "Native / C2", pct: 100 },
    { name: "English", level: "Full Professional / C1-C2", pct: 95 },
    { name: "Italian", level: "Conversational / B2", pct: 70 },
    { name: "French", level: "Intermediate / B1", pct: 58 },
    { name: "German", level: "Elementary-Intermediate", pct: 45 },
    { name: "Swedish", level: "Developing / Local", pct: 40 },
  ],
  qualities: [
    "Naturally curious",
    "Documentation-driven",
    "Detail-oriented",
    "Process-oriented",
    "Hardware & system internals explorer",
  ],
};
