import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects }) {
  return (
    <section className="max-w-[680px] mx-auto px-6 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-start justify-between mb-8">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40">
          02 / Featured Work
        </p>
        <p className="text-[11px] text-[#1A1A1A]/40 text-right hidden sm:block">
          Selected systems, tools, and shipped games.
        </p>
      </div>

      {/* Projects grid — 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
