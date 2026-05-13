import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

const info = [
  { icon: '📧', label: 'Email Us',      value: 'support@resumeforge.com'       },
  { icon: '📍', label: 'Our Location',  value: 'University of Gujrat, Pakistan' },
  { icon: '🕐', label: 'Working Hours', value: 'Mon–Fri: 9am – 6pm PKT'        },
  { icon: '💬', label: 'Live Chat',     value: 'Available on Pro & Team plans'  },
]

const faqs = [
  { q: 'How do I reset my password?',              a: 'Go to the Login page and click "Forgot password?" — we will email you a reset link within 2 minutes.' },
  { q: 'Can I change my plan after signing up?',   a: 'Yes. Head to your Dashboard → Settings → Billing and upgrade or downgrade at any time.' },
  { q: 'My PDF looks different from the preview.', a: 'Make sure you are using the latest Chrome or Edge browser. Safari may render fonts slightly differently.' },
  { q: 'Do you offer refunds?',                    a: 'We offer a full refund within 7 days of any paid subscription — no questions asked.' },
  { q: 'Is my data stored securely?',              a: 'All data is encrypted in transit and at rest. We never sell or share your personal information.' },
  { q: 'Can I use ResumeForge on mobile?',         a: 'Yes — the site is fully responsive. For the best building experience we recommend a desktop browser.' },
]

const inputCls = "px-4 py-[0.7rem] text-[0.95rem] outline-none border-[1.5px] border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md bg-[#f5f3ee] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#c8873a] w-full"
const btnPrimary = "inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px transition-all"
const btnOutline = "inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white transition-all"

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const msg = document.getElementById('formMsg')
    if (!msg) return
    msg.textContent = "✅ Message sent! We'll get back to you within 24 hours."
    msg.className = 'mt-4 text-sm font-semibold text-center text-[#1a7a46]'
    e.currentTarget.reset()
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="text-center px-10 pt-16 pb-8 flex flex-col items-center gap-4">
        <h1 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Get In Touch</h1>
        <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Have a question or feedback? We'd love to hear from you — usually reply within 24 hours.</p>
      </section>

      {/* INFO CARDS */}
      <section className="px-10 py-12 pb-6">
        <div className="flex flex-wrap justify-center gap-6">
          {info.map(i => (
            <div key={i.label} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all max-w-[220px] text-center">
              <div className="text-[2rem] mb-2">{i.icon}</div>
              <p className="font-bold text-xs uppercase tracking-wide text-[#1a1a2e] dark:text-white">{i.label}</p>
              <p className="text-sm mt-1 text-[#6b6b7b] dark:text-[#aaa]">{i.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + SIDE */}
      <section className="flex flex-wrap gap-8 px-10 py-8 pb-16 items-start justify-center">

        {/* FORM */}
        <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm flex-1 basis-[480px] max-w-[620px]">
          <h2 className="font-serif text-[1.9rem] text-[#1a1a2e] dark:text-white">Send a Message</h2>
          <p className="text-[0.95rem] mb-4 text-[#6b6b7b] dark:text-[#aaa]">Fill in the form and our team will respond promptly.</p>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="flex gap-4 flex-wrap">
              <div className="flex flex-col gap-1 mb-5 flex-1 basis-[200px]">
                <label htmlFor="cname" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Full Name</label>
                <input type="text" id="cname" name="cname" placeholder="Your name" required className={inputCls} />
              </div>
              <div className="flex flex-col gap-1 mb-5 flex-1 basis-[200px]">
                <label htmlFor="cemail" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Email Address</label>
                <input type="email" id="cemail" name="cemail" placeholder="you@email.com" required className={inputCls} />
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="How can we help?" required className={inputCls} />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="category" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Category</label>
              <select id="category" name="category" className={inputCls}>
                <option value="">Select a topic…</option>
                <option value="billing">Billing & Plans</option>
                <option value="technical">Technical Issue</option>
                <option value="templates">Templates</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Message</label>
              <textarea id="message" name="message" placeholder="Write your message here..." required className={`${inputCls} resize-y min-h-[100px]`} />
            </div>
            <button type="submit" className={btnPrimary}>Send Message</button>
            <p id="formMsg" className="mt-4 text-sm font-semibold text-center" />
          </form>
        </div>

        {/* SIDE */}
        <div className="flex flex-col gap-5" style={{ flex: '0 1 280px' }}>
          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif mb-2 dark:text-white">Before You Write</h3>
            <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">Check our most common answers below — you might find your answer instantly without waiting.</p>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif mb-2 dark:text-white">Response Time</h3>
            <ul className="flex flex-col gap-3 list-none mt-2">
              <li className="flex items-center gap-3">
                <span className="inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#d4f5e2] text-[#1a7a46]">Free</span>
                <span className="text-sm text-[#6b6b7b] dark:text-[#aaa]">Within 48 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#fde9cc] text-[#a05c10]">Pro</span>
                <span className="text-sm text-[#6b6b7b] dark:text-[#aaa]">Within 12 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#d4f5e2] text-[#1a7a46]">Team</span>
                <span className="text-sm text-[#6b6b7b] dark:text-[#aaa]">Within 4 hours</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif mb-2 dark:text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className={`flex-1 text-sm ${btnOutline}`}>𝕏 Twitter</a>
              <a href="#" className={`flex-1 text-sm ${btnOutline}`}>in LinkedIn</a>
            </div>
          </div>
        </div>

      </section>

      {/* FAQ */}
      <section className="px-10 py-16 text-center">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Quick answers to the questions we hear most often.</p>
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

      <Footer />
    </>
  )
}