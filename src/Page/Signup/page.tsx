import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

const perks = [
  { icon: '🎨', text: '50+ professional templates included' },
  { icon: '📊', text: 'Live ATS score on every resume' },
  { icon: '💾', text: 'Auto-save — never lose your work' },
  { icon: '🚀', text: 'Get hired faster — avg. 2× more callbacks' },
]

const steps = [
  { n: '1', t: 'Create account',    d: 'Takes under 60 seconds.' },
  { n: '2', t: 'Pick a template',   d: 'Choose from 50+ designs.' },
  { n: '3', t: 'Fill your details', d: 'Guided, step-by-step.' },
  { n: '4', t: 'Download & apply',  d: 'PDF ready instantly.' },
]

const inputCls = "px-4 py-[0.7rem] text-[0.95rem] outline-none border-[1.5px] border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md bg-[#f5f3ee] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#c8873a] w-full"
const btnPrimary = "inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px transition-all w-full"
const btnOutline = "flex-1 text-sm inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white transition-all"

export default function Signup() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name  = (form.elements.namedItem('fullname') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const pass  = (form.elements.namedItem('password') as HTMLInputElement).value
    const conf  = (form.elements.namedItem('confirm') as HTMLInputElement).value
    if (!name || !email || !pass) { alert('Please fill all fields.'); return }
    if (pass !== conf) { alert('Passwords do not match.'); return }
    if (pass.length < 8) { alert('Password must be at least 8 characters.'); return }
    localStorage.setItem('loggedUser', email)
    window.location.href = '/dashboard'
  }

  return (
    <>
      <Navbar />

      <div className="flex items-stretch justify-center min-h-screen">

        {/* LEFT — trust panel (already dark, stays same) */}
        <div className="flex-1 max-w-[480px] flex flex-col gap-7 justify-center px-12 py-14 bg-[#1a1a2e] text-[#f5f3ee]">
          <h2 className="font-serif text-[1.75rem] leading-tight text-white">Join 10,000+ job seekers already using ResumeForge</h2>
          <p className="text-[0.97rem] -mt-4 text-[#aaa]">Free to start. No credit card. Cancel anytime.</p>

          <ul className="flex flex-col gap-4 list-none">
            {perks.map(p => (
              <li key={p.text} className="flex items-start gap-3">
                <span className="text-[1.25rem] shrink-0 mt-[0.1rem]">{p.icon}</span>
                <span className="text-sm leading-relaxed text-[#ccc]">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-2">
            {steps.map(s => (
              <div key={s.n} className="flex items-start gap-4">
                <span className="font-serif text-[1.6rem] leading-none shrink-0 text-[#c8873a] opacity-70">{s.n}</span>
                <div className="flex flex-col gap-0 text-sm text-[#f5f3ee]">
                  <strong>{s.t}</strong>
                  <span className="text-sm leading-relaxed text-[#ccc]">{s.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="flex-1 max-w-[480px] flex flex-col justify-center gap-2 px-12 py-14 bg-white dark:bg-[#12121f]">
          <h2 className="font-serif text-[1.9rem] text-[#1a1a2e] dark:text-white">Create Account ✨</h2>
          <p className="text-[0.95rem] mb-4 text-[#6b6b7b] dark:text-[#aaa]">Join thousands building standout resumes.</p>

          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="fullname" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Full Name</label>
              <input type="text" id="fullname" name="fullname" placeholder="Sia Khan" required className={inputCls} />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" required className={inputCls} />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Password</label>
              <input type="password" id="password" name="password" placeholder="Min. 8 characters" required className={inputCls} />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="confirm" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Confirm Password</label>
              <input type="password" id="confirm" name="confirm" placeholder="Repeat password" required className={inputCls} />
            </div>
            <p className="text-xs mb-2 text-[#6b6b7b] dark:text-[#aaa]">
              By signing up you agree to our <a href="/terms" className="text-[#c8873a] hover:underline">Terms</a> and <a href="/privacy" className="text-[#c8873a] hover:underline">Privacy Policy</a>.
            </p>
            <button type="submit" className={btnPrimary}>Create Account</button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <span className="flex-1 h-px block bg-[#ddd8cc] dark:bg-[#2a2a3e]" />
            <span className="text-xs whitespace-nowrap text-[#6b6b7b] dark:text-[#aaa]">or sign up with</span>
            <span className="flex-1 h-px block bg-[#ddd8cc] dark:bg-[#2a2a3e]" />
          </div>

          <div className="flex gap-4">
            <button className={btnOutline}>🔵 Google</button>
            <button className={btnOutline}>⬛ GitHub</button>
          </div>

          <p className="text-center text-sm mt-3 text-[#6b6b7b] dark:text-[#aaa]">
            Already have an account? <a href="/login" className="text-[#c8873a] font-semibold hover:underline">Login</a>
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}