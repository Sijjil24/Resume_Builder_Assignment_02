import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'


const info = [
  { icon: '📧', label: 'Email Us',      value: 'support@resumeforge.com' },
  { icon: '📍', label: 'Our Location',  value: 'University of Gujrat, Pakistan' },
  { icon: '🕐', label: 'Working Hours', value: 'Mon–Fri: 9am – 6pm PKT' },
  { icon: '💬', label: 'Live Chat',     value: 'Available on Pro & Team plans' },
]

const faqs = [
  { q: 'How do I reset my password?',               a: 'Go to the Login page and click "Forgot password?" — we will email you a reset link within 2 minutes.' },
  { q: 'Can I change my plan after signing up?',    a: 'Yes. Head to your Dashboard → Settings → Billing and upgrade or downgrade at any time.' },
  { q: 'My PDF looks different from the preview.',  a: 'Make sure you are using the latest Chrome or Edge browser. Safari may render fonts slightly differently.' },
  { q: 'Do you offer refunds?',                     a: 'We offer a full refund within 7 days of any paid subscription — no questions asked.' },
  { q: 'Is my data stored securely?',               a: 'All data is encrypted in transit and at rest. We never sell or share your personal information.' },
  { q: 'Can I use ResumeForge on mobile?',          a: 'Yes — the site is fully responsive. For the best building experience we recommend a desktop browser.' },
]

export default function Contact() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const msg = document.getElementById('formMsg')
    if (!msg) return
    msg.textContent = '✅ Message sent! We\'ll get back to you within 24 hours.'
    msg.className = 'form-msg form-msg-success'
    e.currentTarget.reset()
  }

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="page-hero">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-sub">Have a question or feedback? We'd love to hear from you — usually reply within 24 hours.</p>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="contact-info-section">
        <div className="card-grid">
          {info.map(i => (
            <div key={i.label} className="card contact-info-card">
              <div className="contact-icon">{i.icon}</div>
              <p className="contact-info-label">{i.label}</p>
              <p className="contact-info-value">{i.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM + SIDE ── */}
      <section className="contact-body">

        {/* FORM */}
        <div className="card contact-form-card">
          <h2 className="auth-card-heading">Send a Message</h2>
          <p className="auth-card-sub">Fill in the form and our team will respond promptly.</p>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cname">Full Name</label>
                <input type="text" id="cname" name="cname" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="cemail">Email Address</label>
                <input type="email" id="cemail" name="cemail" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="">Select a topic…</option>
                <option value="billing">Billing & Plans</option>
                <option value="technical">Technical Issue</option>
                <option value="templates">Templates</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message here..." required />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            <p id="formMsg" className="form-msg" />
          </form>
        </div>

        {/* SIDE INFO */}
        <div className="contact-side">
          <div className="card contact-side-card">
            <h3 className="card-heading">Before You Write</h3>
            <p className="card-text">Check our most common answers below — you might find your answer instantly without waiting.</p>
          </div>
          <div className="card contact-side-card">
            <h3 className="card-heading">Response Time</h3>
            <ul className="response-list">
              <li className="response-item"><span className="badge badge-green">Free</span><span className="card-text">Within 48 hours</span></li>
              <li className="response-item"><span className="badge badge-orange">Pro</span><span className="card-text">Within 12 hours</span></li>
              <li className="response-item"><span className="badge badge-green">Team</span><span className="card-text">Within 4 hours</span></li>
            </ul>
          </div>
          <div className="card contact-side-card">
            <h3 className="card-heading">Follow Us</h3>
            <div className="social-row">
              <a href="#" className="btn btn-outline">𝕏 Twitter</a>
              <a href="#" className="btn btn-outline">in LinkedIn</a>
            </div>
          </div>
        </div>

      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Quick answers to the questions we hear most often.</p>
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

      <Footer />
    </>
  )
}