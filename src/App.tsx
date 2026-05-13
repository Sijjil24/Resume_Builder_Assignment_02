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

const btnPrimary = "inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px transition-all"
const btnOutline = "inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white transition-all"

function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="flex items-center justify-center flex-col text-center gap-6 px-8 pt-24 pb-16">
        <h1 className="font-serif leading-tight text-[#1a1a2e] dark:text-white text-[clamp(2.4rem,5vw,4rem)]">
          Build a Resume That<br />
          <span className="text-[#c8873a]">Gets You Hired</span>
        </h1>
        <p className="text-[1.1rem] max-w-[540px] text-[#6b6b7b] dark:text-[#aaa]">
          Professional resume templates designed to impress recruiters.
          Create, customise, and download in minutes — completely free.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/signup"   className={btnPrimary}>Get Started Free</a>
          <a href="/services" className={btnOutline}>View Templates</a>
        </div>
        <p className="text-xs -mt-2 text-[#6b6b7b] dark:text-[#aaa]">No credit card required · Cancel anytime</p>
      </section>

      {/* ── STATS BAR ── */}
      <section className="flex flex-wrap justify-center gap-8 px-10 py-8 bg-[#1a1a2e]">
        {stats.map(s => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="font-serif text-[2rem] text-[#c8873a]">{s.num}</span>
            <span className="text-sm tracking-wide text-[#aaa]">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white dark:bg-[#12121f] px-10 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Why ResumeForge?</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Everything you need to land your dream job.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[300px] text-center">
              <div className="text-[2.5rem] mb-4">{f.icon}</div>
              <h3 className="font-serif mb-2 dark:text-white">{f.title}</h3>
              <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white dark:bg-[#12121f] px-10 py-16 text-center">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">How It Works</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Four simple steps to your perfect resume.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {steps.map(s => (
            <div key={s.step} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[260px] text-center">
              <span className="font-serif text-[2.5rem] opacity-35 block mb-2 text-[#c8873a]">{s.step}</span>
              <h3 className="font-serif mb-2 dark:text-white">{s.title}</h3>
              <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEMPLATES PREVIEW ── */}
      <section className="px-10 py-16 text-center">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Popular Templates</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Hand-picked designs for a strong first impression.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {templates.map(t => (
            <div key={t.title} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[280px] overflow-hidden">
              <div className="bg-[#f5f3ee] dark:bg-[#0f0f1a] flex items-center justify-center w-full p-3 rounded-t-xl">
                <img src={t.img} alt={t.title} className="w-full max-h-[320px] object-contain block mx-auto rounded-lg" />
              </div>
              <div className="p-5">
                <h4 className="font-serif dark:text-white">{t.title}</h4>
                <p className="text-sm text-[#6b6b7b] dark:text-[#aaa] my-1 mb-4">{t.desc}</p>
                <a href="/services" className={`${btnPrimary} w-full`}>Use This</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/services" className={btnOutline}>Browse All 50+ Templates →</a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white dark:bg-[#12121f] px-10 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">What Our Users Say</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Real results from real job seekers.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[300px] text-center">
              <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">"{t.quote}"</p>
              <p className="font-serif mt-2 dark:text-white">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a1a2e] text-center px-10 py-16 flex flex-col items-center gap-4">
        <h2 className="font-serif text-[2rem] text-white">Ready to build your resume?</h2>
        <p className="text-[#aaa] text-base">Join 10,000+ job seekers. Free to start — no credit card needed.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/signup"  className={btnPrimary}>Create Free Account</a>
          <a href="/contact" className={btnOutline}>Talk to Us</a>
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