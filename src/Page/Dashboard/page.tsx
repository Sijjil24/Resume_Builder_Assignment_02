import { useState } from 'react'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'
type Stock       = { id: number; name: string; category: string; qty: number; price: number; status: StockStatus }
type ModalType   = 'view' | 'insert' | 'update' | 'delete' | null

const INIT_STOCK: Stock[] = [
  { id: 1, name: 'Modern Pro Template',   category: 'Templates', qty: 120, price: 9,  status: 'In Stock'     },
  { id: 2, name: 'Classic Elegant Theme', category: 'Templates', qty: 85,  price: 9,  status: 'In Stock'     },
  { id: 3, name: 'Creative Bold Pack',    category: 'Themes',    qty: 12,  price: 12, status: 'Low Stock'    },
  { id: 4, name: 'ATS Checker Credits',   category: 'Credits',   qty: 500, price: 2,  status: 'In Stock'     },
  { id: 5, name: 'Cover Letter Bundle',   category: 'Bundles',   qty: 8,   price: 15, status: 'Low Stock'    },
  { id: 6, name: 'Executive Dark Theme',  category: 'Themes',    qty: 0,   price: 12, status: 'Out of Stock' },
  { id: 7, name: 'PDF Export Token',      category: 'Credits',   qty: 300, price: 1,  status: 'In Stock'     },
  { id: 8, name: 'Job Match Score Pack',  category: 'Bundles',   qty: 45,  price: 8,  status: 'In Stock'     },
]

const RESUMES = [
  { name: 'Software Engineer CV', template: 'Modern Pro', date: '2025-04-10', status: 'Published' },
  { name: 'Frontend Developer',   template: 'Classic',    date: '2025-04-18', status: 'Draft'     },
  { name: 'UI/UX Designer',       template: 'Bold',       date: '2025-04-22', status: 'Published' },
  { name: 'Data Analyst',         template: 'Minimal',    date: '2025-05-01', status: 'Draft'     },
  { name: 'Product Manager',      template: 'Executive',  date: '2025-05-03', status: 'Published' },
]

const MONTHS = [
  { month: 'Jan', sales: 320 }, { month: 'Feb', sales: 410 },
  { month: 'Mar', sales: 380 }, { month: 'Apr', sales: 520 },
  { month: 'May', sales: 490 }, { month: 'Jun', sales: 610 },
]

const QUICK_LINKS = [
  { icon: '📊', label: 'Analytics',     href: '#'        },
  { icon: '🧾', label: 'Billing',       href: '#'        },
  { icon: '⚙️', label: 'Settings',      href: '#'        },
  { icon: '📤', label: 'Export Data',   href: '#'        },
  { icon: '🔔', label: 'Notifications', href: '#'        },
  { icon: '👥', label: 'Team Members',  href: '#'        },
  { icon: '📁', label: 'My Files',      href: '#'        },
  { icon: '🆘', label: 'Help Center',   href: '/contact' },
]

const CATS = ['Templates', 'Themes', 'Credits', 'Bundles']

const btnPrimary = "inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px transition-all"
const btnOutline = "inline-flex items-center justify-center gap-1 cursor-pointer px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-transparent text-[#c8873a] border-2 border-[#c8873a] hover:bg-[#c8873a] hover:text-white transition-all"
const btnGhost   = "inline-flex items-center justify-center cursor-pointer px-4 py-[0.55rem] text-sm font-semibold rounded-md bg-transparent text-[#6b6b7b] dark:text-[#aaa] border border-[#ddd8cc] dark:border-[#2a2a3e] hover:text-[#1a1a2e] dark:hover:text-white hover:border-[#1a1a2e] dark:hover:border-white transition-all"
const btnDanger  = "inline-flex items-center justify-center cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#e74c3c] text-white hover:bg-[#c0392b] hover:-translate-y-px transition-all ml-[0.4rem]"
const inputCls   = "px-4 py-[0.7rem] text-[0.95rem] outline-none border-[1.5px] border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md bg-[#f5f3ee] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#c8873a] w-full"

function statusBadge(s: StockStatus) {
  if (s === 'In Stock')  return 'inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#d4f5e2] text-[#1a7a46]'
  if (s === 'Low Stock') return 'inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#fde9cc] text-[#a05c10]'
  return 'inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#fde8e8] text-[#a02020]'
}

