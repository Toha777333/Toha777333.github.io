import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects }) {
  return (
    <section className="max-w-[1140px] mx-auto px-6 md:px-8 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <p className="font-mono text-[14px] sm:text-[15px] font-semibold tracking-widest uppercase text-[#66d9ed]">
          // 02 / Избранные проекты
        </p>
      </div>

      {/* Projects grid — 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
