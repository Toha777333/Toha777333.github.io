import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects }) {
  return (
    <section className="max-w-[1020px] mx-auto px-6 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-start justify-between mb-8">
        <p className="text-[17px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40">
          02 / Избранные проекты
        </p>
      </div>

      {/* Projects grid — 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
