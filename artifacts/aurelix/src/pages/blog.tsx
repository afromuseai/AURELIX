import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const categories = ['All', 'AI Systems', 'Automation', 'Cybersecurity', 'Trading Intelligence', 'Creative AI']

const featured = {
  title: 'The Architecture of Adaptive Intelligence: How AURELIX Builds AI That Learns From Context',
  excerpt: 'Most AI systems are trained once and deployed. We built something different — systems that continuously adapt to the environments they operate in, without losing the precision that enterprise demands.',
  author: 'AURELIX Research Team',
  date: 'May 8, 2026',
  readTime: '9 min read',
  category: 'AI Systems',
  image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
}

const posts = [
  {
    title: 'GTPro v2: Real-Time Market Signal Processing at Millisecond Precision',
    excerpt: 'The second generation of our trading intelligence engine introduces sub-10ms signal latency with improved accuracy on volatile assets.',
    author: 'Quantitative Systems Team',
    date: 'May 1, 2026',
    readTime: '7 min read',
    category: 'Trading Intelligence',
  },
  {
    title: 'AfroMuse AI and the Future of Culturally-Aware Generative Music',
    excerpt: 'Training AI on diverse cultural musical traditions isn\'t just ethical — it produces measurably better creative outputs for African artists.',
    author: 'Creative Intelligence Lab',
    date: 'April 24, 2026',
    readTime: '6 min read',
    category: 'Creative AI',
  },
  {
    title: 'Why Enterprise Automation Fails: The Five Architecture Mistakes',
    excerpt: 'STAGEONE was built after studying 47 failed enterprise automation deployments. Here\'s what goes wrong — and how we designed around it.',
    author: 'AURELIX Engineering',
    date: 'April 15, 2026',
    readTime: '11 min read',
    category: 'Automation',
  },
  {
    title: 'Zero-Day Detection Using Behavioral AI: A New Paradigm for Cyber Defence',
    excerpt: 'Signature-based detection is dead. Our Cyber Intelligence engine uses behavioral pattern modeling to catch threats that have never been seen before.',
    author: 'Security Research Division',
    date: 'April 7, 2026',
    readTime: '8 min read',
    category: 'Cybersecurity',
  },
  {
    title: 'Scaling AI Inference: From Prototype to Production Without Degradation',
    excerpt: 'The gap between a working prototype and a production AI system is wider than most teams expect. Here\'s the AURELIX framework for bridging it.',
    author: 'AURELIX Infrastructure',
    date: 'March 28, 2026',
    readTime: '10 min read',
    category: 'AI Systems',
  },
  {
    title: 'The Economics of AI Integration for Small Businesses in 2026',
    excerpt: 'AI adoption isn\'t just for enterprises. We break down how smaller teams can access the same intelligence infrastructure that powers the largest companies.',
    author: 'AURELIX Insights',
    date: 'March 18, 2026',
    readTime: '5 min read',
    category: 'Automation',
  },
]

const categoryColors: Record<string, string> = {
  'AI Systems': 'text-gold border-gold/30 bg-gold/10',
  'Trading Intelligence': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  'Creative AI': 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  'Automation': 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  'Cybersecurity': 'text-red-400 border-red-400/30 bg-red-400/10',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 rounded-full mb-4">
            INTELLIGENCE JOURNAL
          </span>
          <h1 className="font-display text-4xl md:text-5xl tracking-wider text-gold-gradient mb-4">
            The AURELIX Blog
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Research, insights, and technical writing from the AURELIX intelligence labs.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 text-xs tracking-wider border rounded-full transition-all border-gold/20 text-muted-foreground hover:border-gold/40 hover:text-gold"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-14 group cursor-pointer"
        >
          <div className="relative rounded-sm overflow-hidden border border-gold/15 hover:border-gold/30 transition-all">
            <div className="aspect-[16/6] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs border px-2.5 py-0.5 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={11} />{featured.date}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={11} />{featured.readTime}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-3 max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mb-4 text-sm leading-relaxed">{featured.excerpt}</p>
              <span className="flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
              className="group cursor-pointer border border-gold/10 hover:border-gold/25 rounded-sm p-6 transition-all hover:bg-secondary/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs border px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? 'text-muted-foreground border-border'}`}>
                  <Tag size={9} className="inline mr-1" />{post.category}
                </span>
              </div>
              <h3 className="font-display text-base tracking-wide text-foreground mb-3 leading-snug group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  )
}
