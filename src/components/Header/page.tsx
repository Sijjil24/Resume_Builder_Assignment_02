type HeaderProps = {
  title: string
  sub?:  string
  cta?:  { label: string; href: string }
  note?: string
}

export default function Header({ title, sub, cta, note }: HeaderProps) {
  return (
    <section className="page-header">
      <div className="header-inner">
        <h1 className="section-title">{title}</h1>
        {sub  && <p className="section-sub">{sub}</p>}
        {cta  && (
          <div className="header-actions">
            <a href={cta.href} className="btn btn-primary">{cta.label}</a>
          </div>
        )}
        {note && <p className="hero-note">{note}</p>}
      </div>
    </section>
  )
}