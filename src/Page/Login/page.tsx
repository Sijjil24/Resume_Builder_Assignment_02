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

      <div className="auth-page">

        {/* LEFT — trust panel */}
        <div className="auth-panel">
          <h2 className="auth-panel-title">Welcome back to ResumeForge</h2>
          <p className="auth-panel-sub">
            Log in and pick up right where you left off. Your dream job is one resume away.
          </p>
          <ul className="perk-list">
            {perks.map(p => (
              <li key={p.text} className="perk-item">
                <span className="perk-icon">{p.icon}</span>
                <span className="perk-text">{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="trust-badges">
            <span className="badge badge-green">✅ SSL Secured</span>
            <span className="badge badge-orange">⭐ 4.9 Rated</span>
            <span className="badge badge-green">🔐 GDPR Ready</span>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="auth-card">
          <h2 className="auth-card-heading">Welcome Back 👋</h2>
          <p className="auth-card-sub">Log in to access your resumes and templates.</p>

          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="••••••••" required />
            </div>
            <div className="form-group">
              <a href="/forgot" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>

          <div className="auth-divider">
            <span className="divider-line" />
            <span className="divider-text">or continue with</span>
            <span className="divider-line" />
          </div>

          <div className="social-row">
            <button className="btn btn-outline">🔵 Google</button>
            <button className="btn btn-outline">⬛ GitHub</button>
          </div>

          <p className="auth-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}