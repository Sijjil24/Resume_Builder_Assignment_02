import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services  from './Page/Services/page'
import Dashboard from './Page/Dashboard/page'
import Contact   from './Page/Contact/page'
import Login     from './Page/Login/page'
import Signup    from './Page/Signup/page'
import Navbar    from './components/Navbar/page'
import Footer    from './components/Footer/page'

const stats = [
  { num: '10k+', label: 'Users'        },
  { num: '50+',  label: 'Templates'    },
  { num: '98%',  label: 'ATS Pass Rate'},
  { num: '4.9★', label: 'Avg Rating'   },
]

const features = [
  { icon: '🎨', title: 'Beautiful Templates', text: 'Choose from professionally designed templates for every industry.'    },
  { icon: '⚡', title: 'Fast & Easy',          text: 'Fill in your details and download a polished resume in minutes.'      },
  { icon: '📄', title: 'ATS Friendly',         text: 'Our resumes pass Applicant Tracking Systems used by top companies.'   },
  { icon: '🔒', title: 'Secure & Private',     text: 'Your data is encrypted and never shared with third parties.'          },
  { icon: '🌍', title: 'Multi-Language',       text: 'Build resumes in 12+ languages for global job markets.'               },
  { icon: '📊', title: 'Real-Time Preview',    text: 'See exactly how your resume looks as you type.'                       },
]

const steps = [
  { step: '01', title: 'Pick a Template',    text: 'Browse our library and choose a design that fits your industry and style.' },
  { step: '02', title: 'Fill Your Details',  text: 'Enter your work history, skills, and education in our guided builder.'    },
  { step: '03', title: 'Customise & Polish', text: 'Tweak colours, fonts, and layout with a live preview at every step.'      },
  { step: '04', title: 'Download & Apply',   text: 'Export as a print-ready PDF and start applying to jobs immediately.'      },
]

const templates = [
  { img: '/Images/image1.jpg', title: 'Modern Pro',      desc: 'Clean lines, bold headings.'  },
  { img: '/Images/image2.jpg', title: 'Classic Elegant', desc: 'Timeless, corporate-ready.'  },
  { img: '/Images/image3.jpg', title: 'Creative Bold',   desc: 'Stand out with colour.'       },
]

const testimonials = [
  { quote: 'I landed 3 interviews in one week after switching to a ResumeForge template. The ATS checker alone is worth it.', name: 'Ayesha R., Software Engineer'  },
  { quote: 'Super easy to use. I had a polished resume ready in under 20 minutes. Highly recommend to fresh graduates.',      name: 'Hassan M., Fresh Graduate'     },
  { quote: 'The Modern Pro template got me past the HR filter at two Fortune 500 companies. I am now employed!',              name: 'Sara K., Marketing Manager'    },
]

function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <h1>
          Build a Resume That<br />
          <span>Gets You Hired</span>
        </h1>
        <p>
          Professional resume templates designed to impress recruiters.
          Create, customise, and download in minutes — completely free.
        </p>
        <div className="hero-btns">
          <a href="/signup"   className="btn btn-primary">Get Started Free</a>
          <a href="/services" className="btn btn-outline">View Templates</a>
        </div>
        <p className="hero-note">No credit card required · Cancel anytime</p>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar">
        {stats.map(s => (
          <div key={s.label} className="stat-pill">
            <span className="stat-pill-num">{s.num}</span>
            <span className="stat-pill-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why ResumeForge?</h2>
          <p className="section-sub">Everything you need to land your dream job.</p>
        </div>
        <div className="card-grid">
          {features.map(f => (
            <div key={f.title} className="card feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="card-heading">{f.title}</h3>
              <p className="card-text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="steps-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">Four simple steps to your perfect resume.</p>
        </div>
        <div className="steps-grid">
          {steps.map(s => (
            <div key={s.step} className="card step-card">
              <span className="step-num">{s.step}</span>
              <h3 className="card-heading">{s.title}</h3>
              <p className="card-text">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEMPLATES PREVIEW ── */}
      <section className="templates-section">
        <div className="section-header">
          <h2 className="section-title">Popular Templates</h2>
          <p className="section-sub">Hand-picked designs for a strong first impression.</p>
        </div>
        <div className="card-grid">
          {templates.map(t => (
            <div key={t.title} className="card template-card">
              <div className="img-frame">
                <img src={t.img} alt={t.title} />
              </div>
              <div className="template-card-body">
                <h4 className="template-card-title">{t.title}</h4>
                <p className="template-card-text">{t.desc}</p>
                <a href="/services" className="btn btn-primary">Use This</a>
              </div>
            </div>
          ))}
        </div>
        <div className="templates-cta">
          <a href="/services" className="btn btn-outline">Browse All 50+ Templates →</a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-sub">Real results from real job seekers.</p>
        </div>
        <div className="card-grid">
          {testimonials.map(t => (
            <div key={t.name} className="card feature-card">
              <p className="card-text">"{t.quote}"</p>
              <p className="card-heading">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <h2 className="cta-title">Ready to build your resume?</h2>
        <p className="section-sub">Join 10,000+ job seekers. Free to start — no credit card needed.</p>
        <div className="hero-btns">
          <a href="/signup"  className="btn btn-primary">Create Free Account</a>
          <a href="/contact" className="btn btn-outline">Talk to Us</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />}      />
        <Route path="/services"  element={<Services />}  />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact"   element={<Contact />}   />
        <Route path="/login"     element={<Login />}     />
        <Route path="/signup"    element={<Signup />}    />
      </Routes>
    </BrowserRouter>
  )
}