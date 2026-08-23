import { useState, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'

// Палитра градиентов для иконок (по индексу)
const GRADIENTS = [
  ['#1e3a5f', '#0f2027'],
  ['#2d1b69', '#11998e'],
  ['#7c2d12', '#c0392b'],
  ['#134e5e', '#355c7d'],
  ['#373b44', '#1a237e'],
  ['#4a1942', '#c0392b'],
  ['#0f3460', '#533483'],
  ['#1a1a2e', '#2563EB'],
  ['#2c3e50', '#27ae60'],
  ['#6a3093', '#a044ff'],
  ['#b34700', '#ef8a17'],
  ['#12b886', '#087f5b'],
]

function getInitials(title) {
  return title
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? '')
    .join('')
    .toUpperCase()
}

export default function ProjectArchiveGrid({ projects }) {
  const [selected, setSelected] = useState(null)

  // Закрытие по Escape
  useEffect(() => {
    if (!selected) return
    const handler = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected])

  // Блокировка прокрутки body при открытом модале
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section className="max-w-[1140px] mx-auto px-6 md:px-8 pb-20">
      {/* Заголовок секции */}
      <div className="flex items-center gap-3 mb-8">
        <p className="font-mono text-[14px] sm:text-[15px] font-semibold tracking-widest uppercase text-[#66d9ed]">
          // 03 / Архив проектов
        </p>
        <span className="font-mono text-[13px] text-white/30 font-medium">
          ({projects.length})
        </span>
      </div>

      {/* Плотная сетка иконок */}
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2.5">
        {projects.map((project, i) => {
          const [from, to] = GRADIENTS[i % GRADIENTS.length]
          const initials = getInitials(project.title)

          return (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              title={project.title}
              aria-label={`Открыть проект: ${project.title}`}
              className="
                group relative w-full aspect-square rounded-xl overflow-hidden
                flex items-center justify-center
                transition-all duration-200
                hover:scale-110 hover:z-10
                hover:ring-2 hover:ring-[#66d9ed] hover:ring-offset-2 hover:ring-offset-[#0e1017]
                focus:outline-none focus:ring-2 focus:ring-[#66d9ed] focus:ring-offset-2
                cursor-pointer border border-white/10
              "
              style={{
                background: `linear-gradient(135deg, ${from}, ${to})`,
              }}
            >
              <span className="text-white font-bold text-[12px] leading-none select-none tracking-wide">
                {initials}
              </span>
            </button>
          )
        })}
      </div>

      {/* ======================== МОДАЛЬНОЕ ОКНО ======================== */}
      {selected && (
        <>
          {/* Затемнённый фон */}
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          />

          {/*
            Панель:
            - Мобильные: bottom sheet, выезжает снизу
            - Десктоп: всплывающее окно по центру
          */}
          <div
            className="
              fixed z-50
              bottom-0 left-0 right-0
              sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-6
            "
          >
            <div
              className="
                relative bg-[#161822] text-white border border-white/10
                rounded-t-2xl sm:rounded-2xl
                w-full sm:max-w-[480px]
                p-8 sm:p-10
                archive-modal-enter shadow-[0_20px_50px_rgba(0,0,0,0.8)]
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Крестик закрытия */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Закрыть"
                className="absolute top-4 right-4 text-white/40 hover:text-[#66d9ed] transition-colors p-1"
              >
                <X size={22} />
              </button>

              {/* Pill-handle для мобильного bottom sheet */}
              <div className="sm:hidden w-10 h-1 rounded-full bg-white/20 mx-auto mb-8" />

              {/* Год */}
              <p className="font-mono text-[12px] font-semibold tracking-[0.25em] uppercase text-[#66d9ed] mb-2">
                // {selected.year}
              </p>

              {/* Название */}
              <h3 className="text-[24px] font-bold leading-tight mb-6 pr-8 text-white">
                {selected.title}
              </h3>

              {/* Стек технологий */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono px-3 py-1.5 bg-[#66d9ed]/10 border border-[#66d9ed]/25 text-[#66d9ed] text-[12px] font-semibold uppercase tracking-widest rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Ссылка (если есть) */}
              {selected.link ? (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#66d9ed] text-[#0e1017] text-[15px] font-semibold rounded-xl hover:bg-[#86e3f3] hover:shadow-[0_0_20px_rgba(102,217,237,0.4)] transition-all duration-200"
                >
                  <span>Открыть проект</span>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <p className="text-[14px] text-white/40 italic">
                  Ссылка недоступна
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
