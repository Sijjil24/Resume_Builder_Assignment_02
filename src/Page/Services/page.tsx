import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'


const services = [
  { icon: '📝', title: 'Resume Builder',       text: 'Step-by-step builder with live preview and multiple export options.',          btn: 'Start Building',   style: 'btn-primary' },
  { icon: '🖼️', title: 'Template Library',     text: 'Browse 50+ professionally designed templates for any field.',                  btn: 'Browse Templates', style: 'btn-outline' },
  { icon: '🔍', title: 'ATS Checker',          text: 'Analyse your resume against job descriptions for keyword match score.',        btn: 'Check Now',        style: 'btn-outline' },
  { icon: '💾', title: 'PDF Export',           text: 'Download your resume as a clean, print-ready PDF instantly.',                  btn: 'Export PDF',       style: 'btn-primary' },
  { icon: '✉️', title: 'Cover Letter Builder', text: 'Generate a matching cover letter in seconds using your resume data.',          btn: 'Try Now',          style: 'btn-outline' },
  { icon: '🎯', title: 'Job Match Score',      text: 'Paste any job description and get a personalised match percentage instantly.', btn: 'Get Score',        style: 'btn-outline' },
]

const pricing = [
  { feature: 'Resume Templates',    free: '3',        pro: '50+',       team: '50+'       },
  { feature: 'PDF Downloads',       free: '1 / month',pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'ATS Checker',         free: '❌',       pro: '✅',        team: '✅'        },
  { feature: 'Cover Letter Builder',free: '❌',       pro: '✅',        team: '✅'        },
  { feature: 'Job Match Score',     free: '❌',       pro: '✅',        team: '✅'        },
  { feature: 'Team Members',        free: '1',        pro: '1',         team: '5'         },
  { feature: 'Priority Support',    free: '❌',       pro: '✅',        team: '✅'        },
  { feature: 'Custom Branding',     free: '❌',       pro: '❌',        team: '✅'        },
]

const faqs = [
  { q: 'Can I try ResumeForge for free?',          a: 'Yes — our Free plan gives you 3 templates and 1 PDF download per month with no credit card required.' },
  { q: 'Will my resume pass ATS filters?',         a: 'All our templates are structured to pass modern ATS systems. Pro users also get a live keyword checker.' },
  { q: 'Can I cancel my subscription anytime?',   a: 'Absolutely. Cancel from your dashboard at any time with no cancellation fees or hidden charges.' },
  { q: 'How many resumes can I create?',           a: 'Free users can store up to 2 resumes. Pro and Team plans support unlimited resumes and drafts.' },
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="page-hero">
        <h1 className="section-title">Our Services</h1>
        <p className="section-sub">Everything you need to build a career-winning resume — all in one place.</p>
        <a href="/signup" className="btn btn-primary">Get Started Free</a>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section className="services-section">
        <div className="card-grid">
          {services.map(s => (
            <div key={s.title} className="card service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="card-heading">{s.title}</h3>
              <p className="service-card-text">{s.text}</p>
              <a href="/login" className={`btn ${s.style}`}>{s.btn}</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="pricing-section">
        <div className="section-header">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-sub">Simple pricing — no hidden fees, no surprises.</p>
        </div>

        <div className="pricing-cards">
          <div className="card pricing-card">
            <h3 className="pricing-plan-name">Free</h3>
            <p className="pricing-price">$0 <span className="pricing-freq">/ forever</span></p>
            <p className="service-card-text">Perfect for getting started and exploring templates.</p>
            <a href="/signup" className="btn btn-outline">Get Started</a>
          </div>
          <div className="card pricing-card pricing-card-featured">
            <span className="pricing-badge">Most Popular</span>
            <h3 className="pricing-plan-name">Pro</h3>
            <p className="pricing-price">$9 <span className="pricing-freq">/ month</span></p>
            <p className="service-card-text">Everything you need to land your next role fast.</p>
            <a href="/signup" className="btn btn-primary">Start Pro</a>
          </div>
          <div className="card pricing-card">
            <h3 className="pricing-plan-name">Team</h3>
            <p className="pricing-price">$19 <span className="pricing-freq">/ month</span></p>
            <p className="service-card-text">For teams of up to 5 collaborating on career docs.</p>
            <a href="/signup" className="btn btn-outline">Start Team</a>
          </div>
        </div>

        <div className="table-wrap pricing-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Pro — $9/mo</th>
                <th>Team — $19/mo</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map(row => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.free}</td>
                  <td>{row.pro}</td>
                  <td>{row.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Still unsure? Here are answers to common questions.</p>
        </div>
        <div className="faq-grid">
          {faqs.map(f => (
            <div key={f.q} className="card faq-card">
              <h4 className="faq-question">{f.q}</h4>
              <p className="card-text">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <h2 className="cta-title">Ready to build your resume?</h2>
        <p className="section-sub">Join 10,000+ job seekers. Free to start — no credit card needed.</p>
        <div className="hero-btns">
          <a href="/signup" className="btn btn-primary">Create Free Account</a>
          <a href="/contact" className="btn btn-outline">Talk to Us</a>
        </div>
      </section>

      <Footer />
    </>
  )
}