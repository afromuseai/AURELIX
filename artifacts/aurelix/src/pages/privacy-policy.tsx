import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, join our waitlist, submit a contact form, or communicate with us. This may include:

• Email address
• Name and professional details (when provided)
• Usage data and analytics (pages visited, features used, time spent)
• Device information (browser type, operating system, IP address)
• Communications you send us

We do not collect sensitive personal information such as financial account numbers, government IDs, or health data unless explicitly required for a specific service and consented to by you.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `AURELIX SYSTEMS uses the information collected to:

• Operate, maintain, and improve our services and products
• Send you updates about products you have signed up for or requested information on
• Respond to your inquiries and provide customer support
• Analyse usage patterns to improve user experience
• Detect, prevent, and address fraud, security breaches, and technical issues
• Comply with legal obligations
• Send marketing communications (where you have opted in)

We will not use your personal information for purposes incompatible with those stated here without your consent.`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, rent, or trade your personal information to third parties. We may share information with:

• Service providers: Trusted third-party vendors who assist in operating our platform (hosting, analytics, email delivery), bound by confidentiality agreements.
• Legal compliance: When required by law, subpoena, or similar legal process, or when we believe in good faith that disclosure is necessary to protect our rights or the safety of our users.
• Business transfers: In connection with a merger, acquisition, or sale of assets, in which case your data will remain protected under equivalent privacy obligations.
• With your consent: Any other sharing will only occur with your explicit permission.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include:

• Encrypted data transmission (TLS/HTTPS)
• Encrypted data storage at rest
• Access controls and authentication protocols
• Regular security audits and vulnerability assessments

No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services and fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law.

Waitlist data is retained until: (a) you request deletion, (b) the product launches and you migrate to an active account, or (c) we determine the data is no longer needed.

You may request deletion of your data at any time by contacting us at aurelixsystemz@gmail.com.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• Access: Request a copy of the personal information we hold about you.
• Correction: Request correction of inaccurate or incomplete information.
• Deletion: Request deletion of your personal information ("right to be forgotten").
• Portability: Request transfer of your data to another service provider.
• Objection: Object to certain types of processing, including direct marketing.
• Restriction: Request that we restrict processing of your data in certain circumstances.

To exercise any of these rights, contact us at aurelixsystemz@gmail.com. We will respond within 30 days.`,
  },
  {
    title: '7. Cookies',
    content: `Our website uses cookies and similar tracking technologies to enhance your experience. Types of cookies we use:

• Essential cookies: Required for the website to function (authentication, session management).
• Analytics cookies: Help us understand how visitors interact with our site (page views, navigation patterns).
• Preference cookies: Remember your settings and preferences.

You may disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.`,
  },
  {
    title: '8. Third-Party Services',
    content: `Our services may contain links to or integrations with third-party websites and services. This privacy policy applies only to information collected by AURELIX SYSTEMS. We encourage you to review the privacy policies of any third-party services you interact with through our platform.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by email or by posting a notice on our website. Continued use of our services after changes take effect constitutes your acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `For questions, concerns, or requests regarding this Privacy Policy or your personal data, contact us at:

AURELIX SYSTEMS
Email: aurelixsystemz@gmail.com
Subject line: Privacy Policy Inquiry`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 rounded-full mb-4">
            LEGAL
          </span>
          <h1 className="font-display text-4xl tracking-wider text-gold-gradient mb-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: May 8, 2026</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground leading-relaxed mb-12 border-b border-gold/10 pb-8"
        >
          AURELIX SYSTEMS ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy describes
          how we collect, use, store, and share your personal information when you use our website, products, and services.
          By using our services, you agree to the collection and use of information as described in this policy.
        </motion.p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}
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
