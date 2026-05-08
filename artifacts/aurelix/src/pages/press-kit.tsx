import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink } from 'lucide-react'

const brandColors = [
  { name: 'Aurelix Gold', hex: '#D4AF37', desc: 'Primary brand colour' },
  { name: 'Gold Light', hex: '#E5C84A', desc: 'Hover / accent' },
  { name: 'Background Black', hex: '#050505', desc: 'Primary background' },
  { name: 'Surface', hex: '#111111', desc: 'Card / panel surfaces' },
  { name: 'Foreground White', hex: '#F0ECE4', desc: 'Primary text' },
]

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 rounded-full mb-4">
            MEDIA & PRESS
          </span>
          <h1 className="font-display text-5xl tracking-wider text-gold-gradient mb-4">Press Kit</h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Resources for journalists, partners, and media professionals covering AURELIX SYSTEMS.
            All assets are approved for editorial use.
          </p>
        </motion.div>

        {/* Company Description */}
        <section className="mb-14">
          <h2 className="font-display text-2xl tracking-wider mb-4">Company Description</h2>
          <div className="p-6 border border-gold/15 rounded-sm bg-secondary/10 space-y-4">
            <div>
              <p className="text-xs text-gold tracking-widest mb-2">SHORT (50 words)</p>
              <p className="text-foreground leading-relaxed">
                AURELIX SYSTEMS is an AI infrastructure company building intelligent platforms for creativity, financial markets, enterprise automation, and cybersecurity. Founded in 2024, AURELIX develops next-generation AI tools designed to empower individuals and organisations with scalable, human-centred intelligence.
              </p>
            </div>
            <div className="border-t border-gold/10 pt-4">
              <p className="text-xs text-gold tracking-widest mb-2">EXTENDED (100 words)</p>
              <p className="text-foreground leading-relaxed">
                AURELIX SYSTEMS is a global AI infrastructure company building modular intelligence platforms across four verticals: creative AI, financial intelligence, enterprise automation, and digital security. Our flagship products — AfroMuse AI, GTPro, STAGEONE, and Cyber Intelligence — represent a new paradigm in applied artificial intelligence, where domain-specific models meet scalable infrastructure.
                Headquartered for global operations, AURELIX was founded in 2024 with a mission to democratise access to advanced AI capabilities for creators, enterprises, and security professionals. We believe intelligence should be a tool for empowerment, not a replacement for human ingenuity.
              </p>
            </div>
          </div>
        </section>

        {/* Logo Downloads */}
        <section className="mb-14">
          <h2 className="font-display text-2xl tracking-wider mb-4">Logo & Brand Assets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Primary Logo (PNG)', sub: 'Black background · 2000×2000px', gold: true },
              { label: 'Logo Mark Only (SVG)', sub: 'Scalable vector · All formats', gold: false },
              { label: 'Horizontal Lockup (PNG)', sub: 'White background · 3000×1000px', gold: false },
              { label: 'Dark Mono (PNG)', sub: 'Single-colour · Gold only', gold: true },
              { label: 'Light Mono (PNG)', sub: 'Single-colour · White only', gold: false },
              { label: 'Brand Guidelines (PDF)', sub: 'Typography · Colour · Usage rules', gold: true },
            ].map((asset) => (
              <div
                key={asset.label}
                className="group p-5 border border-gold/15 rounded-sm hover:border-gold/35 transition-all cursor-pointer flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">{asset.label}</p>
                  <p className="text-xs text-muted-foreground">{asset.sub}</p>
                </div>
                <div className="w-8 h-8 rounded-sm bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all">
                  <Download size={14} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            For full-resolution assets, email <span className="text-gold">aurelixsystemz@gmail.com</span> with subject line "Media Kit Request".
          </p>
        </section>

        {/* Brand Colours */}
        <section className="mb-14">
          <h2 className="font-display text-2xl tracking-wider mb-4">Brand Colours</h2>
          <div className="flex flex-wrap gap-4">
            {brandColors.map((c) => (
              <div key={c.name} className="flex items-center gap-3 p-4 border border-gold/10 rounded-sm min-w-[180px]">
                <div
                  className="w-10 h-10 rounded-sm border border-white/10 shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{c.name}</p>
                  <p className="text-xs text-gold font-mono">{c.hex}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Bio */}
        <section className="mb-14">
          <h2 className="font-display text-2xl tracking-wider mb-4">Leadership</h2>
          <div className="p-6 border border-gold/15 rounded-sm bg-secondary/10 flex gap-6 items-start">
            <div className="w-16 h-16 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 text-gold font-display text-2xl">
              A
            </div>
            <div>
              <h3 className="font-display text-lg tracking-wider text-gold-gradient mb-0.5">Founder & CEO</h3>
              <p className="text-xs text-muted-foreground tracking-widest mb-3">AURELIX SYSTEMS</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The founder of AURELIX SYSTEMS is a technologist and entrepreneur with a vision for democratising access to enterprise-grade AI capabilities. With a background spanning software engineering, financial systems, and creative technology, they established AURELIX in 2024 to build the intelligence infrastructure that the next decade of digital commerce will run on.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-14">
          <h2 className="font-display text-2xl tracking-wider mb-4">Mission Statement</h2>
          <blockquote className="border-l-2 border-gold pl-6 py-2">
            <p className="text-xl font-display tracking-wide text-foreground leading-relaxed mb-3">
              "Building intelligent systems for a better future."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At AURELIX SYSTEMS, we believe that artificial intelligence should serve as a tool for human empowerment —
              not a replacement for human creativity, judgement, or dignity. Our products are built to amplify what
              people and organisations are already capable of, making the exceptional achievable for everyone.
            </p>
          </blockquote>
        </section>

        {/* Media Contact */}
        <section>
          <h2 className="font-display text-2xl tracking-wider mb-4">Media Contact</h2>
          <div className="p-6 border border-gold/20 rounded-sm bg-gold/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Press & Media Inquiries</p>
              <p className="text-sm text-muted-foreground">For interviews, press releases, and editorial partnerships.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:aurelixsystemz@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 bg-gold text-background text-sm font-medium rounded-sm hover:bg-gold-light transition-all"
              >
                <Mail size={14} />
                Email Press Team
              </a>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
