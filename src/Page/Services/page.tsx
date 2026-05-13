import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

const services = [
  { icon: '📝', title: 'Resume Builder',       text: 'Step-by-step builder with live preview and multiple export options.',          btn: 'Start Building',   primary: true  },
  { icon: '🖼️', title: 'Template Library',     text: 'Browse 50+ professionally designed templates for any field.',                  btn: 'Browse Templates', primary: false },
  { icon: '🔍', title: 'ATS Checker',          text: 'Analyse your resume against job descriptions for keyword match score.',        btn: 'Check Now',        primary: false },
  { icon: '💾', title: 'PDF Export',           text: 'Download your resume as a clean, print-ready PDF instantly.',                  btn: 'Export PDF',       primary: true  },
  { icon: '✉️', title: 'Cover Letter Builder', text: 'Generate a matching cover letter in seconds using your resume data.',          btn: 'Try Now',          primary: false },
  { icon: '🎯', title: 'Job Match Score',      text: 'Paste any job description and get a personalised match percentage instantly.', btn: 'Get Score',        primary: false },
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
  { q: 'Can I try ResumeForge for free?',        a: 'Yes — our Free plan gives you 3 templates and 1 PDF download per month with no credit card required.' },
  { q: 'Will my resume pass ATS filters?',       a: 'All our templates are structured to pass modern ATS systems. Pro users also get a live keyword checker.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Absolutely. Cancel from your dashboard at any time with no cancellation fees or hidden charges.' },
  { q: 'How many resumes can I create?',         a: 'Free users can store up to 2 resumes. Pro and Team plans support unlimited resumes and drafts.' },
]

const btnPrimary = "inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px transition-all"
const btnOutline = "inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white transition-all"

export default function Services() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="text-center px-10 pt-16 pb-8 flex flex-col items-center gap-4">
        <h1 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Our Services</h1>
        <p className="text-[#6b6b7b] dark:text-[#aaa] mb-10 text-base">Everything you need to build a career-winning resume — all in one place.</p>
        <a href="/signup" className={btnPrimary}>Get Started Free</a>
      </section>

      {/* SERVICES CARDS */}
      <section className="px-10 py-12">
        <div className="flex flex-wrap justify-center gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[320px] text-center flex flex-col gap-2">
              <div className="text-[2.5rem] mb-4">{s.icon}</div>
              <h3 className="font-serif mb-2 dark:text-white">{s.title}</h3>
              <p className="text-sm text-[#6b6b7b] dark:text-[#aaa] mb-5 flex-1">{s.text}</p>
              <a href="/login" className={s.primary ? btnPrimary : btnOutline}>{s.btn}</a>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white dark:bg-[#12121f] px-10 py-16 text-center">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Pricing Plans</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Simple pricing — no hidden fees, no surprises.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm max-w-[280px] flex-1 basis-[220px] text-center flex flex-col gap-2">
            <h3 className="font-serif text-[1.4rem] mt-2 text-[#1a1a2e] dark:text-white">Free</h3>
            <p className="font-serif text-[2.2rem] text-[#c8873a]">$0 <span className="text-sm text-[#6b6b7b] dark:text-[#aaa] font-sans">/ forever</span></p>
            <p className="text-sm text-[#6b6b7b] dark:text-[#aaa] mb-5">Perfect for getting started and exploring templates.</p>
            <a href="/signup" className={btnOutline}>Get Started</a>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] rounded-xl p-8 shadow-md max-w-[280px] flex-1 basis-[220px] text-center flex flex-col gap-2 relative border-2 border-[#c8873a]" style={{ boxShadow: '0 0 0 2px #c8873a, 0 6px 24px rgba(0,0,0,0.10)' }}>
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#c8873a] text-white text-xs font-bold px-[0.9rem] py-[0.2rem] rounded-full whitespace-nowrap">Most Popular</span>
            <h3 className="font-serif text-[1.4rem] mt-2 text-[#1a1a2e] dark:text-white">Pro</h3>
            <p className="font-serif text-[2.2rem] text-[#c8873a]">$9 <span className="text-sm text-[#6b6b7b] dark:text-[#aaa] font-sans">/ month</span></p>
            <p className="text-sm text-[#6b6b7b] dark:text-[#aaa] mb-5">Everything you need to land your next role fast.</p>
            <a href="/signup" className={btnPrimary}>Start Pro</a>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm max-w-[280px] flex-1 basis-[220px] text-center flex flex-col gap-2">
            <h3 className="font-serif text-[1.4rem] mt-2 text-[#1a1a2e] dark:text-white">Team</h3>
            <p className="font-serif text-[2.2rem] text-[#c8873a]">$19 <span className="text-sm text-[#6b6b7b] dark:text-[#aaa] font-sans">/ month</span></p>
            <p className="text-sm text-[#6b6b7b] dark:text-[#aaa] mb-5">For teams of up to 5 collaborating on career docs.</p>
            <a href="/signup" className={btnOutline}>Start Team</a>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#ddd8cc] dark:border-[#2a2a3e] max-w-[800px] mx-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#1a1a2e] text-white">
              <tr>
                <th className="text-left font-semibold tracking-wide px-5 py-[0.9rem]">Feature</th>
                <th className="text-left font-semibold tracking-wide px-5 py-[0.9rem]">Free</th>
                <th className="text-left font-semibold tracking-wide px-5 py-[0.9rem]">Pro — $9/mo</th>
                <th className="text-left font-semibold tracking-wide px-5 py-[0.9rem]">Team — $19/mo</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, i) => (
                <tr key={row.feature} className={`${i % 2 === 1 ? 'bg-[#f9f7f3] dark:bg-[#0f0f1a]' : 'dark:bg-[#1a1a2e]'} hover:bg-[#fff3e0] dark:hover:bg-[#2a2a3e] transition-colors`}>
                  <td className="px-5 py-[0.8rem] border-b border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-white">{row.feature}</td>
                  <td className="px-5 py-[0.8rem] border-b border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-white">{row.free}</td>
                  <td className="px-5 py-[0.8rem] border-b border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-white">{row.pro}</td>
                  <td className="px-5 py-[0.8rem] border-b border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-white">{row.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-10 py-16 text-center">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Still unsure? Here are answers to common questions.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-left">
          {faqs.map(f => (
            <div key={f.q} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[480px] flex-1 basis-[340px]">
              <h4 className="font-serif text-base mb-2 text-[#1a1a2e] dark:text-white">{f.q}</h4>
              <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER — already dark bg, no changes needed */}
      <section className="bg-[#1a1a2e] text-center px-10 py-16 flex flex-col items-center gap-4">
        <h2 className="font-serif text-[2rem] text-white">Ready to build your resume?</h2>
        <p className="text-[#aaa] text-base">Join 10,000+ job seekers. Free to start — no credit card needed.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/signup" className={btnPrimary}>Create Free Account</a>
          <a href="/contact" className={btnOutline}>Talk to Us</a>
        </div>
      </section>

      <Footer />
    </>
  )
}