const thCls = "text-left font-semibold tracking-wide px-5 py-[0.9rem]"
const tdCls = "px-5 py-[0.8rem] border-b border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-[#e0e0e0]"

export default function Dashboard() {
  const [stocks, setStocks]     = useState<Stock[]>(INIT_STOCK)
  const [modal, setModal]       = useState<ModalType>(null)
  const [selected, setSelected] = useState<Stock | null>(null)
  const [search, setSearch]     = useState('')
  const [form, setForm]         = useState({ name: '', category: 'Templates', qty: '', price: '', status: 'In Stock' })

  const filtered = stocks.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  )
  const totalQty = stocks.reduce((a, s) => a + s.qty, 0)
  const totalVal = stocks.reduce((a, s) => a + s.qty * s.price, 0)
  const lowCount = stocks.filter(s => s.status === 'Low Stock').length
  const outCount = stocks.filter(s => s.status === 'Out of Stock').length

  function openInsert() { setForm({ name: '', category: 'Templates', qty: '', price: '', status: 'In Stock' }); setModal('insert') }
  function openUpdate(s: Stock) { setSelected(s); setForm({ name: s.name, category: s.category, qty: String(s.qty), price: String(s.price), status: s.status }); setModal('update') }
  function openDelete(s: Stock) { setSelected(s); setModal('delete') }
  function openView() { setModal('view') }
  function close()    { setModal(null); setSelected(null) }

  function doInsert() {
    if (!form.name || !form.qty || !form.price) { alert('Please fill all fields.'); return }
    setStocks(p => [...p, { id: Date.now(), name: form.name, category: form.category, qty: Number(form.qty), price: Number(form.price), status: form.status as StockStatus }])
    close()
  }
  function doUpdate() {
    if (!selected) return
    setStocks(p => p.map(s => s.id === selected.id ? { ...s, name: form.name, category: form.category, qty: Number(form.qty), price: Number(form.price), status: form.status as StockStatus } : s))
    close()
  }
  function doDelete() {
    if (!selected) return
    setStocks(p => p.filter(s => s.id !== selected.id))
    close()
  }

  const catTotals = CATS.map(cat => ({ cat, count: stocks.filter(s => s.category === cat).reduce((a, s) => a + s.qty, 0) }))
  const maxCat = Math.max(...catTotals.map(c => c.count), 1)
  const lMin = 250, lMax = 700
  const linePoints = MONTHS.map((d, i) => ({ x: 50 + i * 75, y: 160 - ((d.sales - lMin) / (lMax - lMin)) * 130, ...d }))
  const pathD = linePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  const areaD = pathD + ` L${linePoints[linePoints.length - 1].x},165 L${linePoints[0].x},165 Z`

  const modalOverlay = "fixed inset-0 z-[500] flex items-center justify-center p-6 bg-black/55"
  const modalBox     = "bg-white dark:bg-[#12121f] rounded-[20px] border border-[#ddd8cc] dark:border-[#2a2a3e] w-full max-w-[540px] max-h-[85vh] overflow-y-auto shadow-2xl"
  const modalHead    = "flex items-center justify-between sticky top-0 px-7 py-5 border-b border-[#ddd8cc] dark:border-[#2a2a3e] bg-white dark:bg-[#12121f]"
  const modalBody    = "px-7 py-6 flex flex-col gap-1"

  return (
    <>
      <Navbar />

      <section className="px-10 py-12 pb-16">

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <h1 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">My Dashboard</h1>
            <p className="text-[#6b6b7b] dark:text-[#aaa] text-base">Manage stock, resumes, and your account — all in one place.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="/services" className={btnOutline}>+ New Resume</a>
            <button className={btnPrimary} onClick={openInsert}>+ Add Stock</button>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="flex flex-wrap gap-5 mb-10">
          {[
            { num: stocks.length,                  label: 'Stock Items'       },
            { num: totalQty.toLocaleString(),       label: 'Total Units'       },
            { num: `$${totalVal.toLocaleString()}`, label: 'Inventory Value'   },
            { num: lowCount,                        label: 'Low Stock Alerts'  },
            { num: outCount,                        label: 'Out of Stock'      },
            { num: RESUMES.length,                  label: 'My Resumes'        },
          ].map(s => (
            <div key={s.label} className="flex-1 basis-[160px] flex flex-col gap-1 px-6 py-5 bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl shadow-sm">
              <span className="font-serif text-[2rem] text-[#c8873a]">{s.num}</span>
              <span className="text-xs text-[#6b6b7b] dark:text-[#aaa]">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── ACTION CARDS ── */}
        <h2 className="font-serif text-[1.4rem] mt-10 mb-5 text-[#1a1a2e] dark:text-white">Stock Management</h2>
        <div className="flex flex-wrap gap-6 justify-start">
          {[
            { icon: '📦', title: 'View All Stock',  text: `Browse all ${stocks.length} items in your inventory database at a glance.`, btn: <button className={btnOutline} onClick={openView}>View All</button>,       onClick: openView   },
            { icon: '➕', title: 'Insert New Stock', text: 'Add a new product, template, or credit pack to the inventory.',             btn: <button className={btnPrimary} onClick={openInsert}>Add Item</button>,    onClick: openInsert },
            { icon: '✏️', title: 'Update Stock',     text: 'Edit quantity, price, or status of any item in the table below.',           btn: <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">Click <strong>Edit</strong> on any row to begin.</p>,   onClick: undefined  },
            { icon: '🗑️', title: 'Delete Stock',     text: 'Remove discontinued or expired items permanently from inventory.',          btn: <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">Click <strong>Delete</strong> on any row to remove.</p>, onClick: undefined  },
          ].map(c => (
            <div key={c.title} className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all flex-1 basis-[220px] max-w-[280px] text-center flex flex-col gap-2 cursor-pointer" onClick={c.onClick}>
              <div className="text-[2.4rem] mb-1">{c.icon}</div>
              <h3 className="font-serif mb-2 dark:text-white">{c.title}</h3>
              <p className="text-sm text-[#6b6b7b] dark:text-[#aaa]">{c.text}</p>
              {c.btn}
            </div>
          ))}
        </div>

        {/* ── STOCK TABLE ── */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4 mt-10">
          <h2 className="font-serif text-[1.4rem] text-[#1a1a2e] dark:text-white">Stock Records</h2>
          <input
            type="text"
            placeholder="Search by name or category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-[0.6rem] text-sm outline-none w-[260px] border-[1.5px] border-[#ddd8cc] dark:border-[#2a2a3e] rounded-md bg-[#f5f3ee] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#c8873a]"
          />
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#ddd8cc] dark:border-[#2a2a3e]">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#1a1a2e] text-white">
              <tr>
                {['#','Name','Category','Qty','Price','Total Value','Status','Actions'].map(h => (
                  <th key={h} className={thCls}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s.id} className={`${i % 2 === 1 ? 'bg-[#f9f7f3] dark:bg-[#1f1f30]' : 'dark:bg-[#12121f]'} hover:bg-[#fff3e0] dark:hover:bg-[#2a1f1a] transition-colors`}>
                  <td className={tdCls}>{s.id}</td>
                  <td className={tdCls}>{s.name}</td>
                  <td className={tdCls}>{s.category}</td>
                  <td className={tdCls}>{s.qty}</td>
                  <td className={tdCls}>${s.price}</td>
                  <td className={tdCls}>${(s.qty * s.price).toLocaleString()}</td>
                  <td className={tdCls}><span className={statusBadge(s.status)}>{s.status}</span></td>
                  <td className={tdCls}>
                    <button className={btnGhost} onClick={() => openUpdate(s)}>Edit</button>
                    <button className={btnDanger} onClick={() => openDelete(s)}>Delete</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8} className="text-center py-8 text-[#6b6b7b] dark:text-[#aaa]">No matching stock items found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── CHARTS ── */}
        <h2 className="font-serif text-[1.4rem] mt-10 mb-5 text-[#1a1a2e] dark:text-white">Stock Analytics</h2>
        <div className="flex flex-wrap gap-6">
          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm flex-1 basis-[380px] min-w-0">
            <h3 className="font-serif text-[1.05rem] mb-4 text-[#1a1a2e] dark:text-white">Units by Category</h3>
            <svg viewBox="0 0 500 210" className="w-full h-auto block">
              {catTotals.map((c, i) => {
                const barH = Math.max((c.count / maxCat) * 145, 4)
                const x = 40 + i * 110
                const y = 158 - barH
                return (
                  <g key={c.cat}>
                    <rect x={x} y={y} width={80} height={barH} rx={5} fill="#c8873a" opacity={0.85} className="hover:opacity-100 transition-opacity" />
                    <text x={x + 40} y={176} textAnchor="middle" fontSize={11} fill="#6b6b7b">{c.cat}</text>
                    <text x={x + 40} y={y - 6} textAnchor="middle" fontSize={10} fontWeight="600" fill="#c8873a">{c.count}</text>
                  </g>
                )
              })}
              <line x1="30" y1="158" x2="470" y2="158" stroke="#2a2a3e" strokeWidth={1} />
            </svg>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl p-8 shadow-sm flex-1 basis-[380px] min-w-0">
            <h3 className="font-serif text-[1.05rem] mb-4 text-[#1a1a2e] dark:text-white">Monthly Sales Trend</h3>
            <svg viewBox="0 0 500 210" className="w-full h-auto block">
              <path d={areaD} fill="#c8873a" opacity={0.10} />
              <path d={pathD} stroke="#c8873a" strokeWidth={2.5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
              {linePoints.map(p => (
                <g key={p.month}>
                  <circle cx={p.x} cy={p.y} r={5} fill="#c8873a" stroke="white" strokeWidth={2} />
                  <text x={p.x} y={180} textAnchor="middle" fontSize={11} fill="#6b6b7b">{p.month}</text>
                  <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize={10} fontWeight="600" fill="#c8873a">{p.sales}</text>
                </g>
              ))}
              <line x1="30" y1="158" x2="480" y2="158" stroke="#2a2a3e" strokeWidth={1} />
            </svg>
          </div>
        </div>

        {/* ── RESUME TABLE ── */}
        <h2 className="font-serif text-[1.4rem] mt-10 mb-5 text-[#1a1a2e] dark:text-white">My Resumes</h2>
        <div className="overflow-x-auto rounded-xl border border-[#ddd8cc] dark:border-[#2a2a3e]">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#1a1a2e] text-white">
              <tr>
                {['Resume Name','Template','Last Edited','Status','Actions'].map(h => (
                  <th key={h} className={thCls}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESUMES.map((r, i) => (
                <tr key={i} className={`${i % 2 === 1 ? 'bg-[#f9f7f3] dark:bg-[#1f1f30]' : 'dark:bg-[#12121f]'} hover:bg-[#fff3e0] dark:hover:bg-[#2a1f1a] transition-colors`}>
                  <td className={tdCls}>{r.name}</td>
                  <td className={tdCls}>{r.template}</td>
                  <td className={tdCls}>{r.date}</td>
                  <td className={tdCls}>
                    <span className={r.status === 'Published'
                      ? 'inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#d4f5e2] text-[#1a7a46]'
                      : 'inline-block px-[0.65rem] py-[0.2rem] rounded-full text-xs font-semibold bg-[#fde9cc] text-[#a05c10]'}>
                      {r.status}
                    </span>
                  </td>
                  <td className={tdCls}>
                    <button className={btnGhost}>Edit</button>
                    <button className={`${btnOutline} ml-2`}>Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── QUICK LINKS ── */}
        <h2 className="font-serif text-[1.4rem] mt-10 mb-5 text-[#1a1a2e] dark:text-white">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          {QUICK_LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="bg-white dark:bg-[#1a1a2e] border border-[#ddd8cc] dark:border-[#2a2a3e] rounded-xl px-4 py-5 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all flex-1 basis-[120px] max-w-[150px] text-center flex flex-col items-center gap-2 cursor-pointer group">
              <span className="text-[1.8rem]">{l.icon}</span>
              <span className="text-xs font-semibold text-[#6b6b7b] dark:text-[#aaa] group-hover:text-[#c8873a] transition-colors">{l.label}</span>
            </a>
          ))}
        </div>

      </section>

      {/* ══ MODALS ══ */}

      {modal === 'view' && (
        <div className={modalOverlay} onClick={close}>
          <div className={modalBox} onClick={e => e.stopPropagation()}>
            <div className={modalHead}>
              <h2 className="font-serif text-[1.2rem] text-[#1a1a2e] dark:text-white">All Stock — {stocks.length} items</h2>
              <button className={btnGhost} onClick={close}>✕</button>
            </div>
            <div className={modalBody}>
              {stocks.map(s => (
                <div key={s.id} className="flex items-center justify-between flex-wrap gap-2 py-[0.6rem] text-sm border-b border-[#ddd8cc] dark:border-[#2a2a3e] text-[#1a1a2e] dark:text-[#e0e0e0]">
                  <span>{s.name}</span>
                  <span>{s.category}</span>
                  <span>Qty: {s.qty}</span>
                  <span className={statusBadge(s.status)}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {modal === 'insert' && (
        <div className={modalOverlay} onClick={close}>
          <div className={modalBox} onClick={e => e.stopPropagation()}>
            <div className={modalHead}>
              <h2 className="font-serif text-[1.2rem] text-[#1a1a2e] dark:text-white">Insert New Stock Item</h2>
              <button className={btnGhost} onClick={close}>✕</button>
            </div>
            <div className={modalBody}>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Name</label>
                <input type="text" placeholder="Item name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Category</label>
                <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={inputCls}>
                  {CATS.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col gap-1 mb-5 flex-1 basis-[200px]">
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Quantity</label>
                  <input type="number" min="0" placeholder="0" value={form.qty} onChange={e => setForm(f => ({ ...f, qty: e.target.value }))} className={inputCls} />
                </div>
                <div className="flex flex-col gap-1 mb-5 flex-1 basis-[200px]">
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Price ($)</label>
                  <input type="number" min="0" placeholder="0" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className={inputCls} />
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Status</label>
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className={inputCls}>
                  <option>In Stock</option><option>Low Stock</option><option>Out of Stock</option>
                </select>
              </div>
              <div className="flex gap-3 mt-4">
                <button className={btnPrimary} onClick={doInsert}>Insert Item</button>
                <button className={btnGhost} onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal === 'update' && selected && (
        <div className={modalOverlay} onClick={close}>
          <div className={modalBox} onClick={e => e.stopPropagation()}>
            <div className={modalHead}>
              <h2 className="font-serif text-[1.2rem] text-[#1a1a2e] dark:text-white">Update: {selected.name}</h2>
              <button className={btnGhost} onClick={close}>✕</button>
            </div>
            <div className={modalBody}>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Name</label>
                <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputCls} />
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Category</label>
                <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={inputCls}>
                  {CATS.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col gap-1 mb-5 flex-1 basis-[200px]">
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Quantity</label>
                  <input type="number" min="0" value={form.qty} onChange={e => setForm(f => ({ ...f, qty: e.target.value }))} className={inputCls} />
                </div>
                <div className="flex flex-col gap-1 mb-5 flex-1 basis-[200px]">
                  <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Price ($)</label>
                  <input type="number" min="0" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className={inputCls} />
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#6b6b7b] dark:text-[#aaa]">Status</label>
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className={inputCls}>
                  <option>In Stock</option><option>Low Stock</option><option>Out of Stock</option>
                </select>
              </div>
              <div className="flex gap-3 mt-4">
                <button className={btnPrimary} onClick={doUpdate}>Save Changes</button>
                <button className={btnGhost} onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal === 'delete' && selected && (
        <div className={modalOverlay} onClick={close}>
          <div className="bg-white dark:bg-[#12121f] rounded-[20px] border border-[#ddd8cc] dark:border-[#2a2a3e] w-full max-w-[400px] shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className={modalHead}>
              <h2 className="font-serif text-[1.2rem] text-[#1a1a2e] dark:text-white">Confirm Delete</h2>
              <button className={btnGhost} onClick={close}>✕</button>
            </div>
            <div className={modalBody}>
              <p className="text-[0.95rem] leading-relaxed mb-2 text-[#1a1a2e] dark:text-[#e0e0e0]">
                Are you sure you want to delete <strong>{selected.name}</strong>? This action cannot be undone.
              </p>
              <div className="flex gap-3 mt-4">
                <button className={btnDanger} onClick={doDelete}>Yes, Delete</button>
                <button className={btnGhost} onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}