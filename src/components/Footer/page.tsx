const YEAR = new Date().getFullYear()

const COL1 = [
  { label: 'Home',      href: '/'          },
  { label: 'Services',  href: '/services'  },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Contact',   href: '/contact'   },
]
const COL2 = [
  { label: 'Login',          href: '/login'  },
  { label: 'Sign Up',        href: '/signup' },
  { label: 'Privacy Policy', href: '#'       },
  { label: 'Terms of Use',   href: '#'       },
]
const COL3 = [
  { label: '𝕏  Twitter',  href: '#' },
  { label: 'in LinkedIn', href: '#' },
  { label: '⬛ GitHub',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] mt-16 px-10 pt-14 pb-0">

      <div className="flex flex-wrap gap-10 pb-10 border-b border-white/[0.08]">

        <div className="flex flex-col gap-3" style={{ flex: '2 1 220px' }}>
          <span className="font-serif text-2xl text-[#c8873a]">ResumeForge</span>
          <p className="text-sm leading-relaxed max-w-[280px] text-[#999]">
            Build resumes that get you hired. Trusted by 10,000+ job seekers worldwide.
          </p>
          <p className="text-xs text-[#666]">© {YEAR} ResumeForge. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-3" style={{ flex: '1 1 130px' }}>
          <h4 className="font-serif text-[0.95rem] text-white">Navigation</h4>
          <ul className="flex flex-col gap-2 list-none">
            {COL1.map(l => <li key={l.label}><a href={l.href} className="text-sm text-[#999] hover:text-[#c8873a]">{l.label}</a></li>)}
          </ul>
        </div>

        <div className="flex flex-col gap-3" style={{ flex: '1 1 130px' }}>
          <h4 className="font-serif text-[0.95rem] text-white">Account & Legal</h4>
          <ul className="flex flex-col gap-2 list-none">
            {COL2.map(l => <li key={l.label}><a href={l.href} className="text-sm text-[#999] hover:text-[#c8873a]">{l.label}</a></li>)}
          </ul>
        </div>

        <div className="flex flex-col gap-3" style={{ flex: '1 1 130px' }}>
          <h4 className="font-serif text-[0.95rem] text-white">Follow Us</h4>
          <ul className="flex flex-col gap-2 list-none">
            {COL3.map(l => <li key={l.label}><a href={l.href} className="text-sm text-[#999] hover:text-[#c8873a]">{l.label}</a></li>)}
          </ul>
        </div>

      </div>

      <div className="flex flex-wrap justify-between items-center gap-3 py-5 text-xs text-[#666]">
        <span>Made at University of Gujrat, Pakistan</span>
        <span><a href="/contact" className="text-[#c8873a] hover:underline">support@resumeforge.com</a></span>
      </div>

    </footer>
  )
}