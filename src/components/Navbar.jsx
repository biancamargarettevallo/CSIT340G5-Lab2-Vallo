import NavLink from './NavLink'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold">Bianca Margarette Vallo</a>
        <div className="flex gap-6 text-sm text-stone-600">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </nav>
  )
}