import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const contacts = [
  {
    label: 'Email',
    href: 'mailto:biancamargarette.vallo@cit.edu',
    text: 'biancamargarette.vallo@cit.edu',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/biancamargarettevallo',
    text: 'github.com/biancamargarettevallo',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/biancavallo/',
    text: 'linkedin.com/in/biancavallo',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi!" />
      <ul className="mt-8 space-y-3">
        {contacts.map((contact) => (
          <ContactLink
            key={contact.label}
            label={contact.label}
            href={contact.href}
            text={contact.text}
          />
        ))}
      </ul>
    </section>
  )
}