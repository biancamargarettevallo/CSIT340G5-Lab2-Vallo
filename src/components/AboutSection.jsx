import SectionHeading from './SectionHeading'
import Fact from './Fact'

const facts = [
  { label: 'Course', value: 'BS Information Technology' },
  { label: 'Year level', value: 'Fourth year' },
  { label: 'School', value: 'CIT-U' },
  { label: 'Based in', value: 'Cebu City' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I'm an IT student at CIT-U still figuring things out one project at a time. 
        I like making websites, poking at how things work, and fixing stuff when it breaks. 
        I'm also getting into cybersecurity for fun.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {facts.map((fact) => (
          <Fact key={fact.label} label={fact.label} value={fact.value} />
        ))}
      </dl>
    </section>
  )
}