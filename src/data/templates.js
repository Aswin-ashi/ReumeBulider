// Copyright 2026 ResumeBuilder | Apache License 2.0

export const A4_WIDTH = 794;
export const A4_HEIGHT = 1123;

export const DEFAULT_TEXT = {
    type: 'text', text: 'Click to edit',
    x: 100, y: 100, width: 300,
    fontSize: 14, fontFamily: 'Arial',
    fontWeight: 'normal', fontStyle: 'normal',
    textDecoration: 'none', textAlign: 'left',
    color: '#000000', lineHeight: 1.4,
    letterSpacing: 0, opacity: 1, visible: true,
};

// Metadata helpers
export const PROFESSION_COLORS = {
    it: { accent: '#7c3aed', glow: 'rgba(124,58,237,0.25)', badge: '💻 IT' },
    hr: { accent: '#0ea5e9', glow: 'rgba(14,165,233,0.25)', badge: '👥 HR' },
    business: { accent: '#f59e0b', glow: 'rgba(245,158,11,0.25)', badge: '📊 Business' },
    universal: { accent: '#22c55e', glow: 'rgba(34,197,94,0.25)', badge: '📄 Universal' },
};

export const FORMAT_LABELS = {
    chronological: 'Chronological',
    functional: 'Functional',
    combination: 'Combination',
};

export const DESIGN_LABELS = {
    creative: 'Creative',
    corporate: 'Corporate',
    minimal: 'Minimal',
};

