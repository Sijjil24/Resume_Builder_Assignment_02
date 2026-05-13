import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

const perks = [
  { icon: '🔒', text: 'Your data is encrypted end-to-end' },
  { icon: '⚡', text: 'Access all your resumes instantly' },
  { icon: '📄', text: 'Download unlimited PDFs on Pro' },
  { icon: '🌍', text: 'Trusted by 10,000+ job seekers' },
]

export default function Login() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const pass = (form.elements.namedItem('password') as HTMLInputElement).value
    if (!email || !pass) { alert('Please fill all fields.'); return }
    localStorage.setItem('loggedUser', email)
    window.location.href = '/dashboard'
  }

  return (
    <>
      <Navbar />

      <div className="flex items-stretch justify-center min-h-screen">

        {/* LEFT — trust panel (already dark, stays same) */}
        <div className="flex-1 max-w-[480px] flex flex-col gap-7 justify-center px-12 py-14 bg-[#1a1a2e] text-[#f5f3ee]">
          <h2 className="font-serif text-[1.75rem] leading-tight text-white">Welcome back to ResumeForge</h2>
          <p className="text-[0.97rem] -mt-4 text-[#aaa]">
            Log in and pick up right where you left off. Your dream job is one resume away.
          </p>
          <ul className="flex flex-col gap-4 list-none">
            {perks.map(p => (
              <li key={p.text} className="flex items-start gap-3">
                <span className="text-[1.25rem] shrink-0 mt-[0.1rem]">{p.icon}</span>
                <span className="text-sm leading-relaxed text-[#ccc]">{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-[0.6rem] mt-2">
            <span className="inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#d4f5e2] text-[#1a7a46]">✅ SSL Secured</span>
            <span className="inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#fde9cc] text-[#a05c10]">⭐ 4.9 Rated</span>
            <span className="inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#d4f5e2] text-[#1a7a46]">🔐 GDPR Ready</span>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="flex-1 max-w-[480px] flex flex-col justify-center gap-2 px-12 py-14 bg-white dark:bg-[#12121f]">
          <h2 className="font-serif text-[1.9rem] text-[#1a1a2e] dark:text-white">Welcome Back 👋</h2>
          <p className="text-[0.95rem] mb-4 text-[#6b6b7b] dark:text-[#aaa]">Log in to access your resumes and templates.</p>

          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" required
                className="px-4 py-[0.7rem] text-[0.95rem] outline-none border-[1.5px] border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md bg-[#f5f3ee] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#c8873a] focus:shadow-[0_0_0_3px_rgba(200,135,58,0.15)]" />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Password</label>
              <input type="password" id="password" name="password" placeholder="••••••••" required
                className="px-4 py-[0.7rem] text-[0.95rem] outline-none border-[1.5px] border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md bg-[#f5f3ee] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#c8873a] focus:shadow-[0_0_0_3px_rgba(200,135,58,0.15)]" />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <a href="/forgot" className="text-sm text-right block text-[#c8873a] hover:underline">Forgot password?</a>
            </div>
            <button type="submit"
              className="inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px w-full">
              Login
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <span className="flex-1 h-px block bg-[#ddd8cc] dark:bg-[#2a2a3e]" />
            <span className="text-xs whitespace-nowrap text-[#6b6b7b] dark:text-[#aaa]">or continue with</span>
            <span className="flex-1 h-px block bg-[#ddd8cc] dark:bg-[#2a2a3e]" />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 text-sm inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white">🔵 Google</button>
            <button className="flex-1 text-sm inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white">⬛ GitHub</button>
          </div>

          <p className="text-center text-sm mt-3 text-[#6b6b7b] dark:text-[#aaa]">
            Don't have an account? <a href="/signup" className="text-[#c8873a] font-semibold hover:underline">Sign Up</a>
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}