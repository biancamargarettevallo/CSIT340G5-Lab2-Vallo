import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const projects = [
  {
    year: '2025',
    title: 'Momentum',
    description: 'An employee performance tracker that shows KPIs like compliance, attendance, and backlog in one dashboard for managers.',
    tech: 'Django · HTML · CSS · JavaScript · Supabase',
    link: 'https://github.com/hetorydetorydak/CSIT327-G2-Momentum.git',
  },
  {
    year: '2025',
    title: 'NASync',
    description:
      'A duty management system for CIT-U scholars that replaces paper logbooks with real-time attendance tracking.',
    tech: 'Spring Boot · React · Kotlin',
    link: 'https://github.com/biancamargarettevallo/IT342_NASync_G4_Vallo.git',
  },
  {
    year: '2026',
    title: 'Kita Kita',
    description:
      'A sales and expense tracker for small stores with multiple branches, so owners can see their real profit.',
    tech: 'React · Spring Boot · Supabase',
    link: 'https://github.com/biancamargarettevallo/kitakitaApp.git',
  },
  {
    year: '2025 - Present',
    title: 'GIT it!',
    description:
      'A Git learning platform where you practice fixing problems in a simulated terminal.',
    tech: 'React · Vite · Django',
    link: 'https://github.com/joanaxyz/2526-sem2-it332-34_GITit.git',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            year={project.year}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}