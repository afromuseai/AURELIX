import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Twitter, Linkedin, ArrowRight } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, source: 'contact' }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full px-4 py-3 bg-secondary/40 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center">
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 rounded-full mb-4">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-5xl tracking-wider text-gold-gradient mb-4">Contact</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Whether you're a partner, investor, creator, or just curious — we want to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left — Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'aurelixsystemz@gmail.com', href: 'mailto:aurelixsystemz@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Global Operations', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-sm bg-gold/10 text-gold flex items-center justify-center border border-gold/20">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-gold transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/10 pt-8 mb-8">
              <h3 className="font-display text-base tracking-wider mb-4">Follow AURELIX</h3>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground border border-border rounded-sm hover:border-gold/30 hover:text-gold transition-all"
                  >
                    <s.icon size={14} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 border border-gold/15 rounded-sm bg-secondary/10">
              <h3 className="font-display text-base tracking-wider mb-2 text-gold">Partnership Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Interested in integrating AURELIX AI into your platform, or exploring a strategic partnership?
                Select "Partnership" in the form or email us directly.
              </p>
              <a href="mailto:aurelixsystemz@gmail.com" className="flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
                Reach out directly <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 border border-gold/20 rounded-sm bg-gold/5 text-center flex flex-col items-center justify-center h-full"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-5">
                  <Send size={26} />
                </div>
                <h3 className="font-display text-xl text-gold-gradient mb-2">Message Received</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  We've received your message and will respond within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-8 border border-gold/15 rounded-sm bg-secondary/10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider">Name</label>
                    <input type="text" value={form.name} onChange={set('name')} placeholder="Your name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider">Email</label>
                    <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider">Subject</label>
                  <select value={form.subject} onChange={set('subject')} required className={inputClass}>
                    <option value="">Select a subject...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="API Access">API Access</option>
                    <option value="Investment">Investment</option>
                    <option value="Press & Media">Press & Media</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 tracking-wider">Message</label>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-400">Something went wrong. Please email us directly at aurelixsystemz@gmail.com</p>
                )}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-background font-medium rounded-sm hover:bg-gold-light disabled:opacity-60 transition-all glow-gold-sm"
                >
                  {status === 'submitting' ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
