import { Code2, ExternalLink } from 'lucide-react'

const CATEGORY_COLORS = [
  { label: 'SYSTEM / 01',   bg: '#3B5BDB' },
  { label: 'BACKEND / 02',  bg: '#1A1A1A' },
  { label: 'GAMEPLAY / 03', bg: '#E8441E' },
  { label: 'PIPELINE / 04', bg: '#12B886' },
  { label: 'PC GAME / 05',  bg: '#7048E8' },
  { label: 'DEV TOOL / 06', bg: '#E91E8C' },
]

function ProjectMedia({ media, title }) {
  const baseClass = 'w-full h-full object-cover'

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

export default function ProjectCard({ project, index }) {
  const category = CATEGORY_COLORS[index % CATEGORY_COLORS.length]

  return (
    <article className="flex flex-col group">
      {/* Media area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '16/9', backgroundColor: category.bg }}
      >
        <ProjectMedia media={project.media} title={project.title} />

        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-block px-2 py-1 bg-black/60 text-white text-[15px] font-semibold tracking-widest uppercase backdrop-blur-sm">
            [ {category.label} ]
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="pt-4 pb-2 flex flex-col flex-1">
        <h3 className="text-[26px] font-bold leading-tight mb-1.5 group-hover:text-[#2563EB] transition-colors">
          {project.title}
        </h3>
        <p className="text-[20px] leading-relaxed text-[#1A1A1A]/60 mb-4 flex-1">
          {project.description}
        </p>

        {/* Footer row: tech stack + links */}
        <div className="flex items-center justify-between">
          {/* Tech stack */}
          <div className="flex items-center gap-1 flex-wrap">
            {project.techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-1">
                <span className="text-[17px] font-semibold tracking-wider text-[#2563EB] uppercase">
                  {tech}
                </span>
                {i < project.techStack.length - 1 && (
                  <span className="text-[#1A1A1A]/30 text-[17px]">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 ml-3 flex-shrink-0">
            {project.links?.sourceCode && (
              <a
                href={project.links.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
                aria-label="Source code"
              >
                <Code2 size={22} />
              </a>
            )}
            {project.links?.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A]/40 hover:text-[#2563EB] transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