export const ATS_TEMPLATES = [
    { id: 'blank', name: 'Create Blank', elements: [], format: 'chronological', profession: 'universal', design: 'minimal' },
    {
        id: 'ats-classic', name: 'ATS Classic',
        format: 'chronological', profession: 'universal', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 't1', text: 'JOHN DOE', x: A4_WIDTH / 2 - 150, y: 48, width: 300, fontSize: 32, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Times New Roman', color: '#111' },
            { ...DEFAULT_TEXT, id: 't2', text: 'john.doe@email.com  |  (555) 123-4567  |  New York, NY', x: 50, y: 92, width: A4_WIDTH - 100, fontSize: 11, textAlign: 'center', fontFamily: 'Times New Roman', color: '#333' },
            { ...DEFAULT_TEXT, id: 't3', text: 'PROFESSIONAL SUMMARY', x: 50, y: 135, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Times New Roman', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: 't4', text: 'Results-driven professional with 5+ years of experience in project management and cross-functional team leadership. Proven track record of delivering complex projects on time and under budget.', x: 50, y: 158, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Times New Roman', color: '#222' },
            { ...DEFAULT_TEXT, id: 't5', text: 'EXPERIENCE', x: 50, y: 218, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Times New Roman', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: 't6', text: 'Senior Project Manager', x: 50, y: 242, width: 300, fontSize: 12, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#111' },
            { ...DEFAULT_TEXT, id: 't7', text: 'ABC Corporation, New York', x: 50, y: 260, width: 300, fontSize: 11, fontFamily: 'Times New Roman', color: '#444' },
            { ...DEFAULT_TEXT, id: 't8', text: 'Jan 2020 – Present', x: A4_WIDTH - 220, y: 242, width: 170, fontSize: 11, textAlign: 'right', fontFamily: 'Times New Roman', color: '#444' },
            { ...DEFAULT_TEXT, id: 't9', text: '• Led cross-functional teams of 15+ members across agile sprints\n• Improved sprint velocity by 20% via process optimization\n• Managed $2M+ project budgets with zero overruns', x: 68, y: 282, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Times New Roman', color: '#222' },
            { ...DEFAULT_TEXT, id: 't10', text: 'EDUCATION', x: 50, y: 370, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Times New Roman', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: 't11', text: 'B.S. in Computer Science', x: 50, y: 394, width: 300, fontSize: 12, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#111' },
            { ...DEFAULT_TEXT, id: 't12', text: 'State University, 2018', x: 50, y: 412, width: 300, fontSize: 11, fontFamily: 'Times New Roman', color: '#444' },
            { ...DEFAULT_TEXT, id: 't13', text: 'SKILLS', x: 50, y: 454, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Times New Roman', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: 't14', text: 'Project Management  •  Agile/Scrum  •  Risk Analysis  •  MS Project  •  Jira  •  Slack  •  Python  •  SQL', x: 50, y: 478, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Times New Roman', color: '#222' },
        ]
    },
    {
        id: 'ats-modern', name: 'Modern Clean',
        format: 'chronological', profession: 'it', design: 'creative',
        elements: [
            { ...DEFAULT_TEXT, id: 'm1', text: 'JANE SMITH', x: 50, y: 50, width: 420, fontSize: 38, fontWeight: '800', fontFamily: 'Arial', color: '#1e1b4b' },
            { ...DEFAULT_TEXT, id: 'm2', text: 'Software Engineer', x: 50, y: 100, width: 400, fontSize: 18, fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'm3', text: 'jane@email.com  ·  +1 (555) 987-6543  ·  github.com/janesmith', x: 50, y: 128, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'm4', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', x: 50, y: 152, width: A4_WIDTH - 100, fontSize: 8, fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'm5', text: 'SUMMARY', x: 50, y: 165, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'm6', text: 'Full-stack engineer with 4 years experience building scalable web applications using React, Node.js, and PostgreSQL. Passionate about clean code and developer tooling.', x: 50, y: 184, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155' },
            { ...DEFAULT_TEXT, id: 'm7', text: 'EXPERIENCE', x: 50, y: 234, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'm8', text: 'Senior Frontend Engineer', x: 50, y: 254, width: 320, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e1b4b' },
            { ...DEFAULT_TEXT, id: 'm9', text: 'TechCorp Inc', x: 50, y: 272, width: 200, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'm10', text: '2022 – Present', x: A4_WIDTH - 200, y: 254, width: 150, fontSize: 11, textAlign: 'right', fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'm11', text: '• Built React-based design system adopted by 10+ teams\n• Reduced bundle size by 35% through code splitting\n• Mentored 3 junior engineers', x: 68, y: 292, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Arial', color: '#334155' },
        ]
    },
    {
        id: 'ats-minimal', name: 'Minimal',
        format: 'chronological', profession: 'universal', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 'min1', text: 'ALEX JOHNSON', x: 50, y: 60, width: 500, fontSize: 28, fontWeight: '700', fontFamily: 'Helvetica', color: '#0f0f0f' },
            { ...DEFAULT_TEXT, id: 'min2', text: 'Product Designer', x: 50, y: 96, width: 400, fontSize: 14, fontFamily: 'Helvetica', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'min3', text: 'alex@design.co    555.246.8101    San Francisco, CA', x: 50, y: 118, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Helvetica', color: '#9ca3af' },
            { ...DEFAULT_TEXT, id: 'min4', text: '─────────────────────────────────────────────────────────────', x: 50, y: 140, width: A4_WIDTH - 100, fontSize: 9, fontFamily: 'Helvetica', color: '#e5e7eb' },
            { ...DEFAULT_TEXT, id: 'min5', text: 'About', x: 50, y: 160, width: 100, fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'min6', text: 'UX/UI designer with 6 years crafting intuitive digital products for fintech and e-commerce. Expert in Figma, design systems, and user research.', x: 160, y: 160, width: A4_WIDTH - 210, fontSize: 11, fontFamily: 'Helvetica', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'min7', text: 'Experience', x: 50, y: 224, width: 100, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'min8', text: 'Lead Product Designer  ·  Finova — 2021–Present\nSenior UX Designer  ·  ShopNow — 2019–2021\nUI Designer  ·  Agency X — 2017–2019', x: 160, y: 224, width: A4_WIDTH - 210, fontSize: 11, fontFamily: 'Helvetica', color: '#374151' },
        ]
    },
    {
        id: 'ats-creative', name: 'Creative Bold',
        format: 'functional', profession: 'it', design: 'creative',
        elements: [
            { ...DEFAULT_TEXT, id: 'cr1', text: 'MORGAN\nRIVERS', x: 50, y: 40, width: 350, fontSize: 52, fontWeight: '900', fontFamily: 'Arial', color: '#7c3aed', lineHeight: 1.0 },
            { ...DEFAULT_TEXT, id: 'cr2', text: 'DATA SCIENTIST & ML ENGINEER', x: 50, y: 162, width: A4_WIDTH - 100, fontSize: 13, fontFamily: 'Arial', color: '#06b6d4', letterSpacing: 4, fontWeight: '600' },
            { ...DEFAULT_TEXT, id: 'cr3', text: 'morgan@mldev.io  ╱  +1 555 333 2211  ╱  linkedin.com/in/morganrivers', x: 50, y: 186, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'cr4', text: '▌ PROFILE', x: 50, y: 224, width: A4_WIDTH - 100, fontSize: 14, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'cr5', text: 'ML engineer turning raw data into business decisions. 5+ years building production-grade models, data pipelines, and real-time inference systems at scale.', x: 50, y: 248, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1f2937' },
            { ...DEFAULT_TEXT, id: 'cr6', text: '▌ CORE SKILLS', x: 50, y: 300, width: A4_WIDTH - 100, fontSize: 14, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'cr7', text: 'Python  ·  TensorFlow  ·  PyTorch  ·  Spark  ·  Kubernetes  ·  AWS  ·  SQL  ·  Airflow  ·  dbt', x: 50, y: 324, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1f2937' },
        ]
    },

    // ── NEW TEMPLATES ──────────────────────────────────────────
    {
        id: 'ats-executive', name: 'Executive',
        format: 'chronological', profession: 'business', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'ex1', text: 'RICHARD HAYES', x: 50, y: 50, width: A4_WIDTH - 100, fontSize: 34, fontWeight: '800', fontFamily: 'Georgia', color: '#1a1a2e', textAlign: 'center' },
            { ...DEFAULT_TEXT, id: 'ex2', text: 'Chief Executive Officer  ·  Board Advisor  ·  Strategic Leader', x: 50, y: 96, width: A4_WIDTH - 100, fontSize: 13, fontFamily: 'Georgia', color: '#4a4a6a', textAlign: 'center', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'ex3', text: 'richard.hayes@executive.com  |  +1 (212) 555-0100  |  New York, NY  |  linkedin.com/in/rhayes', x: 50, y: 120, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Georgia', color: '#6b7280', textAlign: 'center' },
            { ...DEFAULT_TEXT, id: 'ex4', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', x: 50, y: 144, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Georgia', color: '#1a1a2e' },
            { ...DEFAULT_TEXT, id: 'ex5', text: 'EXECUTIVE PROFILE', x: 50, y: 156, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 3 },
            { ...DEFAULT_TEXT, id: 'ex6', text: 'Visionary C-suite executive with 20+ years driving P&L of $500M+. Expert in digital transformation, M&A integration, and global market expansion. Led IPOs on NYSE and acquired 3 companies generating $1.2B in value. Board member of Fortune 500 firms.', x: 50, y: 176, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ex7', text: 'CORE COMPETENCIES', x: 50, y: 244, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 3 },
            { ...DEFAULT_TEXT, id: 'ex8', text: 'Strategic Planning  ·  P&L Management  ·  M&A  ·  Board Governance  ·  IPO Leadership  ·  Organizational Transformation  ·  Capital Allocation  ·  Global Operations  ·  Investor Relations', x: 50, y: 264, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'ex9', text: 'CAREER HISTORY', x: 50, y: 310, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 3 },
            { ...DEFAULT_TEXT, id: 'ex10', text: 'Chief Executive Officer', x: 50, y: 330, width: 380, fontSize: 13, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e' },
            { ...DEFAULT_TEXT, id: 'ex11', text: 'GlobalVenture Corp. — New York, NY', x: 50, y: 350, width: 380, fontSize: 11, fontFamily: 'Georgia', color: '#6b7280', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'ex12', text: '2018 – Present', x: A4_WIDTH - 220, y: 330, width: 170, fontSize: 11, textAlign: 'right', fontFamily: 'Georgia', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'ex13', text: '• Scaled revenue from $140M to $520M through organic growth and 3 acquisitions\n• Led successful NASDAQ listing raising $280M in capital\n• Transformed workforce culture across 18 global offices (4,200+ employees)\n• Secured partnerships with Google, Microsoft, and SAP', x: 68, y: 375, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'ex14', text: 'EDUCATION', x: 50, y: 470, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 3 },
            { ...DEFAULT_TEXT, id: 'ex15', text: 'MBA, Harvard Business School  ·  2003\nB.Sc. Economics (Honors), LSE  ·  2001', x: 50, y: 490, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.7 },
        ]
    },
    {
        id: 'ats-tech', name: 'Tech Developer',
        format: 'combination', profession: 'it', design: 'creative',
        elements: [
            { ...DEFAULT_TEXT, id: 'td1', text: '< DEV />', x: 50, y: 35, width: 200, fontSize: 36, fontWeight: '900', fontFamily: 'Courier New', color: '#22c55e' },
            { ...DEFAULT_TEXT, id: 'td2', text: 'PRIYA NAIR', x: 50, y: 82, width: 500, fontSize: 28, fontWeight: 'bold', fontFamily: 'Arial', color: '#f0fdf4' },
            { ...DEFAULT_TEXT, id: 'td3', text: 'Full-Stack Engineer  ›  Cloud Architect  ›  Open Source Contributor', x: 50, y: 116, width: A4_WIDTH - 100, fontSize: 12, fontFamily: 'Arial', color: '#86efac' },
            { ...DEFAULT_TEXT, id: 'td4', text: '// priya@devcraft.io  |  github.com/priyanair  |  linkedin.com/in/priya  |  +91 98765 43210', x: 50, y: 138, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Courier New', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'td5', text: '/* SKILLS */', x: 50, y: 174, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Courier New', color: '#22c55e' },
            { ...DEFAULT_TEXT, id: 'td6', text: 'Languages:    JavaScript  ·  TypeScript  ·  Python  ·  Go  ·  Rust\nFrontend:     React  ·  Next.js  ·  Vue  ·  Tailwind\nBackend:      Node.js  ·  FastAPI  ·  GraphQL  ·  gRPC\nCloud/DevOps: AWS  ·  GCP  ·  Docker  ·  Kubernetes  ·  Terraform\nDatabases:    PostgreSQL  ·  Redis  ·  MongoDB  ·  DynamoDB', x: 50, y: 196, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Courier New', color: '#374151', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'td7', text: '/* EXPERIENCE */', x: 50, y: 310, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Courier New', color: '#22c55e' },
            { ...DEFAULT_TEXT, id: 'td8', text: 'Staff Software Engineer', x: 50, y: 332, width: 350, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#111827' },
            { ...DEFAULT_TEXT, id: 'td9', text: 'Stripe  |  Remote', x: 50, y: 352, width: 300, fontSize: 11, fontFamily: 'Arial', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'td10', text: '2021 – Present', x: A4_WIDTH - 200, y: 332, width: 150, fontSize: 11, textAlign: 'right', fontFamily: 'Arial', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'td11', text: '• Architected payment microservices processing $2B+/day with 99.999% uptime\n• Reduced API p99 latency by 68% via Redis caching & connection pooling\n• Built OSS library (4.2k GitHub stars) for webhook signature validation\n• Led platform migration to Kubernetes cutting infrastructure cost by $1.2M/yr', x: 68, y: 374, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'td12', text: '/* EDUCATION */', x: 50, y: 466, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Courier New', color: '#22c55e' },
            { ...DEFAULT_TEXT, id: 'td13', text: 'B.Tech Computer Science  —  IIT Bombay  —  2020  (GPA: 9.1/10)', x: 50, y: 488, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#374151' },
        ]
    },
    {
        id: 'ats-finance', name: 'Finance Pro',
        format: 'combination', profession: 'business', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'fn1', text: 'DAVID CHEN, CFA', x: 50, y: 50, width: A4_WIDTH - 100, fontSize: 30, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'fn2', text: 'Investment Banking Analyst  |  Equity Research  |  Portfolio Management', x: 50, y: 90, width: A4_WIDTH - 100, fontSize: 12, fontFamily: 'Arial', color: '#1d4ed8' },
            { ...DEFAULT_TEXT, id: 'fn3', text: 'david.chen@finance.com   ·   (646) 555-0188   ·   New York, NY   ·   CFA Institute Member', x: 50, y: 112, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'fn4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 132, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Arial', color: '#1d4ed8' },
            { ...DEFAULT_TEXT, id: 'fn5', text: 'PROFESSIONAL SUMMARY', x: 50, y: 145, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'fn6', text: 'CFA charterholder with 7 years in investment banking and asset management. Executed $4.5B in M&A transactions and IPOs. Deep expertise in DCF, LBO modeling, and sector coverage across TMT, Healthcare, and Consumer.', x: 50, y: 165, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'fn7', text: 'EXPERIENCE', x: 50, y: 220, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'fn8', text: 'Vice President — Investment Banking', x: 50, y: 240, width: 380, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'fn9', text: 'Goldman Sachs  ·  New York', x: 50, y: 258, width: 280, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'fn10', text: '2019 – Present', x: A4_WIDTH - 200, y: 240, width: 150, fontSize: 11, textAlign: 'right', fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'fn11', text: '• Advised on $2.3B acquisition of TechCorp by Fortune 100 industrials firm\n• Modeled 40+ LBO/DCF scenarios enabling $800M PE-backed buyout\n• Built sector coverage model tracking 35 TMT companies (AUM $1.1B)\n• Managed junior analyst team of 5 across live deal pipeline of 8 transactions', x: 68, y: 280, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'fn12', text: 'EDUCATION & CERTIFICATIONS', x: 50, y: 376, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'fn13', text: 'MBA Finance — Wharton School, UPenn — 2017   |   GPA: 3.9/4.0\nBBA Finance — NYU Stern — 2015   |   Summa Cum Laude\nCFA Charterholder — Level III — 2019   |   Series 79 & 63 Licensed', x: 50, y: 396, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'fn14', text: 'TECHNICAL SKILLS', x: 50, y: 458, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'fn15', text: 'Financial Modeling  ·  DCF  ·  LBO  ·  M&A Valuation  ·  Bloomberg Terminal  ·  FactSet  ·  Capital IQ  ·  Excel VBA  ·  Python (pandas, NumPy)  ·  SQL  ·  Tableau', x: 50, y: 478, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155' },
        ]
    },
    {
        id: 'ats-healthcare', name: 'Healthcare',
        format: 'chronological', profession: 'universal', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'hc1', text: 'DR. SARAH MITCHELL, MD', x: 50, y: 48, width: A4_WIDTH - 100, fontSize: 28, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1e3a5f' },
            { ...DEFAULT_TEXT, id: 'hc2', text: 'Board-Certified Emergency Physician  ·  FAAEM  ·  FACEP', x: 50, y: 86, width: A4_WIDTH - 100, fontSize: 12, fontFamily: 'Georgia', color: '#2563eb', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'hc3', text: 'sarah.mitchell@hospital.org   |   (312) 555-0244   |   Chicago, IL   |   NPI: 1234567890', x: 50, y: 108, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Georgia', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'hc4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 128, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Georgia', color: '#1e3a5f' },
            { ...DEFAULT_TEXT, id: 'hc5', text: 'PROFESSIONAL SUMMARY', x: 50, y: 141, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1e3a5f', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hc6', text: 'Dedicated Emergency Physician with 12 years caring for critically ill and injured patients in high-volume Level I trauma centers. Expert in resuscitation, airway management, and trauma protocols. Committed to quality improvement, reducing door-to-physician time by 22%.', x: 50, y: 161, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'hc7', text: 'LICENSURE & CERTIFICATIONS', x: 50, y: 220, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1e3a5f', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hc8', text: 'Illinois Medical License #036-123456   ·   DEA License   ·   ATLS Certified   ·   ACLS/BLS Provider\nABEM Board Certified   ·   FAAEM   ·   FACEP   ·   ECG Interpretation Certified', x: 50, y: 240, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'hc9', text: 'CLINICAL EXPERIENCE', x: 50, y: 290, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1e3a5f', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hc10', text: 'Attending Emergency Physician', x: 50, y: 310, width: 380, fontSize: 13, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1e3a5f' },
            { ...DEFAULT_TEXT, id: 'hc11', text: 'Northwestern Memorial Hospital  ·  Chicago, IL', x: 50, y: 330, width: 380, fontSize: 11, fontFamily: 'Georgia', color: '#64748b', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'hc12', text: '2014 – Present', x: A4_WIDTH - 220, y: 310, width: 170, fontSize: 11, textAlign: 'right', fontFamily: 'Georgia', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'hc13', text: '• See 30–40 patients/shift in 85,000-visit/yr Level I trauma center\n• Led QI initiative reducing LOS by 18% and door-to-physician time by 22%\n• Supervise 4–6 residents and medical students per shift\n• Member, Sepsis Protocol Committee — reduced sepsis mortality rate by 14%', x: 68, y: 352, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Georgia', color: '#334155', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'hc14', text: 'EDUCATION', x: 50, y: 444, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1e3a5f', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hc15', text: 'Emergency Medicine Residency  —  Johns Hopkins Hospital  —  2014\nMD  —  University of Chicago Pritzker School of Medicine  —  2011    (Alpha Omega Alpha)\nB.S. Biology, Magna Cum Laude  —  University of Michigan  —  2007', x: 50, y: 464, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#334155', lineHeight: 1.7 },
        ]
    },
    {
        id: 'ats-academic', name: 'Academic CV',
        format: 'chronological', profession: 'universal', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 'ac1', text: 'PROFESSOR ELENA VASQUEZ, Ph.D.', x: 50, y: 48, width: A4_WIDTH - 100, fontSize: 24, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#1e1e1e' },
            { ...DEFAULT_TEXT, id: 'ac2', text: 'Associate Professor of Computational Linguistics  ·  MIT CSAIL', x: 50, y: 82, width: A4_WIDTH - 100, fontSize: 13, fontFamily: 'Times New Roman', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'ac3', text: 'evasquez@mit.edu   |   (617) 555-0312   |   Cambridge, MA   |   scholar.google.com/elena-v', x: 50, y: 102, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Times New Roman', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'ac4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 122, width: A4_WIDTH - 100, fontSize: 7, color: '#1e1e1e', fontFamily: 'Times New Roman' },
            { ...DEFAULT_TEXT, id: 'ac5', text: 'RESEARCH INTERESTS', x: 50, y: 135, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#1e1e1e', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ac6', text: 'Natural Language Processing  ·  Low-Resource Languages  ·  Neural Machine Translation  ·  Multilingual Transformers  ·  Computational Morphology', x: 50, y: 154, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Times New Roman', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'ac7', text: 'ACADEMIC POSITIONS', x: 50, y: 188, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#1e1e1e', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ac8', text: 'Associate Professor of Computational Linguistics\nMassachusetts Institute of Technology  —  Cambridge, MA  —  2020–Present\n\nAssistant Professor, Department of Computer Science\nStanford University  —  Palo Alto, CA  —  2015–2020\n\nPostdoctoral Research Fellow\nCarnegie Mellon University Language Technologies Institute  —  2013–2015', x: 50, y: 208, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Times New Roman', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ac9', text: 'SELECTED PUBLICATIONS  (h-index: 28, 3,400+ citations)', x: 50, y: 330, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#1e1e1e', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ac10', text: 'Vasquez, E. et al. (2024). "Cross-Lingual Transfer for Endangered Languages." Nature Machine Intelligence, 6(2), 112–125.\n\nVasquez, E. & Park, J. (2023). "Morphology-Aware Tokenization for 200+ Languages." Proceedings of ACL 2023, pp. 1840–1856.\n\nVasquez, E. (2022). "LowResNMT: Neural Translation for 50 Low-Resource Language Pairs." EMNLP 2022 (Best Paper Award).', x: 50, y: 352, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Times New Roman', color: '#374151', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'ac11', text: 'EDUCATION', x: 50, y: 462, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#1e1e1e', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ac12', text: 'Ph.D. Computational Linguistics  —  UC Berkeley  —  2013   (NSF Graduate Research Fellow)\nM.A. Linguistics  —  UC Berkeley  —  2010\nB.A. Linguistics & Computer Science  —  Yale University  —  2008   (Summa Cum Laude)', x: 50, y: 482, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Times New Roman', color: '#374151', lineHeight: 1.7 },
        ]
    },
    {
        id: 'ats-entry-level', name: 'Entry Level',
        format: 'functional', profession: 'universal', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'el1', text: 'MAYA PATEL', x: 50, y: 50, width: A4_WIDTH - 100, fontSize: 32, fontWeight: '800', fontFamily: 'Arial', color: '#0f172a', textAlign: 'center' },
            { ...DEFAULT_TEXT, id: 'el2', text: 'Recent Graduate  ·  Marketing & Communications', x: 50, y: 92, width: A4_WIDTH - 100, fontSize: 13, fontFamily: 'Arial', color: '#0ea5e9', textAlign: 'center' },
            { ...DEFAULT_TEXT, id: 'el3', text: 'maya.patel@email.com   (480) 555-0177   Phoenix, AZ   linkedin.com/in/mayapatel', x: 50, y: 114, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#64748b', textAlign: 'center' },
            { ...DEFAULT_TEXT, id: 'el4', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', x: 50, y: 134, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Arial', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'el5', text: 'OBJECTIVE', x: 50, y: 147, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'el6', text: 'Energetic Marketing graduate eager to apply strong digital communication skills and creative thinking to a fast-paced marketing team. Experienced in social media strategy, content creation, and data-driven campaign optimization through internships and academic projects.', x: 50, y: 166, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'el7', text: 'EDUCATION', x: 50, y: 224, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'el8', text: 'B.S. Marketing — Arizona State University — May 2025', x: 50, y: 244, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'el9', text: 'GPA: 3.8/4.0   ·   Dean\'s List 6 semesters   ·   Delta Sigma Pi Business Fraternity', x: 50, y: 262, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'el10', text: 'INTERNSHIP EXPERIENCE', x: 50, y: 300, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'el11', text: 'Digital Marketing Intern', x: 50, y: 320, width: 340, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'el12', text: 'HubSpot  ·  Phoenix, AZ', x: 50, y: 338, width: 250, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'el13', text: 'Summer 2024', x: A4_WIDTH - 200, y: 320, width: 150, fontSize: 11, textAlign: 'right', fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'el14', text: '• Managed Instagram & LinkedIn accounts growing combined following by 2,300\n• Created 45+ pieces of content achieving avg 8.4% engagement rate\n• Assisted in email campaign reaching 12,000 subscribers (28% open rate)\n• Compiled weekly analytics reports in Google Analytics & HubSpot CRM', x: 68, y: 360, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'el15', text: 'SKILLS', x: 50, y: 452, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'el16', text: 'Tools:     Canva  ·  Adobe Creative Suite  ·  HubSpot  ·  Google Analytics  ·  Mailchimp  ·  Hootsuite\nSkills:    SEO/SEM  ·  Content Strategy  ·  Copywriting  ·  Social Media  ·  Email Marketing  ·  A/B Testing\nLanguages: English (Native)  ·  Hindi (Fluent)  ·  Spanish (Conversational)', x: 50, y: 472, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.7 },
        ]
    },
    {
        id: 'ats-sidebyside', name: 'Two-Column',
        format: 'combination', profession: 'universal', design: 'creative',
        elements: [
            // Left column header bar (simulated with wide element)
            { ...DEFAULT_TEXT, id: 'tb1', text: 'CARLOS MENDEZ', x: 50, y: 42, width: 430, fontSize: 30, fontWeight: '900', fontFamily: 'Arial', color: '#1e293b' },
            { ...DEFAULT_TEXT, id: 'tb2', text: 'Senior UX Designer', x: 50, y: 82, width: 430, fontSize: 15, fontFamily: 'Arial', color: '#2563eb', fontWeight: '600' },
            // Right column header
            { ...DEFAULT_TEXT, id: 'tb3', text: '✉ carlos@ux.studio\n☎ (323) 555-0199\n📍 Los Angeles, CA\n🔗 behance.net/carlosmendez\n💼 linkedin.com/in/carlos-m', x: 510, y: 42, width: 234, fontSize: 10, fontFamily: 'Arial', color: '#475569', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'tb4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 168, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Arial', color: '#2563eb' },
            // Left column content
            { ...DEFAULT_TEXT, id: 'tb5', text: 'SUMMARY', x: 50, y: 182, width: 410, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'tb6', text: 'Strategic UX designer with 8 years creating elegant digital experiences for SaaS, mobile, and enterprise products. Specializes in user research, design systems, and 0-to-1 product design at seed and growth-stage startups.', x: 50, y: 200, width: 410, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'tb7', text: 'EXPERIENCE', x: 50, y: 266, width: 410, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'tb8', text: 'Lead UX Designer', x: 50, y: 286, width: 250, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b' },
            { ...DEFAULT_TEXT, id: 'tb9', text: 'Airbnb  —  LA/Remote  —  2021–Present', x: 50, y: 304, width: 410, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'tb10', text: '• Led redesign of host onboarding, +31% completion\n• Built Figma design system used by 28 designers\n• Conducted 80+ user interviews driving 3 major product pivots', x: 68, y: 324, width: 392, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'tb11', text: 'Senior UX Designer', x: 50, y: 386, width: 250, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b' },
            { ...DEFAULT_TEXT, id: 'tb12', text: 'Spotify  —  New York  —  2018–2021', x: 50, y: 404, width: 410, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'tb13', text: '• Redesigned podcast discovery, increasing podcast streams by 44%\n• Created mobile design system adopted across iOS & Android teams', x: 68, y: 424, width: 392, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.5 },
            // Right sidebar content
            { ...DEFAULT_TEXT, id: 'tb14', text: 'SKILLS', x: 516, y: 182, width: 228, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'tb15', text: 'Figma  ·  Sketch\nProtoPie  ·  Framer\nMiro  ·  Maze\nUsability Testing\nInformation Architecture\nDesign Systems\nUser Research\nAccessibility (WCAG)', x: 516, y: 200, width: 228, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.65 },
            { ...DEFAULT_TEXT, id: 'tb16', text: 'EDUCATION', x: 516, y: 380, width: 228, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'tb17', text: 'B.F.A. Interaction Design\nCalifornia College of Arts\n2016', x: 516, y: 400, width: 228, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.65 },
            { ...DEFAULT_TEXT, id: 'tb18', text: 'CERTIFICATIONS', x: 516, y: 468, width: 228, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'tb19', text: 'Google UX Design\nNielsen Norman Group\nAxure Certified', x: 516, y: 488, width: 228, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.65 },
            { ...DEFAULT_TEXT, id: 'tb20', text: 'EDUCATION', x: 50, y: 486, width: 410, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'tb21', text: 'B.F.A. Interaction Design  —  California College of Arts  —  2016\nGoogle UX Design Certificate  ·  Nielsen Norman Group Certified', x: 50, y: 506, width: 410, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
        ]
    },

    // ── Professional Templates — Chronological ────────────────────

    {   // IT Chronological Creative
        id: 'it-chron-creative', name: 'IT Chronological',
        format: 'chronological', profession: 'it', design: 'creative',
        elements: [
            { ...DEFAULT_TEXT, id: 'itcc1', text: 'ARYAN MEHTA', x: 50, y: 46, width: 480, fontSize: 40, fontWeight: '900', fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'itcc2', text: 'Full-Stack Developer  ·  DevOps Engineer', x: 50, y: 98, width: 480, fontSize: 16, fontFamily: 'Arial', color: '#06b6d4', fontWeight: '600' },
            { ...DEFAULT_TEXT, id: 'itcc3', text: 'aryan@devops.io  ·  github.com/aryanm  ·  linkedin.com/in/aryanm  ·  +91 98000 11222', x: 50, y: 124, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'itcc4', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', x: 50, y: 146, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'itcc5', text: 'PROFESSIONAL SUMMARY', x: 50, y: 158, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'itcc6', text: 'Full-stack engineer with 6 years building high-availability cloud-native applications for fintech and e-commerce at scale. Expert in React, Node.js, AWS, and CI/CD. Reduced deployment time by 70% and improved system uptime to 99.98%.', x: 50, y: 178, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'itcc7', text: 'TECHNICAL SKILLS', x: 50, y: 228, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'itcc8', text: 'Frontend: React · Next.js · TypeScript · Redux · Tailwind CSS\nBackend:  Node.js · Express · Python · FastAPI · GraphQL\nCloud:    AWS (EC2, S3, Lambda, RDS) · Docker · Kubernetes · Terraform\nDatabase: PostgreSQL · MongoDB · Redis · Elasticsearch', x: 50, y: 248, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#334155', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'itcc9', text: 'WORK EXPERIENCE', x: 50, y: 320, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'itcc10', text: 'Senior Full-Stack Engineer', x: 50, y: 340, width: 360, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e1b4b' },
            { ...DEFAULT_TEXT, id: 'itcc11', text: 'Razorpay  ·  Bangalore, India', x: 50, y: 358, width: 300, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'itcc12', text: 'Mar 2022 – Present', x: A4_WIDTH - 208, y: 340, width: 158, fontSize: 11, textAlign: 'right', fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'itcc13', text: '• Architected checkout micro-frontend serving 8M+ daily transactions\n• Reduced API latency by 55% via Redis caching and query optimization\n• Mentored 4 junior engineers and led weekly tech design reviews\n• Automated CI/CD pipelines (GitHub Actions + ArgoCD), cutting release cycle from 2 weeks to 1 day', x: 68, y: 378, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'itcc14', text: 'EDUCATION  &  CERTIFICATIONS', x: 50, y: 470, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'itcc15', text: 'B.Tech Computer Science  —  IIT Delhi  —  2019   (GPA 8.9/10)\nAWS Certified Solutions Architect – Professional  ·  CKA (Kubernetes)  ·  GCP Associate Cloud Engineer', x: 50, y: 490, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.7 },
        ]
    },

    {   // HR Chronological Corporate
        id: 'hr-chron-corporate', name: 'HR Professional',
        format: 'chronological', profession: 'hr', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'hrc1', text: 'SUNITA KRISHNAN', x: 50, y: 48, width: A4_WIDTH - 100, fontSize: 30, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0c1a4a' },
            { ...DEFAULT_TEXT, id: 'hrc2', text: 'Senior HR Business Partner  ·  Talent Acquisition Leader', x: 50, y: 90, width: A4_WIDTH - 100, fontSize: 12, fontFamily: 'Georgia', color: '#0ea5e9', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'hrc3', text: 'sunita.k@hrmail.com  |  +91 9700 000 222  |  Mumbai, India  |  linkedin.com/in/sunitak', x: 50, y: 112, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Georgia', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'hrc4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 133, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Georgia', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'hrc5', text: 'PROFILE SUMMARY', x: 50, y: 146, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0c1a4a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hrc6', text: 'Seasoned HR Business Partner with 10+ years driving talent strategy, organizational development, and employee engagement across IT and BFSI sectors. Reduced attrition by 28% at previous employer by implementing structured career-pathing frameworks. Certified in SHRM-SCP.', x: 50, y: 166, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'hrc7', text: 'CORE HR COMPETENCIES', x: 50, y: 226, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0c1a4a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hrc8', text: 'Talent Acquisition  ·  Workforce Planning  ·  HRBP  ·  Performance Management  ·  L&D  ·  Compensation & Benefits  ·  Labour Law Compliance  ·  Employee Engagement  ·  HRMS (SAP, Workday, Darwinbox)', x: 50, y: 246, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'hrc9', text: 'WORK EXPERIENCE', x: 50, y: 290, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0c1a4a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hrc10', text: 'Senior HR Business Partner', x: 50, y: 310, width: 360, fontSize: 13, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0c1a4a' },
            { ...DEFAULT_TEXT, id: 'hrc11', text: 'Infosys BPM  ·  Mumbai', x: 50, y: 328, width: 300, fontSize: 11, fontFamily: 'Georgia', color: '#64748b', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'hrc12', text: 'Jan 2020 – Present', x: A4_WIDTH - 210, y: 310, width: 160, fontSize: 11, textAlign: 'right', fontFamily: 'Georgia', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'hrc13', text: '• Managed HR operations for 3,200+ employee base across 6 delivery centres\n• Reduced annual attrition from 34% to 24% via structured retention initiatives\n• Partnered with leadership on org redesign reducing headcount cost by ₹4.2Cr\n• Deployed Darwinbox HRMS cutting HR process TAT by 40%\n• Recruited 600+ lateral hires annually with 90-day retention rate of 94%', x: 68, y: 350, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'hrc14', text: 'EDUCATION & CERTIFICATIONS', x: 50, y: 458, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0c1a4a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'hrc15', text: 'MBA (HR & OB)  —  XLRI Jamshedpur  —  2014\nBSc Psychology  —  St. Xavier\'s College, Mumbai  —  2012\nSHRM-SCP  ·  POSH Internal Committee Certified  ·  Workday HCM Pro', x: 50, y: 478, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.7 },
        ]
    },

    {   // Business Chronological Minimal
        id: 'biz-chron-minimal', name: 'Business Manager',
        format: 'chronological', profession: 'business', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 'bcm1', text: 'ANKIT SHARMA', x: 50, y: 55, width: 500, fontSize: 32, fontWeight: '700', fontFamily: 'Helvetica', color: '#111827' },
            { ...DEFAULT_TEXT, id: 'bcm2', text: 'General Manager — Operations & Strategy', x: 50, y: 96, width: 480, fontSize: 14, fontFamily: 'Helvetica', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'bcm3', text: 'ankit.sharma@corp.com    +91 98765 12345    Delhi NCR    linkedin.com/in/ankitsharma', x: 50, y: 118, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Helvetica', color: '#9ca3af' },
            { ...DEFAULT_TEXT, id: 'bcm4', text: '─────────────────────────────────────────────────────────────────', x: 50, y: 140, width: A4_WIDTH - 100, fontSize: 8, fontFamily: 'Helvetica', color: '#e5e7eb' },
            { ...DEFAULT_TEXT, id: 'bcm5', text: 'Summary', x: 50, y: 158, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'bcm6', text: 'Results-driven operations leader with 12 years scaling FMCG and retail businesses across South Asia. Delivered ₹180Cr revenue growth through market expansion and operational efficiency programs. Strong P&L ownership with expertise in supply chain, channel management, and cross-functional leadership.', x: 168, y: 158, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'bcm7', text: 'Core Skills', x: 50, y: 224, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'bcm8', text: 'P&L Management  ·  Supply Chain  ·  GTM Strategy  ·  Channel Sales  ·  KPI Dashboarding  ·  Team Leadership  ·  Cost Optimization  ·  Vendor Negotiations', x: 168, y: 224, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'bcm9', text: 'Experience', x: 50, y: 274, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'bcm10', text: 'General Manager — Operations\nHindustan Unilever Ltd  ·  Delhi  ·  2019–Present\n• Managed ₹620Cr regional P&L across 8 states with 240-person team\n• Led 15% YoY cost reduction via lean process reengineering\n• Launched D2C channel generating ₹38Cr revenue in year 1\n\nRegional Business Manager\nNestlé India  ·  Mumbai  ·  2015–2019\n• Grew North Zone revenue by 32% through distributor network expansion\n• Implemented OTIF metric system improving delivery adherence to 97%', x: 168, y: 274, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'bcm11', text: 'Education', x: 50, y: 458, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'bcm12', text: 'MBA (Marketing & Strategy)  —  IIM Ahmedabad  —  2013\nB.E. Mechanical  —  Delhi Technological University  —  2009', x: 168, y: 458, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.7 },
        ]
    },

    // ── Professional Templates — Functional ───────────────────────

    {   // IT Functional Corporate
        id: 'it-func-corporate', name: 'IT Skills-Focused',
        format: 'functional', profession: 'it', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'ifc1', text: 'DEVIKA NAIR', x: 50, y: 48, width: A4_WIDTH - 100, fontSize: 34, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'ifc2', text: 'Backend Engineer  |  Cloud & Security Specialist', x: 50, y: 92, width: A4_WIDTH - 100, fontSize: 13, fontFamily: 'Arial', color: '#1d4ed8' },
            { ...DEFAULT_TEXT, id: 'ifc3', text: 'devika.n@backend.dev  |  github.com/devika-n  |  Hyderabad, India  |  +91 98888 00111', x: 50, y: 114, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'ifc4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 134, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Arial', color: '#1d4ed8' },
            { ...DEFAULT_TEXT, id: 'ifc5', text: 'PROFESSIONAL SUMMARY', x: 50, y: 147, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ifc6', text: 'Backend engineer transitioning from on-prem to cloud-native architecture. Expert in designing secure, scalable REST and GraphQL APIs. Strong track record in fintech: built payment systems handling ₹1200Cr/month. OSCP-certified with hands-on penetration testing experience.', x: 50, y: 167, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ifc7', text: 'KEY SKILLS', x: 50, y: 220, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ifc8', text: 'API Design & Architecture\n• Designed 40+ REST/GraphQL endpoints serving 2M+ daily active users\n• Built async job queues (BullMQ, Celery) processing 500K tasks/day', x: 50, y: 240, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.55 },
            { ...DEFAULT_TEXT, id: 'ifc9', text: 'Cloud & Infrastructure\n• Migrated 12 monolith services to AWS microservices, reducing cost 43%\n• Implemented Terraform IaC for zero-downtime blue-green deployments', x: 50, y: 296, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.55 },
            { ...DEFAULT_TEXT, id: 'ifc10', text: 'Security Engineering\n• Conducted 6 internal pen tests; remediated 100% of critical findings\n• Implemented OAuth 2.0 + MFA cutting account takeover incidents to zero', x: 50, y: 352, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.55 },
            { ...DEFAULT_TEXT, id: 'ifc11', text: 'WORK HISTORY', x: 50, y: 410, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ifc12', text: 'Backend Engineer II  —  PhonePe  —  2021–Present\nBackend Engineer I  —  Juspay  —  2018–2021\nJunior Developer  —  TCS Digital  —  2016–2018', x: 50, y: 430, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'ifc13', text: 'EDUCATION & CERTIFICATIONS', x: 50, y: 490, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ifc14', text: 'B.Tech IT — NIT Warangal — 2016   |   OSCP  ·  AWS SAA  ·  HashiCorp Terraform Associate', x: 50, y: 510, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#334155' },
        ]
    },

    {   // HR Functional Minimal
        id: 'hr-func-minimal', name: 'HR Skills Resume',
        format: 'functional', profession: 'hr', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 'hfm1', text: 'POOJA AGRAWAL', x: 50, y: 56, width: 500, fontSize: 30, fontWeight: '700', fontFamily: 'Helvetica', color: '#1f2937' },
            { ...DEFAULT_TEXT, id: 'hfm2', text: 'HR Generalist  ·  People Operations', x: 50, y: 96, width: 400, fontSize: 13, fontFamily: 'Helvetica', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'hfm3', text: 'pooja.a@peoplefirst.in    9800 222 111    Pune, India    linkedin.com/in/poojaag', x: 50, y: 117, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Helvetica', color: '#9ca3af' },
            { ...DEFAULT_TEXT, id: 'hfm4', text: '─────────────────────────────────────────────────────────────────', x: 50, y: 138, width: A4_WIDTH - 100, fontSize: 8, fontFamily: 'Helvetica', color: '#e5e7eb' },
            { ...DEFAULT_TEXT, id: 'hfm5', text: 'Objective', x: 50, y: 156, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'hfm6', text: 'Dedicated HR professional with 5 years of generalist experience seeking to leverage strong recruitment, compliance and employee relations skills in a scaling start-up environment. Proven ability to implement HR processes from scratch and build positive organisational cultures.', x: 168, y: 156, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'hfm7', text: 'HR Skills', x: 50, y: 226, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'hfm8', text: 'Recruitment & Selection\n• End-to-end hiring for 120+ roles (tech, op, sales) with avg 35-day TAT\n• Designed structured interview kits reducing mis-hires by 40%\n\nEmployee Relations & Engagement\n• Resolved 90% of grievances within 5 business days\n• Planned 12 engagement initiatives; ENPS improved from 24 to 48\n\nHR Operations & Compliance\n• Managed monthly payroll for 350 employees via Keka HRMS\n• Ensured 100% compliance: PF, ESI, Gratuity, POSH, Shops Act', x: 168, y: 226, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.55 },
            { ...DEFAULT_TEXT, id: 'hfm9', text: 'Employment', x: 50, y: 408, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'hfm10', text: 'HR Executive  —  Swiggy  —  2021–Present\nHR Assistant  —  Wipro BPS  —  2019–2021', x: 168, y: 408, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'hfm11', text: 'Education', x: 50, y: 458, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'hfm12', text: 'MBA (HRM)  —  Symbiosis Institute of Business Management, Pune  —  2019\nBCom (Hons)  —  Fergusson College, Pune  —  2017', x: 168, y: 458, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.7 },
        ]
    },

    {   // Business Functional Creative
        id: 'biz-func-creative', name: 'Business Skills-Led',
        format: 'functional', profession: 'business', design: 'creative',
        elements: [
            { ...DEFAULT_TEXT, id: 'bfc1', text: 'RAHUL\nKAPOOR', x: 50, y: 40, width: 360, fontSize: 48, fontWeight: '900', fontFamily: 'Arial', color: '#f59e0b', lineHeight: 1.0 },
            { ...DEFAULT_TEXT, id: 'bfc2', text: 'STRATEGY & GROWTH CONSULTANT', x: 50, y: 154, width: A4_WIDTH - 100, fontSize: 13, fontFamily: 'Arial', color: '#78716c', letterSpacing: 4, fontWeight: '600' },
            { ...DEFAULT_TEXT, id: 'bfc3', text: 'rahul.k@strategy.in  ╱  +91 98000 55666  ╱  linkedin.com/in/rahulkapoor', x: 50, y: 178, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#a8a29e' },
            { ...DEFAULT_TEXT, id: 'bfc4', text: '▌ SUMMARY', x: 50, y: 216, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#f59e0b' },
            { ...DEFAULT_TEXT, id: 'bfc5', text: 'Strategic growth advisor with 9 years in management consulting and corporate strategy. Closed ₹320Cr in M&A transactions. Drove 25%+ revenue uplift across 8 client engagements spanning FMCG, EdTech, and SaaS verticals.', x: 50, y: 238, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1c1917' },
            { ...DEFAULT_TEXT, id: 'bfc6', text: '▌ KEY COMPETENCIES', x: 50, y: 290, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#f59e0b' },
            { ...DEFAULT_TEXT, id: 'bfc7', text: 'Market Expansion & GTM Strategy\n• Designed GTM for 4 product launches generating combined ₹85Cr first-year revenue\n• Identified 3 new market segments resulting in 18% incremental growth\n\nM&A & Due Diligence\n• Led financial & operational due diligence for 6 acquisitions (₹30Cr–₹120Cr deal size)\n• Developed post-merger integration playbooks reducing synergy realisation timeline by 30%\n\nOperational Efficiency\n• Implemented OKR frameworks across 5 portfolio companies\n• Reduced COGS by 12% via supplier renegotiation and process lean initiatives', x: 50, y: 312, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1c1917', lineHeight: 1.55 },
            { ...DEFAULT_TEXT, id: 'bfc8', text: '▌ CAREER SNAPSHOT', x: 50, y: 460, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#f59e0b' },
            { ...DEFAULT_TEXT, id: 'bfc9', text: 'Principal Consultant  —  McKinsey & Company (Assoc.)  —  2020–Present\nSenior Analyst  —  Bain & Company  —  2017–2020\nAnalyst  —  Boston Consulting Group  —  2015–2017', x: 50, y: 482, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1c1917', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'bfc10', text: '▌ EDUCATION', x: 50, y: 548, width: A4_WIDTH - 100, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#f59e0b' },
            { ...DEFAULT_TEXT, id: 'bfc11', text: 'MBA (Strategy)  —  IIM Calcutta  —  2015   |   B.Tech  —  NIT Trichy  —  2013', x: 50, y: 570, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1c1917' },
        ]
    },

    {   // Universal Functional Corporate
        id: 'univ-func-corporate', name: 'Universal Functional',
        format: 'functional', profession: 'universal', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'ufc1', text: 'MEENA RAJAN', x: 50, y: 48, width: A4_WIDTH - 100, fontSize: 30, fontWeight: 'bold', fontFamily: 'Arial', color: '#111827' },
            { ...DEFAULT_TEXT, id: 'ufc2', text: 'Professional Resume  ·  Open to Opportunities', x: 50, y: 88, width: A4_WIDTH - 100, fontSize: 12, fontFamily: 'Arial', color: '#22c55e' },
            { ...DEFAULT_TEXT, id: 'ufc3', text: 'meena.rajan@email.com  |  +91 9888 000 111  |  Chennai, India  |  linkedin.com/in/meenarajan', x: 50, y: 110, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'ufc4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 130, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Arial', color: '#22c55e' },
            { ...DEFAULT_TEXT, id: 'ufc5', text: 'OBJECTIVE', x: 50, y: 143, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#111827', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ufc6', text: 'Versatile professional with 7 years of cross-industry experience in operations, client management, and process improvement. Seeking to apply strong analytical and leadership skills in a dynamic organisation.', x: 50, y: 163, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ufc7', text: 'KEY SKILLS', x: 50, y: 210, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#111827', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ufc8', text: 'Leadership & Team Management\n• Led 14-person cross-functional team to deliver ₹2.4Cr project on time and 8% under budget\n• Implemented weekly sprint reviews improving on-time delivery rate from 71% to 92%\n\nClient Relations & Communication\n• Managed 22 enterprise client accounts with 96% renewal rate\n• Presented quarterly business reviews to C-suite stakeholders across 5 industries\n\nProcess Improvement\n• Deployed Kaizen methodology cutting process waste by 18%\n• Created SOP library of 60+ procedures standardising operations across 3 offices', x: 50, y: 230, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.55 },
            { ...DEFAULT_TEXT, id: 'ufc9', text: 'EMPLOYMENT HISTORY', x: 50, y: 400, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#111827', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ufc10', text: 'Operations Manager  —  Mahindra Logistics  —  2020–Present\nClient Success Manager  —  Freshworks  —  2017–2020', x: 50, y: 420, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'ufc11', text: 'EDUCATION', x: 50, y: 470, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#111827', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ufc12', text: 'BBA  —  Christ University, Bangalore  —  2016   |   PMP Certified  ·  Six Sigma Green Belt', x: 50, y: 490, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#374151' },
        ]
    },

    // ── Professional Templates — Combination ──────────────────────

    {   // IT Combination Minimal
        id: 'it-combo-minimal', name: 'IT Combination',
        format: 'combination', profession: 'it', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 'icm1', text: 'KRISHNA RAJAN', x: 50, y: 55, width: 500, fontSize: 28, fontWeight: '700', fontFamily: 'Helvetica', color: '#0f0f0f' },
            { ...DEFAULT_TEXT, id: 'icm2', text: 'Machine Learning Engineer', x: 50, y: 91, width: 400, fontSize: 14, fontFamily: 'Helvetica', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'icm3', text: 'krishna@mlresearch.ai    github.com/krishnar    linkedin.com/in/krishnar    Bangalore', x: 50, y: 113, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Helvetica', color: '#9ca3af' },
            { ...DEFAULT_TEXT, id: 'icm4', text: '─────────────────────────────────────────────────────────────────', x: 50, y: 135, width: A4_WIDTH - 100, fontSize: 8, fontFamily: 'Helvetica', color: '#e5e7eb' },
            { ...DEFAULT_TEXT, id: 'icm5', text: 'About', x: 50, y: 154, width: 110, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'icm6', text: 'ML engineer with 5 years building and shipping production ML systems at scale. Expertise in NLP, recommendation, and anomaly detection. Published 2 papers at NeurIPS. Seeking to solve high-impact problems at the intersection of AI and product.', x: 168, y: 154, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'icm7', text: 'Skills', x: 50, y: 218, width: 110, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'icm8', text: 'ML/AI:       PyTorch · TensorFlow · scikit-learn · HuggingFace · LangChain\nEngineering: Python · FastAPI · Spark · Kafka · Airflow · Kubernetes\nData:        SQL · dbt · Snowflake · BigQuery · Pandas · MLflow', x: 168, y: 218, width: A4_WIDTH - 218, fontSize: 10, fontFamily: 'Courier New', color: '#374151', lineHeight: 1.75 },
            { ...DEFAULT_TEXT, id: 'icm9', text: 'Experience', x: 50, y: 292, width: 110, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'icm10', text: 'Machine Learning Engineer II  ·  Google  —  2022–Present\n• Built real-time fraud detection model with 99.3% precision on 50M+ daily requests\n• Reduced model training cost by $480K/yr via distributed training optimisation\n• Led team of 3 MLEs delivering personalised YouTube Shorts ranking model\n\nMLE I  ·  Flipkart  —  2019–2022\n• Shipped product recommendation engine driving 14% GMV uplift\n• Authored internal ML platform reducing feature deployment time by 60%', x: 168, y: 292, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'icm11', text: 'Education', x: 50, y: 444, width: 110, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'icm12', text: 'M.Tech AI  —  IISc Bangalore  —  2019    B.Tech CS  —  IIT Madras  —  2017', x: 168, y: 444, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151' },
        ]
    },

    {   // HR Combination Creative
        id: 'hr-combo-creative', name: 'HR Combination',
        format: 'combination', profession: 'hr', design: 'creative',
        elements: [
            { ...DEFAULT_TEXT, id: 'hcc1', text: 'AISHA\nKHAN', x: 50, y: 40, width: 360, fontSize: 50, fontWeight: '900', fontFamily: 'Arial', color: '#0ea5e9', lineHeight: 1.0 },
            { ...DEFAULT_TEXT, id: 'hcc2', text: 'TALENT ACQUISITION DIRECTOR  |  EMPLOYER BRANDING', x: 50, y: 152, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#64748b', letterSpacing: 3, fontWeight: '600' },
            { ...DEFAULT_TEXT, id: 'hcc3', text: 'aisha.k@talent.co  ╱  +91 97000 88222  ╱  linkedin.com/in/aishakhan', x: 50, y: 174, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Arial', color: '#94a3b8' },
            { ...DEFAULT_TEXT, id: 'hcc4', text: '▌ PROFILE', x: 50, y: 210, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'hcc5', text: 'Strategic TA leader with 11 years scaling recruitment for hypergrowth tech startups (Series A to unicorn). Built 3 talent functions from scratch. Hired 1,200+ employees across engineering, product, and GTM. Known for cutting time-to-hire by 35% while improving offer acceptance to 91%.', x: 50, y: 232, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1e293b', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'hcc6', text: '▌ RECRUITMENT EXPERTISE', x: 50, y: 290, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'hcc7', text: 'Bulk Tech Hiring  ·  Executive Search  ·  Boolean Sourcing  ·  Campus Recruitment  ·  Employer Branding  ·  Applicant Tracking (Greenhouse, Lever, iCIMS)  ·  Diversity & Inclusion Hiring  ·  Workforce Analytics  ·  HRBP Partnership', x: 50, y: 312, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1e293b' },
            { ...DEFAULT_TEXT, id: 'hcc8', text: '▌ EXPERIENCE', x: 50, y: 360, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'hcc9', text: 'Director — Talent Acquisition', x: 50, y: 382, width: 360, fontSize: 12, fontWeight: 'bold', fontFamily: 'Arial', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'hcc10', text: 'Zepto  ·  Mumbai  ·  2022–Present', x: 50, y: 400, width: 360, fontSize: 11, fontFamily: 'Arial', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'hcc11', text: '• Built TA function from 2 to 18 recruiters supporting 0→3,000 headcount in 18 months\n• Launched "Zepto Careers" brand – 4.2★ Glassdoor rating, 40% increase in inbound applicants\n• Implemented structured panel interviews reducing subjectivity bias by 55%', x: 68, y: 422, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Arial', color: '#374155', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'hcc12', text: '▌ EDUCATION', x: 50, y: 488, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'hcc13', text: 'MBA (HRM & OB)  —  TISS Mumbai  —  2013   |   BA Sociology  —  Delhi University  —  2011', x: 50, y: 510, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Arial', color: '#1e293b' },
        ]
    },

    {   // Business Combination Corporate
        id: 'biz-combo-corporate', name: 'Business Combination',
        format: 'combination', profession: 'business', design: 'corporate',
        elements: [
            { ...DEFAULT_TEXT, id: 'bcc1', text: 'VIKRAM MALHOTRA', x: 50, y: 48, width: A4_WIDTH - 100, fontSize: 30, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e' },
            { ...DEFAULT_TEXT, id: 'bcc2', text: 'Vice President — Business Development & Partnerships', x: 50, y: 88, width: A4_WIDTH - 100, fontSize: 12, fontFamily: 'Georgia', color: '#f59e0b', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'bcc3', text: 'vikram.m@bizdev.in  |  +91 98765 43210  |  Gurgaon, India  |  linkedin.com/in/vikramm', x: 50, y: 110, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Georgia', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'bcc4', text: '──────────────────────────────────────────────────────────────────────────────', x: 50, y: 130, width: A4_WIDTH - 100, fontSize: 7, fontFamily: 'Georgia', color: '#f59e0b' },
            { ...DEFAULT_TEXT, id: 'bcc5', text: 'EXECUTIVE SUMMARY', x: 50, y: 143, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'bcc6', text: 'Revenue-focused BD leader with 14 years generating ₹1,200Cr+ in partnerships and new business across B2B SaaS, EdTech, and B2B Retail. Expert at building C-suite relationships, structuring strategic alliances, and leading large deal negotiations from pitch to close.', x: 50, y: 163, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'bcc7', text: 'CORE COMPETENCIES', x: 50, y: 221, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'bcc8', text: 'Strategic Partnerships  ·  Enterprise Sales  ·  Deal Structuring  ·  Channel Management  ·  Revenue Forecasting  ·  Stakeholder Management  ·  CRM (Salesforce)  ·  Contract Negotiation  ·  P&L Ownership', x: 50, y: 241, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'bcc9', text: 'CAREER EXPERIENCE', x: 50, y: 285, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'bcc10', text: 'VP — Business Development', x: 50, y: 305, width: 360, fontSize: 13, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e' },
            { ...DEFAULT_TEXT, id: 'bcc11', text: 'Byju\'s  ·  Gurgaon', x: 50, y: 323, width: 280, fontSize: 11, fontFamily: 'Georgia', color: '#64748b', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'bcc12', text: '2020 – Present', x: A4_WIDTH - 210, y: 305, width: 160, fontSize: 11, textAlign: 'right', fontFamily: 'Georgia', color: '#64748b' },
            { ...DEFAULT_TEXT, id: 'bcc13', text: '• Generated ₹380Cr in strategic school & university partnerships in FY23\n• Signed 14 state govt. MoUs covering 6.2M students — largest in EdTech sector\n• Built channel partner network of 320 agents with ₹95Cr attributed revenue\n• Managed BD team of 22 across 6 cities with average quota attainment of 118%', x: 68, y: 345, width: A4_WIDTH - 118, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.5 },
            { ...DEFAULT_TEXT, id: 'bcc14', text: 'EDUCATION', x: 50, y: 438, width: A4_WIDTH - 100, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#1a1a2e', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'bcc15', text: 'MBA (Marketing)  —  FMS Delhi  —  2010   |   B.Tech  —  NSIT Delhi  —  2008', x: 50, y: 458, width: A4_WIDTH - 100, fontSize: 11, fontFamily: 'Georgia', color: '#374151' },
        ]
    },

    {   // Universal Combination Minimal
        id: 'univ-combo-minimal', name: 'Universal Hybrid',
        format: 'combination', profession: 'universal', design: 'minimal',
        elements: [
            { ...DEFAULT_TEXT, id: 'ucm1', text: 'PRIYA SRIDHAR', x: 50, y: 55, width: 500, fontSize: 30, fontWeight: '700', fontFamily: 'Helvetica', color: '#111827' },
            { ...DEFAULT_TEXT, id: 'ucm2', text: 'Project Manager  ·  PMP  ·  CSM', x: 50, y: 94, width: 400, fontSize: 13, fontFamily: 'Helvetica', color: '#6b7280' },
            { ...DEFAULT_TEXT, id: 'ucm3', text: 'priya.s@pmexpert.com    +91 9700 123 456    Hyderabad, India    linkedin.com/in/priyasr', x: 50, y: 116, width: A4_WIDTH - 100, fontSize: 10, fontFamily: 'Helvetica', color: '#9ca3af' },
            { ...DEFAULT_TEXT, id: 'ucm4', text: '─────────────────────────────────────────────────────────────────', x: 50, y: 138, width: A4_WIDTH - 100, fontSize: 8, fontFamily: 'Helvetica', color: '#e5e7eb' },
            { ...DEFAULT_TEXT, id: 'ucm5', text: 'Summary', x: 50, y: 156, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ucm6', text: 'Certified PMP project manager with 8 years delivering complex software and infrastructure projects across Banking, Healthcare, and E-Commerce. Managed portfolios worth ₹50Cr+. Expert in Agile, Scrum, and Waterfall frameworks.', x: 168, y: 156, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ucm7', text: 'Key Skills', x: 50, y: 218, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ucm8', text: 'Project Management  ·  Agile / Scrum / Kanban  ·  Risk Management  ·  Budgeting  ·  Stakeholder Communication  ·  JIRA  ·  Confluence  ·  MS Project  ·  Change Management  ·  Vendor Management', x: 168, y: 218, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'ucm9', text: 'Experience', x: 50, y: 270, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ucm10', text: 'Senior PM  ·  ICICI Bank Technology — 2021–Present\n• Delivered 12 core banking modules across 6 sprints with zero critical defect escapes\n• Managed ₹18Cr digital transformation budget; delivered 9% under forecast\n• Reduced project risks by 38% through weekly stakeholder risk workshops\n\nProject Manager  ·  TCS — 2016–2021\n• Led 7 client projects (JPMorgan, HDFC Life) with avg CSAT of 4.7/5\n• Implemented PMO governance reducing project overrun rate from 62% to 14%', x: 168, y: 270, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ucm11', text: 'Education', x: 50, y: 428, width: 110, fontSize: 11, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#374151', letterSpacing: 1 },
            { ...DEFAULT_TEXT, id: 'ucm12', text: 'MBA (IT & Operations)  —  ISB Hyderabad  —  2016\nBE Computer Science  —  JNTU Hyderabad  —  2013\nPMP Certified  ·  CSM  ·  PRINCE2 Practitioner', x: 168, y: 428, width: A4_WIDTH - 218, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.7 },
        ]
    },

    // ── ATS-Friendly Photo Templates ──────────────────────────────
    {
        id: 'photo-modern-it', name: 'Photo — IT Modern',
        format: 'chronological', profession: 'it', design: 'corporate',
        hasPhoto: true,
        elements: [
            { type: 'image', id: 'ph1', x: 30, y: 30, width: 110, height: 110, rounded: true, src: '' },
            { ...DEFAULT_TEXT, id: 'phi1', text: 'RAHUL SHARMA', x: 160, y: 38, width: 500, fontSize: 26, fontWeight: 'bold', fontFamily: 'Arial', color: '#1e293b' },
            { ...DEFAULT_TEXT, id: 'phi2', text: 'Senior Software Engineer', x: 160, y: 72, width: 500, fontSize: 14, fontFamily: 'Arial', color: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'phi3', text: 'rahul@techdev.io  |  github.com/rahuls  |  linkedin.com/in/rahuls  |  Bangalore', x: 160, y: 95, width: A4_WIDTH - 210, fontSize: 10, fontFamily: 'Arial', color: '#64748b' },
            { type: 'line', id: 'phi4', x: 30, y: 155, width: A4_WIDTH - 65, height: 1, lineColor: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'phi5', text: 'PROFESSIONAL SUMMARY', x: 30, y: 168, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phi6', text: 'Full-stack engineer with 6 years building scalable web applications for fintech and SaaS products. Expert in React, Node.js and AWS. Reduced deployment pipeline time by 65% and improved system uptime to 99.9% at previous role.', x: 30, y: 188, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'phi7', text: 'TECHNICAL SKILLS', x: 30, y: 238, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phi8', text: 'Frontend: React, Next.js, TypeScript, Redux\nBackend:  Node.js, Express, Python, FastAPI\nCloud:    AWS (EC2, S3, Lambda), Docker, Kubernetes\nDB:       PostgreSQL, MongoDB, Redis', x: 30, y: 258, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Courier New', color: '#374151', lineHeight: 1.7 },
            { ...DEFAULT_TEXT, id: 'phi9', text: 'WORK EXPERIENCE', x: 30, y: 338, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phi10', text: 'Senior Engineer  ·  Razorpay  —  Mar 2022–Present\n• Architected checkout micro-frontend serving 8M+ daily transactions\n• Reduced API latency by 55% via Redis caching and query optimisation\n• Mentored 4 junior engineers, led weekly design reviews', x: 30, y: 360, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'phi11', text: 'EDUCATION', x: 30, y: 444, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#7c3aed', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phi12', text: 'B.Tech Computer Science  —  IIT Delhi  —  2019    |    GPA 8.9/10', x: 30, y: 464, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151' },
        ]
    },
    {
        id: 'photo-executive', name: 'Photo — Executive',
        format: 'chronological', profession: 'business', design: 'corporate',
        hasPhoto: true,
        elements: [
            { type: 'image', id: 'ph2', x: 30, y: 30, width: 100, height: 120, rounded: false, src: '' },
            { ...DEFAULT_TEXT, id: 'pex1', text: 'ANANYA KRISHNAN', x: 150, y: 36, width: 550, fontSize: 28, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'pex2', text: 'Chief Marketing Officer', x: 150, y: 74, width: 550, fontSize: 14, fontFamily: 'Georgia', color: '#f59e0b', fontStyle: 'italic' },
            { ...DEFAULT_TEXT, id: 'pex3', text: 'ananya@cmo.in  |  +91 98100 22233  |  Mumbai  |  linkedin.com/in/ananyak', x: 150, y: 98, width: A4_WIDTH - 200, fontSize: 10, fontFamily: 'Georgia', color: '#64748b' },
            { type: 'line', id: 'pex4', x: 30, y: 165, width: A4_WIDTH - 65, height: 2, lineColor: '#f59e0b' },
            { ...DEFAULT_TEXT, id: 'pex5', text: 'EXECUTIVE PROFILE', x: 30, y: 178, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pex6', text: 'Growth-obsessed CMO with 15 years building iconic D2C and B2B brands across FMCG, FinTech, and EdTech. Generated ₹800Cr+ in attributable revenue through integrated marketing campaigns, performance marketing, and brand strategy. Led teams of 40+ marketers across 3 countries.', x: 30, y: 200, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'pex7', text: 'EXPERIENCE', x: 30, y: 260, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pex8', text: 'CMO  \u00b7  CRED  \u2014  2021\u2013Present\n\u2022 Grew MAU from 3M to 11M with \u20b90 in paid UA through product-led growth\n\u2022 Launched CRED brand campaign \u2014 300M+ views across platforms\n\nVP Marketing  \u00b7  PhonePe  \u2014  2017\u20132021\n\u2022 Led digital marketing generating \u20b9420Cr attributed GMV in FY20\n\u2022 Built brand from 0 to 35% aided awareness in 24 months', x: 30, y: 282, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Georgia', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'pex9', text: 'EDUCATION', x: 30, y: 420, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Georgia', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pex10', text: 'MBA (Marketing)  —  IIM Ahmedabad  —  2009    |    B.Com (Hons)  —  SRCC Delhi  —  2007', x: 30, y: 441, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Georgia', color: '#374151' },
        ]
    },
    {
        id: 'photo-hr-clean', name: 'Photo — HR Clean',
        format: 'chronological', profession: 'hr', design: 'minimal',
        hasPhoto: true,
        elements: [
            { type: 'image', id: 'ph3', x: A4_WIDTH - 145, y: 28, width: 115, height: 115, rounded: true, src: '' },
            { ...DEFAULT_TEXT, id: 'phr1', text: 'MEERA RAO', x: 30, y: 38, width: 500, fontSize: 36, fontWeight: '800', fontFamily: 'Arial', color: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'phr2', text: 'HR Business Partner', x: 30, y: 84, width: 500, fontSize: 14, fontFamily: 'Arial', color: '#334155' },
            { ...DEFAULT_TEXT, id: 'phr3', text: 'meera.rao@hrbp.in  ·  +91 96000 55111  ·  Pune  ·  linkedin.com/in/meerarao', x: 30, y: 106, width: 600, fontSize: 10, fontFamily: 'Arial', color: '#64748b' },
            { type: 'line', id: 'phr4', x: 30, y: 160, width: A4_WIDTH - 65, height: 1, lineColor: '#0ea5e9' },
            { ...DEFAULT_TEXT, id: 'phr5', text: 'ABOUT ME', x: 30, y: 172, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phr6', text: 'Strategic HRBP with 9 years aligning people strategy to business outcomes. Supported businesses of 200–2,000+ employees at Infosys, Swiggy, and Meesho. Expert in talent management, change management, and culture building.', x: 30, y: 192, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'phr7', text: 'CORE HR SKILLS', x: 30, y: 243, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phr8', text: 'Employee Relations  ·  Performance Management  ·  OKR Facilitation  ·  Compensation  ·  L&D  ·  Succession Planning  ·  HRIS (Workday, SAP)  ·  Diversity & Inclusion', x: 30, y: 263, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#334155' },
            { ...DEFAULT_TEXT, id: 'phr9', text: 'EXPERIENCE', x: 30, y: 302, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phr10', text: 'HRBP Lead  ·  Meesho  —  2021–Present\n• Partnered with 6 business units (1,400 employees) on talent strategy\n• Reduced voluntary attrition from 28% to 18% through stay interview program\n\nHRBP  ·  Swiggy  —  2017–2021\n• Managed RM function for 800-member operations team across 5 cities\n• Launched culture score survey — engagement improved from 58% to 76%', x: 30, y: 323, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#334155', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'phr11', text: 'EDUCATION', x: 30, y: 445, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#0ea5e9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'phr12', text: 'MBA (HRM)  —  Symbiosis Pune  —  2015    |    B.A. Psychology  —  Fergusson College  —  2013', x: 30, y: 465, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#334155' },
        ]
    },
    {
        id: 'photo-creative-designer', name: 'Photo — Creative Pro',
        format: 'combination', profession: 'universal', design: 'creative',
        hasPhoto: true,
        elements: [
            { ...DEFAULT_TEXT, id: 'pcd0', text: '█', x: 0, y: 0, width: 220, fontSize: 1800, fontFamily: 'Arial', color: '#6d28d9', opacity: 0.08 },
            { type: 'image', id: 'ph4', x: 36, y: 36, width: 100, height: 100, rounded: true, src: '' },
            { ...DEFAULT_TEXT, id: 'pcd1', text: 'ARJUN\nMATHEWS', x: 155, y: 36, width: 540, fontSize: 34, fontWeight: '900', fontFamily: 'Arial', color: '#1a0533', lineHeight: 1.05 },
            { ...DEFAULT_TEXT, id: 'pcd2', text: 'UI/UX Designer', x: 155, y: 112, width: 400, fontSize: 13, fontFamily: 'Arial', color: '#7c3aed', fontWeight: '600' },
            { ...DEFAULT_TEXT, id: 'pcd3', text: 'arjun@uxcraft.in  ·  behance.net/arjunm  ·  dribbble.com/arjunm  ·  Bangalore', x: 155, y: 132, width: 540, fontSize: 10, fontFamily: 'Arial', color: '#6b7280' },
            { type: 'line', id: 'pcd4', x: 30, y: 155, width: A4_WIDTH - 65, height: 2, lineColor: '#7c3aed' },
            { ...DEFAULT_TEXT, id: 'pcd5', text: 'PROFILE', x: 30, y: 168, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#6d28d9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pcd6', text: 'Award-winning UI/UX designer with 7 years crafting inclusive, conversion-focused digital experiences for B2C products. Portfolio encompasses 30+ shipped products with combined 50M+ users. Expertise in design systems, motion design, and design sprints.', x: 30, y: 188, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'pcd7', text: 'SKILLS', x: 30, y: 243, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#6d28d9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pcd8', text: 'Figma  ·  Protopie  ·  Framer  ·  Adobe XD  ·  Lottie  ·  Design Systems  ·  User Research  ·  Usability Testing  ·  Accessibility (WCAG 2.1)  ·  HTML/CSS basics', x: 30, y: 263, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151' },
            { ...DEFAULT_TEXT, id: 'pcd9', text: 'EXPERIENCE', x: 30, y: 305, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#6d28d9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pcd10', text: 'Lead Product Designer  ·  Groww  —  2021–Present\n• Redesigned onboarding flow — improved D7 activation from 34% to 61%\n• Built and shipped Groww Design System adopted by 8 product teams\n• Won 2023 Awwwards — Site of the Day for Groww IPO dashboard\n\nUI/UX Designer  ·  Oyo  —  2017–2021\n• Shipped 12 major features for Oyo Partner app (2M+ downloads)\n• Led design for "Smart Pricing" dashboard reducing CS tickets by 44%', x: 30, y: 327, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'pcd11', text: 'EDUCATION', x: 30, y: 468, width: A4_WIDTH - 60, fontSize: 11, fontWeight: 'bold', fontFamily: 'Arial', color: '#6d28d9', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'pcd12', text: 'B.Des (UX)  —  NID Ahmedabad  —  2017', x: 30, y: 488, width: A4_WIDTH - 60, fontSize: 11, fontFamily: 'Arial', color: '#374151' },
        ]
    },
    {
        id: 'photo-minimal-two-col', name: 'Photo — Two Column',
        format: 'chronological', profession: 'universal', design: 'minimal',
        hasPhoto: true,
        elements: [
            // Left sidebar strip (dark)
            { ...DEFAULT_TEXT, id: 'ptc0a', text: '', x: 0, y: 0, width: 220, fontSize: 12, fontFamily: 'Arial', color: '#1e293b', opacity: 1 },
            { type: 'image', id: 'ph5', x: 22, y: 28, width: 96, height: 96, rounded: true, src: '' },
            { ...DEFAULT_TEXT, id: 'ptc1', text: 'CONTACT', x: 18, y: 145, width: 184, fontSize: 9, fontWeight: 'bold', fontFamily: 'Arial', color: '#06b6d4', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ptc2', text: '✉ yourname@email.com\n☎ +91 9800 000 000\n⌂ City, India\nin linkedin.com/in/name', x: 18, y: 162, width: 184, fontSize: 10, fontFamily: 'Arial', color: '#e2e8f0', lineHeight: 1.75 },
            { ...DEFAULT_TEXT, id: 'ptc3', text: 'EDUCATION', x: 18, y: 258, width: 184, fontSize: 9, fontWeight: 'bold', fontFamily: 'Arial', color: '#06b6d4', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ptc4', text: 'B.Tech / MBA\nUniversity Name\n2015 – 2019', x: 18, y: 275, width: 184, fontSize: 10, fontFamily: 'Arial', color: '#e2e8f0', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ptc5', text: 'SKILLS', x: 18, y: 335, width: 184, fontSize: 9, fontWeight: 'bold', fontFamily: 'Arial', color: '#06b6d4', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ptc6', text: '• Skill One\n• Skill Two\n• Skill Three\n• Skill Four\n• Skill Five', x: 18, y: 352, width: 184, fontSize: 10, fontFamily: 'Arial', color: '#e2e8f0', lineHeight: 1.7 },
            // Right main area
            { ...DEFAULT_TEXT, id: 'ptc7', text: 'YOUR NAME', x: 244, y: 38, width: 520, fontSize: 28, fontWeight: '800', fontFamily: 'Helvetica', color: '#0f172a' },
            { ...DEFAULT_TEXT, id: 'ptc8', text: 'Job Title Here', x: 244, y: 76, width: 520, fontSize: 14, fontFamily: 'Helvetica', color: '#06b6d4', fontWeight: '600' },
            { type: 'line', id: 'ptc8b', x: 244, y: 100, width: 520, height: 1, lineColor: '#06b6d4' },
            { ...DEFAULT_TEXT, id: 'ptc9', text: 'SUMMARY', x: 244, y: 113, width: 520, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ptc10', text: 'Dynamic professional with X years of experience delivering results in [your field]. Known for [key strength]. Passionate about [area].', x: 244, y: 130, width: 520, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
            { ...DEFAULT_TEXT, id: 'ptc11', text: 'WORK EXPERIENCE', x: 244, y: 185, width: 520, fontSize: 10, fontWeight: 'bold', fontFamily: 'Helvetica', color: '#0f172a', letterSpacing: 2 },
            { ...DEFAULT_TEXT, id: 'ptc12', text: 'Job Title  ·  Company Name  —  2021–Present\n• Key achievement with quantified result\n• Led initiative that improved metric by X%\n• Managed team / project / budget of size Y\n\nJob Title  ·  Previous Company  —  2018–2021\n• Delivered X outcome\n• Contributed to Y result', x: 244, y: 205, width: 520, fontSize: 11, fontFamily: 'Helvetica', color: '#374151', lineHeight: 1.6 },
        ]
    },

];


// Pre-built Resume Section Blocks
export const SECTION_BLOCKS = [
    {
        id: 'header-block', name: 'Header', icon: 'fa-user',
        description: 'Name, title & contact',
        elements: [
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_1', text: 'YOUR NAME', x: 50, y: 50, width: 500, fontSize: 32, fontWeight: 'bold', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_2', text: 'Job Title', x: 50, y: 92, width: 500, fontSize: 16, color: '#555' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_3', text: 'email@example.com  |  +1 555 000 0000  |  City, State', x: 50, y: 118, width: A4_WIDTH - 100, fontSize: 11, color: '#777' },
        ]
    },
    {
        id: 'summary-block', name: 'Summary', icon: 'fa-align-left',
        description: 'Professional summary',
        elements: [
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_1', text: 'PROFESSIONAL SUMMARY', x: 50, y: 160, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_2', text: 'Motivated professional with X years of experience in [your field]. Demonstrated success in [key achievement]. Seeking to leverage expertise in [target role].', x: 50, y: 184, width: A4_WIDTH - 100, fontSize: 11, color: '#333' },
        ]
    },
    {
        id: 'experience-block', name: 'Experience', icon: 'fa-briefcase',
        description: 'Work experience entry',
        elements: [
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_1', text: 'EXPERIENCE', x: 50, y: 240, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_2', text: 'Job Title', x: 50, y: 264, width: 300, fontSize: 12, fontWeight: 'bold', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_3', text: 'Company Name, City', x: 50, y: 282, width: 300, fontSize: 11, color: '#555' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_4', text: 'Month Year – Month Year', x: A4_WIDTH - 230, y: 264, width: 180, fontSize: 11, textAlign: 'right', color: '#555' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_5', text: '• Key achievement or responsibility\n• Key achievement or responsibility\n• Key achievement or responsibility', x: 68, y: 302, width: A4_WIDTH - 118, fontSize: 11, color: '#333' },
        ]
    },
    {
        id: 'education-block', name: 'Education', icon: 'fa-graduation-cap',
        description: 'Education entry',
        elements: [
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_1', text: 'EDUCATION', x: 50, y: 380, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_2', text: 'Degree in Major', x: 50, y: 404, width: 350, fontSize: 12, fontWeight: 'bold', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_3', text: 'University Name, City — Graduation Year', x: 50, y: 422, width: 400, fontSize: 11, color: '#555' },
        ]
    },
    {
        id: 'skills-block', name: 'Skills', icon: 'fa-tools',
        description: 'Skills section',
        elements: [
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_1', text: 'SKILLS', x: 50, y: 460, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_2', text: 'Technical:  Skill 1  •  Skill 2  •  Skill 3  •  Skill 4\nSoft Skills:  Leadership  •  Communication  •  Problem Solving', x: 50, y: 484, width: A4_WIDTH - 100, fontSize: 11, color: '#333' },
        ]
    },
    {
        id: 'contact-block', name: 'Contact', icon: 'fa-phone',
        description: 'Contact information',
        elements: [
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_1', text: 'CONTACT', x: 50, y: 540, width: A4_WIDTH - 100, fontSize: 13, fontWeight: 'bold', textDecoration: 'underline', color: '#111' },
            { ...DEFAULT_TEXT, id: () => 'sb_' + Date.now() + '_2', text: '✉  email@example.com\n☎  +1 (555) 000-0000\n⌂  City, State, Country\nin  linkedin.com/in/yourname\n⌨  github.com/yourusername', x: 50, y: 564, width: 300, fontSize: 11, color: '#333', lineHeight: 1.8 },
        ]
    },
];
