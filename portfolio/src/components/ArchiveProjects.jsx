import { ArrowUpRight } from 'lucide-react'

export function ArchiveRow({ project }) {
  return (
    <tr className="border-b border-[#D4D0CB]/60 group hover:bg-[#1A1A1A]/[0.02] transition-colors">
      {/* Year */}
      <td className="py-3.5 pr-6 align-top w-14 flex-shrink-0">
        <span className="text-[12px] font-bold text-[#2563EB]">{project.year}</span>
      </td>

      {/* Project title */}
      <td className="py-3.5 pr-4 align-top">
        <span className="text-[13px] font-semibold text-[#1A1A1A] leading-snug">
          {project.title}
        </span>
      </td>

      {/* Tech stack */}
      <td className="py-3.5 pr-4 align-top hidden sm:table-cell">
        <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
          {project.techStack.map((tech, i) => (
            <span key={tech} className="flex items-center gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1A1A1A]/50">
                {tech}
              </span>
              {i < project.techStack.length - 1 && (
                <span className="text-[#1A1A1A]/30 text-[11px]">·</span>
              )}
            </span>
          ))}
        </div>
      </td>

      {/* Link */}
      <td className="py-3.5 align-top w-8 text-right">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-[#1A1A1A]/30 hover:text-[#2563EB] transition-colors"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="text-[#1A1A1A]/15">
            <ArrowUpRight size={15} />
          </span>
        )}
      </td>
    </tr>
  )
}

export default function ArchiveProjects({ projects }) {
  return (
    <section className="max-w-[680px] mx-auto px-6 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-start justify-between mb-6">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40">
          03 / Project Archive
        </p>
        <p className="text-[11px] text-[#1A1A1A]/40 text-right hidden sm:block">
          Selected releases &amp; experiments / 2018—2025
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-1">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#D4D0CB]">
              <th className="pb-2.5 text-left text-[10px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40 pr-6">
                Year
              </th>
              <th className="pb-2.5 text-left text-[10px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40 pr-4">
                Project
              </th>
              <th className="pb-2.5 text-left text-[10px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40 pr-4 hidden sm:table-cell">
                Stack
              </th>
              <th className="pb-2.5 text-right text-[10px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ArchiveRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
