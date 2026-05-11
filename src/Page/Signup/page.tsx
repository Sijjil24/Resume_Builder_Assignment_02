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

      <div className="auth-page">

        {/* LEFT — trust panel */}
        <div className="auth-panel">
          <h2 className="auth-panel-title">Join 10,000+ job seekers already using ResumeForge</h2>
          <p className="auth-panel-sub">
            Free to start. No credit card. Cancel anytime.
          </p>
          <ul className="perk-list">
            {perks.map(p => (
              <li key={p.text} className="perk-item">
                <span className="perk-icon">{p.icon}</span>
                <span className="perk-text">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="mini-steps">
            {steps.map(s => (
              <div key={s.n} className="mini-step">
                <span className="mini-step-num">{s.n}</span>
                <div className="mini-step-info">
                  <strong>{s.t}</strong>
                  <span className="perk-text">{s.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="auth-card">
          <h2 className="auth-card-heading">Create Account ✨</h2>
          <p className="auth-card-sub">Join thousands building standout resumes.</p>

          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" placeholder="Sia Khan" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Min. 8 characters" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" id="confirm" name="confirm" placeholder="Repeat password" required />
            </div>
            <p className="terms-note">
              By signing up you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>

          <div className="auth-divider">
            <span className="divider-line" />
            <span className="divider-text">or sign up with</span>
            <span className="divider-line" />
          </div>

          <div className="social-row">
            <button className="btn btn-outline">🔵 Google</button>
            <button className="btn btn-outline">⬛ GitHub</button>
          </div>

          <p className="auth-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}