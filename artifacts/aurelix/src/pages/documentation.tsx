import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { ChevronRight, Terminal, Cpu, Shield, Zap, Book, Code2, Globe, Lock } from 'lucide-react'

const sections = [
  { id: 'introduction', label: 'Introduction', icon: Book },
  { id: 'overview', label: 'Company Overview', icon: Globe },
  { id: 'ecosystem', label: 'Product Ecosystem', icon: Cpu },
  { id: 'afromuse-api', label: 'AfroMuse AI API', icon: Code2 },
  { id: 'gtpro-api', label: 'GTPro API', icon: Zap },
  { id: 'stageone-api', label: 'STAGEONE API', icon: Terminal },
  { id: 'cyber-api', label: 'Cyber Intelligence', icon: Shield },
  { id: 'authentication', label: 'Authentication', icon: Lock },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-black border border-gold/20 rounded-sm p-4 overflow-x-auto text-xs font-mono text-gold/80 my-4">
      <code>{children}</code>
    </pre>
  )
}

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs tracking-widest text-gold bg-gold/10 border border-gold/20 rounded-full mb-4">
      {label}
    </span>
  )
}

export default function DocumentationPage() {
  const [active, setActive] = useState('introduction')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 flex gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-28">
            <p className="text-xs tracking-widest text-muted-foreground mb-4 uppercase">Contents</p>
            <nav className="space-y-1">
              {sections.map((s) => {
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActive(s.id)
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-sm text-left transition-all ${
                      active === s.id
                        ? 'bg-gold/10 text-gold border border-gold/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <Icon size={14} />
                    {s.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 space-y-20">

          {/* Introduction */}
          <section id="introduction">
            <SectionTag label="GETTING STARTED" />
            <h1 className="font-display text-4xl tracking-wider text-gold-gradient mb-4">Introduction</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to the AURELIX SYSTEMS developer documentation. This resource provides technical references,
              integration guides, and API specifications for all AURELIX intelligence products. Our platform is designed
              for developers, enterprises, and AI researchers building next-generation systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AURELIX SYSTEMS operates a suite of modular AI platforms — each built around a specific domain of
              human intelligence amplification. From creative tooling to financial intelligence and cybersecurity,
              our APIs are designed to integrate seamlessly into any production stack.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'REST APIs', desc: 'JSON over HTTPS, fully typed' },
                { label: 'WebSocket Streams', desc: 'Real-time data pipelines' },
                { label: 'SDK Support', desc: 'Node.js, Python, Go (coming soon)' },
              ].map((item) => (
                <div key={item.label} className="p-4 border border-gold/15 rounded-sm bg-secondary/20">
                  <p className="text-sm font-medium text-gold mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Overview */}
          <section id="overview">
            <SectionTag label="COMPANY" />
            <h2 className="font-display text-3xl tracking-wider mb-4">Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AURELIX SYSTEMS was founded in 2024 with a singular mission: to build intelligent infrastructure for a
              better future. Operating globally, AURELIX develops modular AI products targeting four high-impact sectors
              — creative industries, financial markets, enterprise automation, and digital security.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our engineering philosophy emphasises modularity, scalability, and human-centricity. Every system we
              build is designed to augment human capability without replacing human judgement.
            </p>
            <div className="border border-gold/20 rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Founded', '2024'],
                    ['Headquarters', 'Global Operations'],
                    ['Focus Areas', 'Creative AI · Financial Intelligence · Automation · Cybersecurity'],
                    ['Stack', 'TypeScript · Python · Rust · PostgreSQL · Kubernetes'],
                    ['Contact', 'aurelixsystemz@gmail.com'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-gold/10 last:border-0">
                      <td className="px-4 py-3 text-muted-foreground w-36">{k}</td>
                      <td className="px-4 py-3 text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ecosystem */}
          <section id="ecosystem">
            <SectionTag label="PRODUCTS" />
            <h2 className="font-display text-3xl tracking-wider mb-4">Product Ecosystem</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The AURELIX ecosystem is composed of four flagship AI platforms, each targeting a distinct intelligence domain.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'AfroMuse AI', tag: 'Creative Intelligence', desc: 'AI-powered music creation, production assistance, and cultural expression tools for the African creative economy.', status: 'Beta' },
                { name: 'GTPro', tag: 'Financial Intelligence', desc: 'Algorithmic trading intelligence system with real-time market analysis, signal generation, and portfolio automation.', status: 'Beta' },
                { name: 'STAGEONE', tag: 'Enterprise Automation', desc: 'End-to-end business process automation powered by adaptive AI agents for enterprise workflows.', status: 'Coming Soon' },
                { name: 'Cyber Intelligence', tag: 'Security', desc: 'AI-driven threat detection, vulnerability assessment, and real-time digital security monitoring.', status: 'Coming Soon' },
              ].map((p) => (
                <div key={p.name} className="p-5 border border-gold/15 rounded-sm bg-secondary/10 hover:border-gold/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-display text-base text-foreground">{p.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${p.status === 'Beta' ? 'text-gold border-gold/30 bg-gold/10' : 'text-muted-foreground border-border'}`}>{p.status}</span>
                  </div>
                  <p className="text-xs text-gold/70 tracking-wider mb-2">{p.tag}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AfroMuse API */}
          <section id="afromuse-api">
            <SectionTag label="API REFERENCE" />
            <h2 className="font-display text-3xl tracking-wider mb-2">AfroMuse AI API</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The AfroMuse API provides programmatic access to our creative intelligence engine. Generate, analyse,
              and transform music with culturally-aware AI models trained on diverse African sonic traditions.
            </p>
            <h3 className="text-sm font-medium text-gold tracking-wider mb-2">Base URL</h3>
            <CodeBlock>{`https://api.afromuse.aurelixsystems.com/v1`}</CodeBlock>
            <h3 className="text-sm font-medium text-gold tracking-wider mb-2">Generate Track</h3>
            <CodeBlock>{`POST /generate
Content-Type: application/json
Authorization: Bearer <your_api_key>

{
  "genre": "afrobeats",
  "mood": "euphoric",
  "duration_seconds": 120,
  "bpm": 105,
  "instruments": ["kora", "drums", "bass"]
}`}</CodeBlock>
            <div className="p-4 bg-gold/5 border border-gold/20 rounded-sm text-sm text-muted-foreground">
              <span className="text-gold font-medium">Note:</span> The AfroMuse API is currently in closed beta. Request access at <span className="text-gold">aurelixsystemz@gmail.com</span>
            </div>
          </section>

          {/* GTPro API */}
          <section id="gtpro-api">
            <SectionTag label="API REFERENCE" />
            <h2 className="font-display text-3xl tracking-wider mb-2">GTPro API</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GTPro exposes a real-time financial intelligence API for algorithmic trading systems. Access market signals,
              portfolio analytics, and AI-generated trade recommendations.
            </p>
            <h3 className="text-sm font-medium text-gold tracking-wider mb-2">Market Signal Endpoint</h3>
            <CodeBlock>{`GET /signals?asset=BTC&timeframe=1h&model=v2
Authorization: Bearer <your_api_key>

// Response
{
  "asset": "BTC",
  "signal": "BUY",
  "confidence": 0.82,
  "entry_price": 68420.00,
  "targets": [70500, 73800],
  "stop_loss": 66100,
  "generated_at": "2026-05-08T12:00:00Z"
}`}</CodeBlock>
          </section>

          {/* Authentication */}
          <section id="authentication">
            <SectionTag label="SECURITY" />
            <h2 className="font-display text-3xl tracking-wider mb-4">Authentication</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All AURELIX API endpoints use Bearer token authentication. Include your API key in every request header.
            </p>
            <CodeBlock>{`// Every request must include:
Authorization: Bearer axs_live_xxxxxxxxxxxxxxxxxxxxxxxx`}</CodeBlock>
            <p className="text-muted-foreground text-sm leading-relaxed">
              API keys are scoped to specific products and environments (development / production). Keys are rotatable
              from the dashboard. Never expose your API key in client-side code.
            </p>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  )
}
