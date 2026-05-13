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
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    function handleResize() { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="flex items-center justify-between sticky top-0 z-[100] px-10 h-[68px] bg-white dark:bg-[#12121f] border-b border-[#ddd8cc] dark:border-[#2a2a3e] shadow-sm">

      <NavLink to="/" className="font-serif text-2xl tracking-wide text-[#c8873a]">ResumeForge</NavLink>

      <ul className={`${open ? 'flex' : 'hidden md:flex'} items-center gap-8 list-none`}>
        {LINKS.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium relative transition-colors ${isActive ? 'text-[#c8873a]' : 'text-[#6b6b7b] dark:text-[#aaa] hover:text-[#c8873a]'}`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <button
          className="bg-transparent rounded-[50px] px-3 py-1 cursor-pointer text-base border-2 border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-white hover:border-[#c8873a] hover:bg-[#c8873a] hover:text-white transition-all"
          onClick={() => setDark(d => !d)}>
          {dark ? '☀️' : '🌙'}
        </button>
        <button
          className="md:hidden bg-transparent cursor-pointer text-lg px-[0.6rem] py-[0.3rem] border-2 border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md text-[#1a1a2e] dark:text-white hover:border-[#c8873a] hover:text-[#c8873a]"
          onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

    </nav>
  )
}