import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using any AURELIX SYSTEMS website, product, API, or service (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.

These Terms apply to all users, including individuals, organisations, and automated systems accessing our Services. We reserve the right to modify these Terms at any time.`,
  },
  {
    title: '2. Description of Services',
    content: `AURELIX SYSTEMS provides AI-powered software platforms, APIs, and related services including:

• AfroMuse AI – Generative music and creative intelligence tools
• GTPro – Algorithmic trading intelligence and financial analytics
• STAGEONE – Enterprise workflow automation (in development)
• Cyber Intelligence – AI-driven cybersecurity monitoring (in development)

Services are provided "as is" and may be modified, suspended, or discontinued at any time with reasonable notice.`,
  },
  {
    title: '3. Account Registration',
    content: `To access certain Services, you may need to create an account. You agree to:

• Provide accurate, complete, and current information
• Maintain the security of your account credentials
• Notify us immediately of any unauthorised access to your account
• Take responsibility for all activities conducted under your account

We reserve the right to terminate accounts that violate these Terms or our usage policies.`,
  },
  {
    title: '4. Use Licence and Restrictions',
    content: `Subject to your compliance with these Terms, AURELIX SYSTEMS grants you a limited, non-exclusive, non-transferable, revocable licence to use our Services for lawful purposes.

You may NOT:
• Use our Services for any illegal or fraudulent activity
• Reverse-engineer, decompile, or attempt to extract source code from our systems
• Use automated tools to scrape, mine, or extract data without written permission
• Resell, sublicence, or distribute access to our Services without authorisation
• Use our AI systems to generate content that infringes third-party intellectual property
• Attempt to circumvent, disable, or interfere with security features of the Services
• Use our trading intelligence tools in violation of applicable financial regulations`,
  },
  {
    title: '5. Intellectual Property',
    content: `All content, technology, trademarks, and intellectual property related to AURELIX SYSTEMS — including but not limited to our AI models, software, APIs, documentation, branding, and website content — are owned by AURELIX SYSTEMS and protected by applicable intellectual property laws.

You retain ownership of content you create using our Services. By using our Services, you grant AURELIX SYSTEMS a limited licence to process your inputs and outputs for the purpose of providing and improving the Services.`,
  },
  {
    title: '6. API Terms',
    content: `If you access AURELIX Services via API, additional terms apply:

• API keys are non-transferable and must not be shared publicly
• Rate limits apply and abuse of limits may result in suspension
• API responses may not be used to train competing AI models
• SLAs (Service Level Agreements) are provided under separate enterprise agreements only
• We reserve the right to modify API endpoints with 30 days' notice for breaking changes`,
  },
  {
    title: '7. Payment and Billing',
    content: `Certain Services require payment. By subscribing to a paid plan:

• You authorise us to charge your payment method on the billing cycle you selected
• Subscriptions auto-renew unless cancelled before the renewal date
• Refunds are provided at our discretion and subject to our refund policy
• We reserve the right to modify pricing with 30 days' notice
• Failed payments may result in service suspension`,
  },
  {
    title: '8. Disclaimer of Warranties',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, AURELIX SYSTEMS PROVIDES ITS SERVICES ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.

We do not warrant that: (a) the Services will be uninterrupted or error-free; (b) results obtained from use of the Services will be accurate or reliable; (c) AI-generated outputs are free from bias, error, or harmful content.

Financial intelligence outputs (GTPro) do not constitute financial advice. Trading involves risk of loss.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `TO THE FULLEST EXTENT PERMITTED BY LAW, AURELIX SYSTEMS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, REVENUE, GOODWILL, OR BUSINESS INTERRUPTION — ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICES.

Our total liability to you for any claim arising from or related to these Terms or the Services shall not exceed the amounts paid by you to AURELIX SYSTEMS in the twelve months preceding the claim.`,
  },
  {
    title: '10. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless AURELIX SYSTEMS, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:

• Your use of the Services in violation of these Terms
• Your violation of any applicable law or third-party rights
• Content you submit, post, or transmit through the Services`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with applicable international commercial law. Any disputes arising from these Terms shall be resolved through binding arbitration, except where prohibited by local law. You waive any right to a jury trial or class action proceeding.`,
  },
  {
    title: '12. Termination',
    content: `We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, with or without notice. Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) shall survive.`,
  },
  {
    title: '13. Contact',
    content: `For questions about these Terms of Service, contact us at:

AURELIX SYSTEMS
Email: aurelixsystemz@gmail.com
Subject line: Terms of Service Inquiry`,
  },
]

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 rounded-full mb-4">
            LEGAL
          </span>
          <h1 className="font-display text-4xl tracking-wider text-gold-gradient mb-3">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: May 8, 2026</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground leading-relaxed mb-12 border-b border-gold/10 pb-8"
        >
          Please read these Terms of Service carefully before using AURELIX SYSTEMS' products and services.
          These Terms constitute a legally binding agreement between you and AURELIX SYSTEMS governing your access
          to and use of our Services.
        </motion.p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.035 }}
            >
              <h2 className="font-display text-lg tracking-wider text-foreground mb-3">{s.title}</h2>
              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
            </motion.section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
