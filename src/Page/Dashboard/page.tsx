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

function statusClass(s: StockStatus) {
  if (s === 'In Stock')  return 'badge badge-green'
  if (s === 'Low Stock') return 'badge badge-orange'
  return 'badge badge-red'
}

export default function Dashboard() {
  const [stocks, setStocks]     = useState<Stock[]>(INIT_STOCK)
  const [modal, setModal]       = useState<ModalType>(null)
  const [selected, setSelected] = useState<Stock | null>(null)
  const [search, setSearch]     = useState('')
  const [form, setForm]         = useState({ name: '', category: 'Templates', qty: '', price: '', status: 'In Stock' })

  const filtered  = stocks.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  )
  const totalQty  = stocks.reduce((a, s) => a + s.qty, 0)
  const totalVal  = stocks.reduce((a, s) => a + s.qty * s.price, 0)
  const lowCount  = stocks.filter(s => s.status === 'Low Stock').length
  const outCount  = stocks.filter(s => s.status === 'Out of Stock').length

  function openInsert() {
    setForm({ name: '', category: 'Templates', qty: '', price: '', status: 'In Stock' })
    setModal('insert')
  }
  function openUpdate(s: Stock) {
    setSelected(s)
    setForm({ name: s.name, category: s.category, qty: String(s.qty), price: String(s.price), status: s.status })
    setModal('update')
  }
  function openDelete(s: Stock) { setSelected(s); setModal('delete') }
  function openView()            { setModal('view') }
  function close()               { setModal(null); setSelected(null) }

  function doInsert() {
    if (!form.name || !form.qty || !form.price) { alert('Please fill all fields.'); return }
    setStocks(p => [...p, {
      id: Date.now(), name: form.name, category: form.category,
      qty: Number(form.qty), price: Number(form.price), status: form.status as StockStatus,
    }])
    close()
  }
  function doUpdate() {
    if (!selected) return
    setStocks(p => p.map(s => s.id === selected.id
      ? { ...s, name: form.name, category: form.category, qty: Number(form.qty), price: Number(form.price), status: form.status as StockStatus }
      : s))
    close()
  }
  function doDelete() {
    if (!selected) return
    setStocks(p => p.filter(s => s.id !== selected.id))
    close()
  }

  // ── Bar chart data ──
  const catTotals = CATS.map(cat => ({
    cat, count: stocks.filter(s => s.category === cat).reduce((a, s) => a + s.qty, 0),
  }))
  const maxCat = Math.max(...catTotals.map(c => c.count), 1)

  // ── Line chart data ──
  const lMin = 250, lMax = 700
  const linePoints = MONTHS.map((d, i) => ({
    x: 50 + i * 75,
    y: 160 - ((d.sales - lMin) / (lMax - lMin)) * 130,
    ...d,
  }))
  const pathD = linePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  const areaD = pathD + ` L${linePoints[linePoints.length - 1].x},165 L${linePoints[0].x},165 Z`

  return (
    <>
      <Navbar />

      <section className="dash-section">

        {/* ── HEADER ── */}
        <div className="dashboard-header">
          <div>
            <h1 className="section-title">My Dashboard</h1>
            <p className="section-sub ">Manage stock, resumes, and your account — all in one place.</p>
          </div>
          <div className="dash-header-btns">
            <a href="/services" className="btn btn-outline">+ New Resume</a>
            <button className="btn btn-primary" onClick={openInsert}>+ Add Stock</button>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-num">{stocks.length}</span>
            <span className="stat-label">Stock Items</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{totalQty.toLocaleString()}</span>
            <span className="stat-label">Total Units</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">${totalVal.toLocaleString()}</span>
            <span className="stat-label">Inventory Value</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{lowCount}</span>
            <span className="stat-label">Low Stock Alerts</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{outCount}</span>
            <span className="stat-label">Out of Stock</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{RESUMES.length}</span>
            <span className="stat-label">My Resumes</span>
          </div>
        </div>

        {/* ── STOCK ACTION CARDS ── */}
        <h2 className="dash-subheading">Stock Management</h2>
        <div className="action-grid">
          <div className="card action-card" onClick={openView}>
            <div className="action-icon">📦</div>
            <h3 className="card-heading">View All Stock</h3>
            <p className="card-text">Browse all {stocks.length} items in your inventory database at a glance.</p>
            <button className="btn btn-outline">View All</button>
          </div>
          <div className="card action-card" onClick={openInsert}>
            <div className="action-icon">➕</div>
            <h3 className="card-heading">Insert New Stock</h3>
            <p className="card-text">Add a new product, template, or credit pack to the inventory.</p>
            <button className="btn btn-primary">Add Item</button>
          </div>
          <div className="card action-card">
            <div className="action-icon">✏️</div>
            <h3 className="card-heading">Update Stock</h3>
            <p className="card-text">Edit quantity, price, or status of any item in the table below.</p>
            <p className="card-text">Click <strong>Edit</strong> on any row to begin.</p>
          </div>
          <div className="card action-card">
            <div className="action-icon">🗑️</div>
            <h3 className="card-heading">Delete Stock</h3>
            <p className="card-text">Remove discontinued or expired items permanently from inventory.</p>
            <p className="card-text">Click <strong>Delete</strong> on any row to remove.</p>
          </div>
        </div>

        {/* ── STOCK TABLE ── */}
        <div className="dash-table-head">
          <h2 className="dash-subheading">Stock Records</h2>
          <input
            type="text"
            className="search-input"
            placeholder="Search by name or category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total Value</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.category}</td>
                  <td>{s.qty}</td>
                  <td>${s.price}</td>
                  <td>${(s.qty * s.price).toLocaleString()}</td>
                  <td><span className={statusClass(s.status)}>{s.status}</span></td>
                  <td>
                    <button className="modal-close-btn" onClick={() => openUpdate(s)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => openDelete(s)}>Delete</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={8} className="table-empty">No matching stock items found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── CHARTS ── */}
        <h2 className="dash-subheading">Stock Analytics</h2>
        <div className="charts-row">

          <div className="card chart-box">
            <h3 className="chart-title">Units by Category</h3>
            <svg viewBox="0 0 500 210" className="chart-svg">
              {catTotals.map((c, i) => {
                const barH = Math.max((c.count / maxCat) * 145, 4)
                const x = 40 + i * 110
                const y = 158 - barH
                return (
                  <g key={c.cat}>
                    <rect x={x} y={y} width={80} height={barH} rx={5} className="chart-bar" />
                    <text x={x + 40} y={176} textAnchor="middle" className="chart-label">{c.cat}</text>
                    <text x={x + 40} y={y - 6} textAnchor="middle" className="chart-value">{c.count}</text>
                  </g>
                )
              })}
              <line x1="30" y1="158" x2="470" y2="158" className="chart-axis" />
            </svg>
          </div>

          <div className="card chart-box">
            <h3 className="chart-title">Monthly Sales Trend</h3>
            <svg viewBox="0 0 500 210" className="chart-svg">
              <path d={areaD} className="chart-area" />
              <path d={pathD} className="chart-line" />
              {linePoints.map(p => (
                <g key={p.month}>
                  <circle cx={p.x} cy={p.y} r={5} className="chart-dot" />
                  <text x={p.x} y={180} textAnchor="middle" className="chart-label">{p.month}</text>
                  <text x={p.x} y={p.y - 10} textAnchor="middle" className="chart-value">{p.sales}</text>
                </g>
              ))}
              <line x1="30" y1="158" x2="480" y2="158" className="chart-axis" />
            </svg>
          </div>

        </div>

        {/* ── RESUME TABLE ── */}
        <h2 className="dash-subheading">My Resumes</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Resume Name</th>
                <th>Template</th>
                <th>Last Edited</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {RESUMES.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.template}</td>
                  <td>{r.date}</td>
                  <td>
                    <span className={r.status === 'Published' ? 'badge badge-green' : 'badge badge-orange'}>
                      {r.status}
                    </span>
                  </td>
                  <td>
                    <button className="modal-close-btn">Edit</button>
                    <button className="btn btn-outline">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── QUICK LINKS ── */}
        <h2 className="dash-subheading">Quick Links</h2>
        <div className="quick-grid">
          {QUICK_LINKS.map(l => (
            <a key={l.label} href={l.href} className="card quick-card">
              <span className="quick-icon">{l.icon}</span>
              <span className="quick-label">{l.label}</span>
            </a>
          ))}
        </div>

      </section>

      {/* ══════════════ MODALS ══════════════ */}

      {modal === 'view' && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <h2 className="modal-title">All Stock — {stocks.length} items</h2>
              <button className="modal-close-btn" onClick={close}>✕</button>
            </div>
            <div className="modal-body">
              {stocks.map(s => (
                <div key={s.id} className="modal-row">
                  <span>{s.name}</span>
                  <span>{s.category}</span>
                  <span>Qty: {s.qty}</span>
                  <span className={statusClass(s.status)}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {modal === 'insert' && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <h2 className="modal-title">Insert New Stock Item</h2>
              <button className="modal-close-btn" onClick={close}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Item name" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                  {CATS.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="number" min="0" placeholder="0" value={form.qty}
                    onChange={e => setForm(f => ({ ...f, qty: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Price ($)</label>
                  <input type="number" min="0" placeholder="0" value={form.price}
                    onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={doInsert}>Insert Item</button>
                <button className="modal-close-btn" onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal === 'update' && selected && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <h2 className="modal-title">Update: {selected.name}</h2>
              <button className="modal-close-btn" onClick={close}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                  {CATS.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="number" min="0" value={form.qty}
                    onChange={e => setForm(f => ({ ...f, qty: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Price ($)</label>
                  <input type="number" min="0" value={form.price}
                    onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={doUpdate}>Save Changes</button>
                <button className="modal-close-btn" onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal === 'delete' && selected && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-box modal-box-sm" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <h2 className="modal-title">Confirm Delete</h2>
              <button className="modal-close-btn" onClick={close}>✕</button>
            </div>
            <div className="modal-body">
              <p className="modal-confirm-text">
                Are you sure you want to delete <strong>{selected.name}</strong>?
                This action cannot be undone.
              </p>
              <div className="modal-actions">
                <button className="btn btn-danger" onClick={doDelete}>Yes, Delete</button>
                <button className="modal-close-btn" onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}