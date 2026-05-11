const YEAR = new Date().getFullYear()

const COL1 = [
  { label: 'Home',      href: '/'          },
  { label: 'Services',  href: '/services'  },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Contact',   href: '/contact'   },
]

const COL2 = [
  { label: 'Login',          href: '/login'   },
  { label: 'Sign Up',        href: '/signup'  },
  { label: 'Privacy Policy', href: '#'        },
  { label: 'Terms of Use',   href: '#'        },
]

const COL3 = [
  { label: '𝕏  Twitter',  href: '#' },
  { label: 'in LinkedIn', href: '#' },
  { label: '⬛ GitHub',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer-full">

      <div className="footer-grid">

        <div className="footer-brand-col">
          <span className="footer-logo">ResumeForge</span>
          <p className="footer-tagline">
            Build resumes that get you hired. Trusted by 10,000+ job seekers worldwide.
          </p>
          <p className="footer-copy">© {YEAR} ResumeForge. All rights reserved.</p>
        </div>

        <div className="footer-link-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-link-list">
            {COL1.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>

        <div className="footer-link-col">
          <h4 className="footer-col-title">Account & Legal</h4>
          <ul className="footer-link-list">
            {COL2.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>

        <div className="footer-link-col">
          <h4 className="footer-col-title">Follow Us</h4>
          <ul className="footer-link-list">
            {COL3.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>Made at University of Gujrat, Pakistan</span>
        <span>
          <a href="/contact">support@resumeforge.com</a>
        </span>
      </div>

    </footer>
  )
}