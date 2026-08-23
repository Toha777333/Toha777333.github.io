import { Code2, ExternalLink, Gamepad2 } from 'lucide-react'

function ProjectMedia({ media, title }) {
  const baseClass = 'absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'

  if (media?.type === 'video') {
    return (
      <video
        className={baseClass}
        autoPlay
        loop
        muted
        playsInline
        src={media.url}
      />
    )
  }

  if (media?.type === 'image' && media?.url) {
    return (
      <img
        className={baseClass}
        src={media.url}
        alt={title}
        onError={(e) => { e.target.style.display = 'none' }}
      />
    )
  }

  return null
}

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col bg-[#161822] border border-white/[0.08] hover:border-[#66d9ed]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[#66d9ed]/5">
      {/* Media area */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#0a0b10]">
        <ProjectMedia media={project.media} title={project.title} />
      </div>

      {/* Card body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="text-[22px] sm:text-[24px] font-bold text-white group-hover:text-[#66d9ed] transition-colors leading-snug mb-2.5">
          {project.title}
        </h3>
        <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#94a3b8] mb-6 flex-1">
          {project.description}
        </p>

        {/* Footer row: tech stack + links */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
          {/* Tech stack */}
          <div className="flex items-center gap-2 flex-wrap">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[12px] font-medium bg-[#66d9ed]/10 text-[#66d9ed] border border-[#66d9ed]/20 px-2.5 py-1 rounded-md tracking-wider uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 ml-3 flex-shrink-0">
            {project.links?.sourceCode && (
              <a
                href={project.links.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/60 hover:text-[#66d9ed] hover:border-[#66d9ed]/40 hover:bg-[#66d9ed]/10 transition-all duration-200"
                aria-label="Исходный код на GitHub"
                title="Исходный код"
              >
                <Code2 size={19} />
              </a>
            )}
            {project.links?.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/60 hover:text-[#66d9ed] hover:border-[#66d9ed]/40 hover:bg-[#66d9ed]/10 transition-all duration-200"
                aria-label="Открыть игру"
                title="Перейти к игре"
              >
                <Gamepad2 size={19} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
