import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/',          label: 'Home',      end: true  },
  { to: '/services',  label: 'Services',  end: false },
  { to: '/dashboard', label: 'Dashboard', end: false },
  { to: '/contact',   label: 'Contact',   end: false },
  { to: '/login',     label: 'Login',     end: false },
]

export default function Navbar() {
  const [dark, setDark] = useState<boolean>(() => localStorage.getItem('theme') === 'dark')
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="navbar">

      <NavLink to="/" className="nav-logo">ResumeForge</NavLink>

      <ul className={open ? 'nav-links nav-open' : 'nav-links'}>
        {LINKS.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="dark-toggle" onClick={() => setDark(d => !d)}>
          {dark ? '☀️' : '🌙'}
        </button>
        <button className="nav-burger" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

    </nav>
  )
}