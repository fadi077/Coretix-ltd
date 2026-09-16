import { COVERAGE_ANSWER } from "../coverage";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  signal: string;
  toolGroups: { title: string; copy: string; tools: string[] }[];
  frameworks: { name: string; copy: string }[];
  deliveryStages: { title: string; copy: string }[];
  problems: { title: string; copy: string }[];
  capabilities: { title: string; copy: string }[];
  deliverables: string[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
};
export const services: Service[] = [
  {
    slug: "managed-it-support",
    name: "Managed IT Support",
    shortName: "Managed support",
    seoTitle: "Managed IT Support for UK Businesses | Coretix Ltd",
    seoDescription:
      "Nationwide managed IT support for UK organisations, covering users, devices, systems and on-site needs, with international remote support available.",
    eyebrow: "Managed IT support",
    headline: "Everyday IT support that keeps work moving.",
    intro:
      "Give your people a clear route to help while improving the reliability, visibility and ownership of the technology behind their work.",
    signal: "Support · stability · accountability",
    toolGroups: [
      {
        title: "Endpoint and identity",
        copy: "Control device setup, access and policy from a known administrative baseline.",
        tools: [
          "Windows 11",
          "Microsoft Intune",
          "Microsoft Entra ID",
          "PowerShell",
        ],
      },
      {
        title: "Support operations",
        copy: "Create a visible route from a user request to ownership, diagnosis and resolution.",
        tools: [
          "Service desk",
          "Remote support",
          "RMM monitoring",
          "Asset inventory",
        ],
      },
      {
        title: "Productivity services",
        copy: "Support the Microsoft services people depend on throughout the working day.",
        tools: [
          "Microsoft 365 Admin",
          "Exchange Online",
          "Microsoft Teams",
          "SharePoint & OneDrive",
        ],
      },
    ],
    frameworks: [
      {
        name: "ITIL-aligned service management",
        copy: "Incident, request, problem and change practices create consistent ownership without forcing unnecessary process onto users.",
      },
      {
        name: "Service catalogue and escalation model",
        copy: "A documented scope defines what is supported, who owns each route and when an issue needs wider technical or supplier escalation.",
      },
      {
        name: "Continual service improvement",
        copy: "Recurring issues, device health and service trends become inputs to a prioritised improvement backlog rather than isolated tickets.",
      },
    ],
    deliveryStages: [
      {
        title: "Baseline",
        copy: "Map users, devices, services, suppliers and current support pressure.",
      },
      {
        title: "Transition",
        copy: "Agree access, escalation, priorities and a controlled handover route.",
      },
      {
        title: "Stabilise",
        copy: "Resolve immediate friction and document recurring or high-impact issues.",
      },
      {
        title: "Improve",
        copy: "Review service evidence and move the technology roadmap forward.",
      },
    ],
    problems: [
      {
        title: "Recurring user issues",
        copy: "Small problems consume productive time when there is no dependable route to resolution.",
      },
      {
        title: "Reactive maintenance",
        copy: "Systems are harder to manage when attention begins only after something has already failed.",
      },
      {
        title: "Unclear ownership",
        copy: "Issues move between suppliers and internal teams without a visible person responsible for the outcome.",
      },
    ],
    capabilities: [
      {
        title: "User and desktop support",
        copy: "Practical help for devices, access, applications and day-to-day technology questions.",
      },
      {
        title: "Proactive system care",
        copy: "Agreed maintenance, monitoring and review designed to reduce avoidable disruption.",
      },
      {
        title: "Technology coordination",
        copy: "Clear ownership across priorities, suppliers, changes and the wider support environment.",
      },
    ],
    deliverables: [
      "Service discovery and environment review",
      "Agreed support scope and escalation routes",
      "Desktop, device and user assistance",
      "Routine maintenance and operational checks",
      "Supplier and technology coordination",
      "Regular review and improvement planning",
    ],
    outcomes: [
      "Faster access to practical help",
      "Less avoidable disruption",
      "Clearer responsibility for issues",
      "A more deliberate support roadmap",
    ],
    faqs: [
      {
        question: "What can managed IT support include?",
        answer:
          "Scope is agreed after discovery and may include user support, device assistance, maintenance, monitoring, supplier coordination and ongoing technology guidance.",
      },
      {
        question: "Can Coretix Ltd work with an internal IT team?",
        answer:
          "A co-managed approach can be explored where responsibilities, access and escalation routes are clearly agreed.",
      },
      {
        question: "Where is remote and on-site support available?",
        answer: COVERAGE_ANSWER,
      },
    ],
  },
  {
    slug: "cloud-microsoft-365",
    name: "Cloud & Microsoft 365",
    shortName: "Cloud & Microsoft 365",
    seoTitle: "Microsoft 365 & Cloud Support UK | Coretix Ltd",
    seoDescription:
      "Microsoft 365 and cloud support for UK organisations, including migration planning, secure configuration, collaboration and ongoing administration.",
    eyebrow: "Cloud and Microsoft 365",
    headline: "Cloud services organised around secure, productive work.",
    intro:
      "Make collaboration simpler and cloud environments easier to govern, from Microsoft 365 configuration to carefully planned migration and improvement.",
    signal: "Collaboration · access · governance",
    toolGroups: [
      {
        title: "Microsoft 365 collaboration",
        copy: "Organise communication, files and teamwork around a controlled Microsoft 365 tenant.",
        tools: [
          "Exchange Online",
          "Microsoft Teams",
          "SharePoint Online",
          "OneDrive",
        ],
      },
      {
        title: "Identity and devices",
        copy: "Connect user identity, access policy and managed endpoints to the cloud operating model.",
        tools: [
          "Microsoft Entra ID",
          "Conditional Access",
          "Microsoft Intune",
          "Windows Autopilot",
        ],
      },
      {
        title: "Azure operations",
        copy: "Build visibility and governance around cloud resources where Azure forms part of the requirement.",
        tools: [
          "Azure Portal",
          "Azure Monitor",
          "Azure Backup",
          "Azure Policy",
        ],
      },
    ],
    frameworks: [
      {
        name: "Microsoft Cloud Adoption Framework",
        copy: "Strategy, planning, readiness, adoption, governance, security and management provide a structured route through cloud change.",
      },
      {
        name: "Azure Well-Architected Framework",
        copy: "Reliability, security, cost, operational excellence and performance are assessed as connected design trade-offs.",
      },
      {
        name: "Zero Trust adoption principles",
        copy: "Identity, devices, applications and data are treated as explicit trust decisions instead of assuming network location is enough.",
      },
    ],
    deliveryStages: [
      {
        title: "Discover",
        copy: "Map tenants, users, licences, data, applications and dependencies.",
      },
      {
        title: "Design",
        copy: "Define identity, information, governance and migration decisions.",
      },
      {
        title: "Pilot",
        copy: "Validate configuration and user workflows with a representative group.",
      },
      {
        title: "Migrate and optimise",
        copy: "Sequence change, support adoption and improve the live environment.",
      },
    ],
    problems: [
      {
        title: "Inconsistent collaboration",
        copy: "Teams lose time when documents, communication and access are spread across disconnected ways of working.",
      },
      {
        title: "Uncontrolled cloud growth",
        copy: "Licences, permissions and services accumulate without enough visibility or ownership.",
      },
      {
        title: "Migration risk",
        copy: "Moving workloads without a practical transition plan can create disruption and confusion for users.",
      },
    ],
    capabilities: [
      {
        title: "Microsoft 365 improvement",
        copy: "Configuration and administration shaped around how teams communicate, collaborate and access information.",
      },
      {
        title: "Cloud migration planning",
        copy: "Assessment, sequencing and user transition designed to protect continuity during change.",
      },
      {
        title: "Access and governance",
        copy: "Practical controls around identity, permissions, devices, licences and ongoing ownership.",
      },
    ],
    deliverables: [
      "Cloud and Microsoft 365 assessment",
      "Migration and transition planning",
      "Tenant and collaboration configuration",
      "Identity and access improvement",
      "Licence and service review",
      "Ongoing administration and optimisation",
    ],
    outcomes: [
      "Simpler collaboration",
      "More consistent cloud access",
      "Clearer permissions and ownership",
      "Better controlled cloud spending",
    ],
    faqs: [
      {
        question: "Can you help move an organisation to Microsoft 365?",
        answer:
          "Migration support can be scoped after reviewing the current environment, data, users, applications and continuity requirements.",
      },
      {
        question: "Do you only support Microsoft cloud services?",
        answer:
          "The current proposition centres on Microsoft 365 and related cloud environments. Exact platform capability should be confirmed during consultation.",
      },
      {
        question: "Can existing Microsoft 365 environments be reviewed?",
        answer:
          "Yes. A review can explore configuration, access, licences, collaboration and practical opportunities for improvement.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    seoTitle: "Practical Cybersecurity Services UK | Coretix Ltd",
    seoDescription:
      "Practical cybersecurity services for growing UK organisations, helping improve risk visibility, access controls, device security and resilience.",
    eyebrow: "Cybersecurity",
    headline: "Security improvement your organisation can understand and use.",
    intro:
      "Turn uncertainty into a proportionate plan that strengthens everyday protection without creating unnecessary friction for the people doing the work.",
    signal: "Risk · resilience · confidence",
    toolGroups: [
      {
        title: "Identity and access",
        copy: "Reduce avoidable account risk through stronger authentication, role control and access policy.",
        tools: [
          "Microsoft Entra ID",
          "Multi-factor authentication",
          "Conditional Access",
          "Privileged roles",
        ],
      },
      {
        title: "Endpoint and email defence",
        copy: "Improve protection where users, devices and everyday communication meet.",
        tools: [
          "Microsoft Defender",
          "Defender for Office 365",
          "Microsoft Intune",
          "Microsoft Secure Score",
        ],
      },
      {
        title: "Evidence and response",
        copy: "Turn technical signals into owned risks, response actions and recoverable operating procedures.",
        tools: [
          "Configuration review",
          "Vulnerability evidence",
          "Security logging",
          "Response playbooks",
        ],
      },
    ],
    frameworks: [
      {
        name: "NCSC Cyber Essentials controls",
        copy: "Firewalls, secure configuration, security updates, user access and malware protection provide a practical UK baseline.",
      },
      {
        name: "NIST Cybersecurity Framework 2.0",
        copy: "Govern, identify, protect, detect, respond and recover connect security action to organisation-wide risk management.",
      },
      {
        name: "Microsoft Zero Trust",
        copy: "Verify explicitly, use least privilege and assume breach when shaping identity, device and application controls.",
      },
    ],
    deliveryStages: [
      {
        title: "Scope",
        copy: "Define the organisation, systems, information and operational priorities in review.",
      },
      {
        title: "Assess",
        copy: "Gather configuration evidence and identify control gaps or risky assumptions.",
      },
      {
        title: "Prioritise",
        copy: "Rank actions by likelihood, operational impact, effort and ownership.",
      },
      {
        title: "Improve and verify",
        copy: "Implement agreed controls and confirm that the intended change is in place.",
      },
    ],
    problems: [
      {
        title: "Unclear exposure",
        copy: "Leaders struggle to prioritise action when technology risks are not visible in operational terms.",
      },
      {
        title: "Inconsistent controls",
        copy: "Access, devices and cloud services can develop gaps as teams, systems and responsibilities change.",
      },
      {
        title: "Security without adoption",
        copy: "Controls provide less protection when they are too complicated or poorly communicated to users.",
      },
    ],
    capabilities: [
      {
        title: "Practical security review",
        copy: "A structured look at people, devices, access, systems and recovery arrangements.",
      },
      {
        title: "Control improvement",
        copy: "Proportionate steps around identity, device protection, configuration and everyday resilience.",
      },
      {
        title: "Clear risk communication",
        copy: "Findings and priorities explained in language decision-makers and users can act on.",
      },
    ],
    deliverables: [
      "Security discovery and risk review",
      "Prioritised improvement roadmap",
      "Identity and access recommendations",
      "Device and configuration hardening",
      "Backup and recovery alignment",
      "User-focused security guidance",
    ],
    outcomes: [
      "Clearer visibility of priority risks",
      "More consistent everyday controls",
      "Better-informed security decisions",
      "Improved operational resilience",
    ],
    faqs: [
      {
        question: "Is this a penetration testing service?",
        answer:
          "Not by default. The service focuses on practical security review and improvement. Specialist testing requirements would need separate scoping and verified capability.",
      },
      {
        question: "Can you guarantee an organisation will not be breached?",
        answer:
          "No provider can responsibly guarantee that. The aim is to reduce avoidable risk and improve prevention, detection, response and recovery arrangements.",
      },
      {
        question: "Where does a cybersecurity review begin?",
        answer:
          "It begins with the organisation, its systems, users, information, current controls and the operational impact of likely risks.",
      },
    ],
  },
  {
    slug: "infrastructure-networks",
    name: "Infrastructure & Networks",
    shortName: "Infrastructure & networks",
    seoTitle: "Business Network & IT Infrastructure UK | Coretix Ltd",
    seoDescription:
      "Nationwide UK network and infrastructure services covering Cisco cabling, connectivity, router installation, equipment deployment and on-site support.",
    eyebrow: "Infrastructure and networks",
    headline:
      "The dependable physical and digital foundation behind your work.",
    intro:
      "Plan, install and improve the connectivity and equipment your users and locations rely on, with delivery designed around live operational environments.",
    signal: "Connectivity · installation · continuity",
    toolGroups: [
      {
        title: "Network edge",
        copy: "Connect sites and users through routing, switching, wireless and controlled perimeter services.",
        tools: [
          "Cisco routing",
          "Cisco switching",
          "Wireless access points",
          "Firewalls & VPN",
        ],
      },
      {
        title: "Physical infrastructure",
        copy: "Install an organised physical layer that can be tested, documented and supported after handover.",
        tools: [
          "Cat6 / Cat6A cabling",
          "Patch panels",
          "Racks and cabinets",
          "Cable test equipment",
        ],
      },
      {
        title: "Diagnostics and visibility",
        copy: "Use configuration and traffic evidence to isolate faults and confirm service health.",
        tools: [
          "Cisco CLI",
          "Configuration backup",
          "Wireshark",
          "SNMP monitoring",
        ],
      },
    ],
    frameworks: [
      {
        name: "Structured cabling principles",
        copy: "Consistent routes, termination, labelling and test evidence make the physical network easier to operate and change.",
      },
      {
        name: "Layered network design",
        copy: "Access, distribution, routing, wireless and security responsibilities are separated so the design remains understandable.",
      },
      {
        name: "Controlled change and handover",
        copy: "Method, access, outage risk, rollback, testing and documentation are agreed before work enters a live site.",
      },
    ],
    deliveryStages: [
      {
        title: "Survey",
        copy: "Inspect the site, existing equipment, pathways, coverage and constraints.",
      },
      {
        title: "Plan",
        copy: "Define topology, materials, addressing, access and the change sequence.",
      },
      {
        title: "Install",
        copy: "Complete cabling and equipment work around the live operating environment.",
      },
      {
        title: "Test and hand over",
        copy: "Validate connectivity, record results and provide usable documentation.",
      },
    ],
    problems: [
      {
        title: "Unreliable connectivity",
        copy: "Intermittent access and poor coverage can affect users, applications and operational systems at once.",
      },
      {
        title: "Unstructured installation",
        copy: "Cabling and equipment become harder to support when site work is undocumented or inconsistent.",
      },
      {
        title: "Disruptive change",
        copy: "Infrastructure work must be coordinated carefully when offices, stores or operational sites remain active.",
      },
    ],
    capabilities: [
      {
        title: "Network installation",
        copy: "Practical Cisco cabling, equipment connection and site delivery for active environments.",
      },
      {
        title: "Router and equipment rollout",
        copy: "Installation, replacement and coordinated deployment across individual or multiple locations.",
      },
      {
        title: "Infrastructure troubleshooting",
        copy: "Hands-on assessment of connectivity, physical equipment and the conditions around the issue.",
      },
    ],
    deliverables: [
      "Site and connectivity assessment",
      "Network and cabling plan",
      "Cisco cable installation",
      "Router and equipment deployment",
      "On-site testing and handover",
      "Documentation and support recommendations",
    ],
    outcomes: [
      "More reliable connectivity",
      "Cleaner infrastructure ownership",
      "Better coordinated site work",
      "A stronger platform for future change",
    ],
    faqs: [
      {
        question: "Do you install Cisco cabling and routers?",
        answer:
          "Coretix Ltd personnel have practical experience with Cisco cabling, router installation and related on-site infrastructure work. Exact equipment and scope are confirmed before delivery.",
      },
      {
        question: "Can work be delivered across multiple sites?",
        answer:
          "Yes. Multi-site work can be delivered across the UK with appropriate planning around locations, access, equipment, engineer scheduling and operational constraints. Remote assistance can also support users and locations internationally where the service requirements are agreed.",
      },
      {
        question: "Will infrastructure work interrupt the business?",
        answer:
          "Any likely disruption should be identified during planning, with sequencing and agreed change windows used where appropriate.",
      },
    ],
  },
  {
    slug: "backup-disaster-recovery",
    name: "Backup & Disaster Recovery",
    shortName: "Backup & recovery",
    seoTitle: "Business Backup & Disaster Recovery UK | Coretix Ltd",
    seoDescription:
      "Backup and disaster recovery planning for UK businesses, helping protect data, clarify recovery priorities and improve operational resilience.",
    eyebrow: "Backup and disaster recovery",
    headline:
      "Recovery planning built around what the business cannot afford to lose.",
    intro:
      "Move beyond simply having backups by clarifying priorities, responsibilities and the practical route back to operation after disruption.",
    signal: "Protection · recovery · readiness",
    toolGroups: [
      {
        title: "Protection platforms",
        copy: "Match backup technology to the systems, data and cloud services the organisation actually depends on.",
        tools: [
          "Azure Backup",
          "Microsoft 365 backup",
          "Veeam environments",
          "Immutable storage",
        ],
      },
      {
        title: "Recovery options",
        copy: "Prepare more than one recovery route for files, applications, servers and complete service interruption.",
        tools: [
          "Recovery vaults",
          "Application-aware backup",
          "Snapshots",
          "System recovery",
        ],
      },
      {
        title: "Assurance and evidence",
        copy: "Monitor protection continuously and prove that priority data can be restored when needed.",
        tools: [
          "Job monitoring",
          "Failure alerting",
          "Restore testing",
          "Recovery runbooks",
        ],
      },
    ],
    frameworks: [
      {
        name: "3-2-1-1-0 protection model",
        copy: "Multiple copies, different media, an off-site copy, an offline or immutable copy and verified zero-error recovery jobs strengthen resilience.",
      },
      {
        name: "RPO and RTO planning",
        copy: "Recovery point and recovery time objectives translate operational priorities into measurable protection and restoration requirements.",
      },
      {
        name: "Business-impact-led recovery",
        copy: "Systems are sequenced by business dependency and tolerable interruption instead of assuming everything recovers at once.",
      },
    ],
    deliveryStages: [
      {
        title: "Discover",
        copy: "Map critical systems, data, dependencies and existing protection.",
      },
      {
        title: "Define recovery",
        copy: "Agree priority tiers, ownership, RPO, RTO and escalation assumptions.",
      },
      {
        title: "Protect",
        copy: "Configure the agreed backup, retention, separation and monitoring approach.",
      },
      {
        title: "Test",
        copy: "Exercise restoration and update runbooks from the evidence gathered.",
      },
    ],
    problems: [
      {
        title: "Backups without assurance",
        copy: "A backup provides limited confidence when restore steps, coverage and responsibilities have not been tested.",
      },
      {
        title: "Unclear recovery priorities",
        copy: "Teams need to know which systems and information matter first when normal operation is interrupted.",
      },
      {
        title: "Plans disconnected from reality",
        copy: "Recovery documentation becomes ineffective when it does not reflect current systems, people and suppliers.",
      },
    ],
    capabilities: [
      {
        title: "Backup environment review",
        copy: "Assessment of what is protected, where it is stored and how restoration is expected to work.",
      },
      {
        title: "Recovery planning",
        copy: "Priorities, dependencies, ownership and practical steps organised around operational need.",
      },
      {
        title: "Readiness improvement",
        copy: "Clearer documentation, testing expectations and follow-up actions to strengthen confidence.",
      },
    ],
    deliverables: [
      "Data and system dependency review",
      "Backup coverage assessment",
      "Recovery priority definition",
      "Documented recovery approach",
      "Restore testing recommendations",
      "Ongoing review and improvement plan",
    ],
    outcomes: [
      "Clearer recovery priorities",
      "Improved confidence in backup coverage",
      "Better-defined responsibilities",
      "Reduced uncertainty during disruption",
    ],
    faqs: [
      {
        question: "Is having a backup enough?",
        answer:
          "A backup is only one part of resilience. Organisations also need appropriate coverage, secure storage, defined restoration steps, ownership and confidence that recovery will work.",
      },
      {
        question: "Can existing backup arrangements be reviewed?",
        answer:
          "Yes. A review can examine coverage, retention, restoration expectations, dependencies and practical gaps.",
      },
      {
        question: "How quickly can systems be recovered?",
        answer:
          "Recovery timing depends on agreed priorities, systems, data volumes, architecture and service arrangements. It must be established during planning rather than assumed.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    shortName: "Software development",
    seoTitle: "Business Software Development UK | Coretix Ltd",
    seoDescription:
      "Purpose-built business software exploration and development for UK organisations with workflows that off-the-shelf tools cannot serve well.",
    eyebrow: "Software development",
    headline:
      "Purpose-built software for the workflow that does not fit the template.",
    intro:
      "Explore focused digital tools that remove manual friction, connect information and support the way your organisation actually operates.",
    signal: "Workflow · integration · improvement",
    toolGroups: [
      {
        title: "Web experience",
        copy: "Build responsive, accessible interfaces that make complex operational work easier to complete.",
        tools: ["Next.js", "React", "TypeScript", "Responsive UI systems"],
      },
      {
        title: "Application and data",
        copy: "Connect workflows to secure business logic, structured data and existing services.",
        tools: [
          "Node.js",
          "REST APIs",
          "PostgreSQL / SQL",
          "Authentication & integrations",
        ],
      },
      {
        title: "Quality and delivery",
        copy: "Keep change reviewable and releases repeatable from source control through production monitoring.",
        tools: [
          "Git & GitHub",
          "CI/CD pipelines",
          "Playwright testing",
          "Logging & monitoring",
        ],
      },
    ],
    frameworks: [
      {
        name: "Iterative product delivery",
        copy: "Discovery, prototypes and small production increments keep user feedback close to scope and investment decisions.",
      },
      {
        name: "OWASP-informed secure development",
        copy: "Authentication, access, input handling, dependency risk and operational security are considered throughout delivery.",
      },
      {
        name: "API-first modular architecture",
        copy: "Clear component and integration boundaries make software easier to test, operate and extend without unnecessary complexity.",
      },
    ],
    deliveryStages: [
      {
        title: "Discover",
        copy: "Map users, workflow, information, constraints and the smallest valuable outcome.",
      },
      {
        title: "Prototype",
        copy: "Make the interaction and technical assumptions visible before full build.",
      },
      {
        title: "Build and test",
        copy: "Deliver reviewable increments with automated and human quality checks.",
      },
      {
        title: "Release and improve",
        copy: "Deploy safely, observe real use and prioritise the next improvement.",
      },
    ],
    problems: [
      {
        title: "Manual workarounds",
        copy: "Repeated spreadsheets, rekeying and disconnected steps consume time and create avoidable errors.",
      },
      {
        title: "Tools that do not fit",
        copy: "Off-the-shelf platforms can force teams around rigid processes that do not match the work.",
      },
      {
        title: "Unclear product scope",
        copy: "Development becomes risky when the user need, priority and smallest useful outcome are not defined first.",
      },
    ],
    capabilities: [
      {
        title: "Workflow discovery",
        copy: "Map the people, decisions, information and friction behind the current process.",
      },
      {
        title: "Product definition",
        copy: "Shape a focused first release with clear users, boundaries and operational value.",
      },
      {
        title: "Iterative delivery",
        copy: "Build, test and improve software in manageable stages with visible feedback and ownership.",
      },
    ],
    deliverables: [
      "Workflow and user discovery",
      "Problem and opportunity definition",
      "Prototype or proof-of-concept planning",
      "Application design and development",
      "Integration exploration",
      "Testing, handover and improvement roadmap",
    ],
    outcomes: [
      "Less repetitive manual work",
      "Better-connected information",
      "Software shaped around real users",
      "A controlled path from idea to delivery",
    ],
    faqs: [
      {
        question: "What types of software can Coretix Ltd build?",
        answer:
          "The proposition focuses on purpose-built business tools and workflow improvement. Specific technology, integration and delivery capability must be confirmed against the requirement.",
      },
      {
        question: "Do you begin with a full application build?",
        answer:
          "Usually the safer first step is discovery and a focused definition of the smallest useful outcome before committing to a larger build.",
      },
      {
        question: "Can existing systems be integrated?",
        answer:
          "Integration feasibility depends on the systems, APIs, permissions, data and security requirements involved and must be assessed during discovery.",
      },
    ],
  },
  {
    slug: "ai-development-automation",
    name: "AI Development & Automation",
    shortName: "AI and automation",
    seoTitle: "AI Development & Automation UK | Coretix Ltd",
    seoDescription:
      "AI development, workflow automation and chatbot solutions for UK businesses, designed around practical processes, data and measurable outcomes.",
    eyebrow: "AI development and automation",
    headline: "Practical AI systems that reduce repetitive work.",
    intro:
      "Design useful AI assistants, business automation and chatbot experiences around the work your team already does.",
    signal: "AI · automation · assistants",
    toolGroups: [
      {
        title: "AI assistants and chatbots",
        copy: "Plan useful conversational experiences for customer service, internal support and knowledge access.",
        tools: ["AI chatbots", "Knowledge assistants", "Prompt and workflow design", "Human handover paths"],
      },
      {
        title: "Business automation",
        copy: "Connect repetitive work across systems so teams spend less time on manual handoffs and data re-entry.",
        tools: ["Workflow automation", "API integrations", "Document and data processing", "Approval workflows"],
      },
      {
        title: "Responsible implementation",
        copy: "Keep AI adoption proportionate with clear ownership, data boundaries, testing and review.",
        tools: ["Use-case assessment", "Data and access review", "Evaluation and testing", "Monitoring and improvement"],
      },
    ],
    frameworks: [
      {
        name: "Outcome-led discovery",
        copy: "Start with the business process, user need and decision to improve before choosing an AI pattern.",
      },
      {
        name: "Human-centred automation",
        copy: "Design clear handoffs, review points and exception paths so people remain accountable for important decisions.",
      },
      {
        name: "Secure data boundaries",
        copy: "Consider permissions, retention, sensitive information and operational ownership as part of the design.",
      },
    ],
    deliveryStages: [
      { title: "Identify the opportunity", copy: "Map the process, friction, data sources and outcome worth improving." },
      { title: "Test the pattern", copy: "Prototype a focused assistant, automation or chatbot workflow against realistic examples." },
      { title: "Integrate carefully", copy: "Connect approved systems, permissions and handoffs with appropriate testing and review." },
      { title: "Improve in use", copy: "Monitor quality, user feedback and exceptions to guide the next safe improvement." },
    ],
    problems: [
      { title: "Repetitive administration", copy: "Teams lose time copying information between inboxes, documents and business systems." },
      { title: "Unanswered questions", copy: "Useful knowledge can be difficult to find when it is spread across files, tools and informal conversations." },
      { title: "AI without an operating model", copy: "Unclear data boundaries, ownership and review can make an otherwise promising AI idea difficult to trust." },
    ],
    capabilities: [
      { title: "AI use-case design", copy: "Translate a business challenge into a focused, testable AI or automation opportunity." },
      { title: "Chatbot and assistant planning", copy: "Shape conversational flows, source content, escalation rules and the user experience around them." },
      { title: "Workflow integration", copy: "Connect automation to the systems, approvals and records that make the process useful in practice." },
    ],
    deliverables: [
      "AI and automation opportunity assessment",
      "Chatbot or assistant conversation design",
      "Workflow and integration map",
      "Data, access and review considerations",
      "Prototype or proof-of-concept plan",
      "Testing and improvement roadmap",
    ],
    outcomes: [
      "Clearer AI investment decisions",
      "Less avoidable manual handling",
      "More accessible business knowledge",
      "A controlled path from experiment to useful service",
    ],
    faqs: [
      {
        question: "What AI services can Coretix Ltd help with?",
        answer: "The service covers practical AI use-case discovery, business automation, chatbot and internal assistant planning, integrations and improvement. The right approach depends on the process, data and outcome involved.",
      },
      {
        question: "Can an AI chatbot connect to our existing systems?",
        answer: "It may be possible where the systems provide suitable APIs, permissions and data access. Integration feasibility and security requirements should be assessed before implementation.",
      },
      {
        question: "How do you keep business AI use responsible?",
        answer: "Start with a defined use case, limit data access, establish human review and test realistic examples. Ongoing ownership and monitoring should be agreed before wider rollout.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web development",
    seoTitle: "Web Development for UK Businesses | Coretix Ltd",
    seoDescription:
      "Web development for UK businesses, from accessible websites to secure web applications, integrations and digital tools built around real workflows.",
    eyebrow: "Web development",
    headline: "Web experiences built to be useful, clear and ready to grow.",
    intro: "Create a professional website, web application or digital workflow that makes it easier for people to find, understand and use your service.",
    signal: "Websites · applications · integrations",
    toolGroups: [
      {
        title: "Websites and content",
        copy: "Build responsive, accessible pages with a clear content structure and a maintainable publishing approach.",
        tools: ["Responsive websites", "Content management", "Accessibility foundations", "SEO-ready page structure"],
      },
      {
        title: "Web applications",
        copy: "Shape digital tools around users, permissions, data and the operational workflow behind the interface.",
        tools: ["Business web apps", "Portals and dashboards", "Secure authentication", "Role-based workflows"],
      },
      {
        title: "Integrations and delivery",
        copy: "Connect approved services and keep releases reviewable, testable and easier to improve over time.",
        tools: ["REST APIs", "Third-party integrations", "Git and CI/CD", "Testing and monitoring"],
      },
    ],
    frameworks: [
      { name: "Content-first planning", copy: "Make the audience, message, structure and conversion path clear before building the interface." },
      { name: "Accessible responsive design", copy: "Treat readable content, keyboard use, responsive layouts and clear interaction as core requirements." },
      { name: "Maintainable delivery", copy: "Prefer understandable components, documented integrations and repeatable release steps over avoidable complexity." },
    ],
    deliveryStages: [
      { title: "Clarify the audience", copy: "Define users, intent, content, workflows and the outcome the web experience needs to support." },
      { title: "Design the structure", copy: "Create the information architecture, key journeys and visual direction before implementation." },
      { title: "Build and test", copy: "Develop responsive pages or application features with quality, accessibility and security checks." },
      { title: "Launch and improve", copy: "Release with an agreed handover and use feedback, analytics and business priorities to guide improvements." },
    ],
    problems: [
      { title: "A website that does not explain the offer", copy: "Visitors struggle to understand who the business helps, what it provides and what to do next." },
      { title: "Disconnected digital work", copy: "Manual exports and duplicated data slow teams down when the website is not connected to the wider workflow." },
      { title: "Hard-to-maintain builds", copy: "Unclear ownership, fragile changes or inaccessible patterns make future improvements unnecessarily risky." },
    ],
    capabilities: [
      { title: "Website and application discovery", copy: "Turn business goals, users and constraints into a focused web brief and delivery path." },
      { title: "Frontend and backend delivery", copy: "Build the interface, business logic, data connections and operational foundations needed for the agreed scope." },
      { title: "Technical SEO foundations", copy: "Support crawlable structure, meaningful metadata, readable content and internal linking as part of the build." },
    ],
    deliverables: [
      "Website or web application discovery",
      "Information architecture and user journeys",
      "Responsive interface design and development",
      "CMS, API or third-party integration planning",
      "Accessibility, performance and quality checks",
      "Launch, handover and improvement roadmap",
    ],
    outcomes: [
      "A clearer digital experience for customers and staff",
      "Better-connected web workflows",
      "More maintainable content and code",
      "A stronger foundation for future digital improvements",
    ],
    faqs: [
      { question: "Can Coretix Ltd build both websites and web applications?", answer: "Yes. The starting point may be a public-facing website, an internal portal, a dashboard or a workflow-focused web application, depending on the requirement." },
      { question: "Will the website be ready for search engines?", answer: "Technical SEO foundations such as crawlable structure, metadata, accessible content and internal linking can be included. Ongoing rankings also depend on content, authority and market competition." },
      { question: "Can a new website connect with existing business tools?", answer: "Integration can be explored where the existing service provides suitable access, documentation and permissions. The data flow and security implications should be defined during discovery." },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile apps",
    seoTitle: "Mobile App Development UK | Coretix Ltd",
    seoDescription:
      "Mobile app development for UK businesses, covering iOS, Android and cross-platform products with secure integrations and a practical release plan.",
    eyebrow: "Mobile app development",
    headline: "Mobile products designed around the moment work happens.",
    intro: "Plan and build a focused mobile application for customers, field teams or internal users, with the data and services needed behind it.",
    signal: "iOS · Android · field workflows",
    toolGroups: [
      {
        title: "Mobile product experience",
        copy: "Shape clear, accessible journeys for the people who need to complete tasks away from a desktop.",
        tools: ["iOS and Android journeys", "Cross-platform planning", "Mobile-first UX", "Offline considerations"],
      },
      {
        title: "Data and integrations",
        copy: "Connect the app to the systems, records and services that make the mobile experience useful.",
        tools: ["API integration", "Secure authentication", "Notifications", "Data synchronisation"],
      },
      {
        title: "Quality and release",
        copy: "Prepare for device variation, testing, release controls and the operational feedback needed after launch.",
        tools: ["Device testing", "App quality checks", "Release planning", "Usage feedback loops"],
      },
    ],
    frameworks: [
      { name: "User and context first", copy: "Design for the environment, connectivity, device and pressure in which the app will actually be used." },
      { name: "Focused first release", copy: "Prioritise the smallest useful mobile experience before expanding scope and operational overhead." },
      { name: "Secure by design", copy: "Consider identity, permissions, sensitive data, API access and release responsibilities throughout delivery." },
    ],
    deliveryStages: [
      { title: "Understand the use case", copy: "Map users, devices, connectivity, tasks, data and the outcome the app should support." },
      { title: "Prototype the journey", copy: "Test the most important mobile flow before committing to a broader product build." },
      { title: "Build and validate", copy: "Implement the agreed experience and integrations, then test across realistic devices and scenarios." },
      { title: "Release and learn", copy: "Plan handover, store or managed distribution, feedback and the next improvement cycle." },
    ],
    problems: [
      { title: "Desktop-only processes", copy: "Field and mobile teams have to delay work or duplicate notes because the right workflow is not available where they are." },
      { title: "Poor mobile experience", copy: "Important tasks become slower when a responsive website is not enough for repeated, on-the-go use." },
      { title: "Unclear app scope", copy: "A large feature list can hide the small number of mobile journeys that would create the most value first." },
    ],
    capabilities: [
      { title: "Mobile product discovery", copy: "Clarify the people, context, devices, journeys and operational constraints before development begins." },
      { title: "App and API delivery", copy: "Build the agreed mobile experience and the secure service connections that support it." },
      { title: "Release readiness", copy: "Create a practical testing, distribution, handover and feedback approach for the first release and beyond." },
    ],
    deliverables: [
      "Mobile app opportunity and user-flow assessment",
      "iOS, Android or cross-platform delivery recommendation",
      "Mobile interface and interaction design",
      "API, authentication and data integration plan",
      "Device, accessibility and quality checks",
      "Release, handover and improvement roadmap",
    ],
    outcomes: [
      "A clearer mobile product direction",
      "Better support for field and on-the-go work",
      "A focused first release scope",
      "More connected mobile workflows",
    ],
    faqs: [
      { question: "Can you build an app for both iOS and Android?", answer: "The delivery approach can be assessed for iOS, Android or cross-platform use based on the users, device requirements, integrations and long-term ownership needs." },
      { question: "Can a mobile app work with our existing business systems?", answer: "It may be possible through suitable APIs and authentication. Existing documentation, data ownership, permissions and security requirements need to be reviewed first." },
      { question: "Do you need a complete app idea before we talk?", answer: "No. A clear description of the users, problem and desired outcome is enough to start discovery and identify a practical first release." },
    ],
  },
];
export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
