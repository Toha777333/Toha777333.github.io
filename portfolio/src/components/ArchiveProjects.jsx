import { ArrowUpRight } from 'lucide-react'

export function ArchiveRow({ project }) {
  return (
    <tr className="border-b border-white/[0.06] group hover:bg-white/[0.02] transition-colors">
      {/* Year */}
      <td className="py-4 pr-6 align-top w-20 flex-shrink-0">
        <span className="font-mono text-[16px] font-bold text-[#66d9ed]">{project.year}</span>
      </td>

      {/* Project title */}
      <td className="py-4 pr-4 align-top">
        <span className="text-[18px] font-semibold text-white group-hover:text-[#66d9ed] transition-colors leading-snug">
          {project.title}
        </span>
      </td>

      {/* Tech stack */}
      <td className="py-4 pr-4 align-top hidden sm:table-cell">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] font-medium bg-[#66d9ed]/10 text-[#66d9ed] border border-[#66d9ed]/20 px-2 py-0.5 rounded uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>

      {/* Link */}
      <td className="py-4 align-top w-8 text-right">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-white/40 hover:text-[#66d9ed] transition-colors p-1"
            aria-label={`Открыть ${project.title}`}
          >
            <ArrowUpRight size={20} />
          </a>
        ) : (
          <span className="text-white/10 p-1 inline-flex">
            <ArrowUpRight size={20} />
          </span>
        )}
      </td>
    </tr>
  )
}

export default function ArchiveProjects({ projects }) {
  return (
    <section className="max-w-[1140px] mx-auto px-6 md:px-8 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-mono text-[14px] sm:text-[15px] font-semibold tracking-widest uppercase text-[#66d9ed]">
          // 03 / Архив проектов
        </p>
        <p className="font-mono text-[13px] text-white/40 text-right hidden sm:block">
          2019 — 2025
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#161822] border border-white/[0.08] rounded-2xl p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-3 text-left font-mono text-[12px] font-semibold tracking-widest uppercase text-[#66d9ed] pr-6">
                Год
              </th>
              <th className="pb-3 text-left font-mono text-[12px] font-semibold tracking-widest uppercase text-[#66d9ed] pr-4">
                Проект
              </th>
              <th className="pb-3 text-left font-mono text-[12px] font-semibold tracking-widest uppercase text-[#66d9ed] pr-4 hidden sm:table-cell">
                Стек
              </th>
              <th className="pb-3 text-right font-mono text-[12px] font-semibold tracking-widest uppercase text-[#66d9ed]">
                Ссылка
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
