type HeaderProps = {
  title: string
  sub?:  string
  cta?:  { label: string; href: string }
  note?: string
}

export default function Header({ title, sub, cta, note }: HeaderProps) {
  return (
    <section className="text-center px-10 pt-16 pb-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-serif text-[2rem] text-[#1a1a2e] dark:text-white mb-2">{title}</h1>
        {sub  && <p className="text-[#6b6b7b] dark:text-[#aaa] mb-10 text-base">{sub}</p>}
        {cta  && (
          <div className="flex gap-4 flex-wrap justify-center">
            <a href={cta.href} className="inline-flex items-center justify-center gap-1 cursor-pointer border-none px-6 py-[0.65rem] text-sm font-semibold rounded-md bg-[#c8873a] text-white hover:bg-[#e8a85a] hover:-translate-y-px">{cta.label}</a>
          </div>
        )}
        {note && <p className="text-xs -mt-2 text-[#6b6b7b] dark:text-[#aaa]">{note}</p>}
      </div>
    </section>
  )
}