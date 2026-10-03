import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const timeline = [
  {
    period: '2024 – Present',
    title: 'BS Information Technology',
    place: 'Cebu Institute of Technology – University',
    description: 'Taking up networking, systems administration, and cybersecurity.',
  },
  {
    period: '2025',
    title: 'Participant, "Can You HackIT?" Hackathon',
    place: 'IBPAP, held at CIT-U',
    description: 'Joined a hackathon and worked with a team to solve a challenge under time pressure.',
  },
  {
    period: '2021 – 2023',
    title: 'Senior High School, STEM Strand',
    place: 'Saint Theresa’s College of Cebu',
    description: 'Built a strong foundation in math and science, which led me to IT.',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
            period={item.period}
            title={item.title}
            place={item.place}
            description={item.description}
          />
        ))}
      </ol>
    </section>
  )
}