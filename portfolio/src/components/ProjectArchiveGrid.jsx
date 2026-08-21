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
    <section className="max-w-[1020px] mx-auto px-6 pb-16">
      {/* Заголовок секции */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]/40">
          Архив проектов
        </span>
        <span className="text-[13px] text-[#1A1A1A]/20 font-medium">
          {projects.length}
        </span>
      </div>

      {/* Плотная сетка иконок */}
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
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
                group relative w-full aspect-square rounded-md overflow-hidden
                flex items-center justify-center
                transition-all duration-200
                hover:scale-110 hover:z-10
                hover:ring-2 hover:ring-[#2563EB] hover:ring-offset-2 hover:ring-offset-[#F5F2EE]
                focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2
                cursor-pointer
              "
              style={{
                background: `linear-gradient(135deg, ${from}, ${to})`,
              }}
            >
              <span className="text-white font-bold text-[11px] leading-none select-none tracking-wide">
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
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
                relative bg-white
                rounded-t-2xl sm:rounded-2xl
                w-full sm:max-w-[480px]
                p-8 sm:p-10
                archive-modal-enter
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Крестик закрытия */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Закрыть"
                className="absolute top-4 right-4 text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors p-1"
              >
                <X size={22} />
              </button>

              {/* Pill-handle для мобильного bottom sheet */}
              <div className="sm:hidden w-10 h-1 rounded-full bg-[#1A1A1A]/20 mx-auto mb-8" />

              {/* Год */}
              <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#1A1A1A]/40 mb-2">
                {selected.year}
              </p>

              {/* Название */}
              <h3 className="text-[24px] font-black leading-tight mb-6 pr-8">
                {selected.title}
              </h3>

              {/* Стек технологий */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#F5F2EE] text-[#1A1A1A] text-[12px] font-semibold uppercase tracking-widest rounded-sm"
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
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] text-white text-[16px] font-semibold rounded-sm hover:bg-[#2563EB] transition-colors duration-200"
                >
                  Открыть проект
                  <ExternalLink size={18} />
                </a>
              ) : (
                <p className="text-[14px] text-[#1A1A1A]/30 italic">
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
