import { useMemo, useState, useEffect } from 'react'

const MD_BREAKPOINT = 640

// ─── Автоматически загружаем все картинки из папки archive ───────────────────
const imageModules = import.meta.glob(
  '/src/assets/archive/*.{png,jpg,jpeg,webp,gif}',
  { eager: true }
)

const IMAGES = Object.values(imageModules).map((mod) => mod.default)

// CSS clip-path для правильного шестиугольника (вертикальная ориентация)
const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

/**
 * Разбивает плоский массив изображений на ряды:
 * - 1-й, 3-й, 5-й ряд (нечётные по счёту, rowIndex = 0, 2, 4): oddCount
 * - 2-й, 4-й, 6-й ряд (чётные по счёту, rowIndex = 1, 3, 5): evenCount
 */
function buildHoneycombRows(images, oddCount, evenCount) {
  const rows = []
  let cursor = 0
  let rowIndex = 0

  while (cursor < images.length) {
    const count = rowIndex % 2 === 0 ? oddCount : evenCount
    rows.push(images.slice(cursor, cursor + count))
    cursor += count
    rowIndex++
  }

  // Проверка последнего и предпоследнего ряда
  if (rows.length >= 2) {
    const prevRow = rows[rows.length - 2]
    const lastRow = rows[rows.length - 1]
    const diff = prevRow.length - lastRow.length
    if (diff === 0 || diff === 2 || diff === 4) {
      lastRow.push(null)
    }
  }

  return rows
}

export default function ProjectArchiveHex() {
  // ── Определяем мобильный брейкпоинт (< md / 640px) сразу при инициализации ──
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < MD_BREAKPOINT : false
  )

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < MD_BREAKPOINT)
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  // ── Группировка по рядам ──────────────────────────────────────────────
  // Мобильные: 4 / 5 / 4 / 5 ...
  // Десктоп:  5 / 6 / 5 / 6 ...
  const rows = useMemo(() => {
    if (!IMAGES.length) return []
    const oddCount = isMobile ? 4 : 5
    const evenCount = isMobile ? 5 : 6
    return buildHoneycombRows(IMAGES, oddCount, evenCount)
  }, [isMobile])

  // ── Пустое состояние ──────────────────────────────────────────────────
  if (!IMAGES.length) {
    return (
      <section className="max-w-[1140px] mx-auto px-6 md:px-8 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <p className="font-mono text-[14px] sm:text-[15px] font-semibold tracking-widest uppercase text-[#66d9ed]">
            // 03 / Галерея работ
          </p>
        </div>
        <p className="text-[15px] text-[#94a3b8] italic">
          Добавь скриншоты или арты в{' '}
          <code className="bg-[#161822] text-[#66d9ed] border border-white/10 px-2 py-0.5 rounded font-mono text-[13px] not-italic">
            src/assets/archive/
          </code>{' '}
          — они появятся здесь автоматически.
        </p>
      </section>
    )
  }

  // ── Сетка сот ─────────────────────────────────────────────────────────
  return (
    <section className="max-w-[1140px] mx-auto px-6 md:px-8 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-10">
        <p className="font-mono text-[14px] sm:text-[15px] font-semibold tracking-widest uppercase text-[#66d9ed]">
          // 03 / Галерея работ
        </p>
      </div>

      {/* Соты */}
      <div className="flex flex-col items-center select-none w-full">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex justify-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 ${
              rowIdx > 0 ? '-mt-3 sm:-mt-3.5 md:-mt-4 lg:-mt-6' : ''
            }`}
          >
            {row.map((src, colIdx) => {
              if (!src) {
                return (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    className="flex-shrink-0 opacity-0 pointer-events-none w-[70px] h-[80px] sm:w-[100px] sm:h-[112px] md:w-[110px] md:h-[127px] lg:w-[164px] lg:h-[180px]"
                  />
                )
              }

              return (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className="
                    group relative flex-shrink-0 cursor-pointer
                    transition-all duration-300
                    hover:scale-110 hover:z-20
                  "
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.5))',
                  }}
                >
                  <div
                    className="w-[70px] h-[80px] sm:w-[100px] sm:h-[112px] md:w-[110px] md:h-[127px] lg:w-[164px] lg:h-[180px] overflow-hidden transition-all duration-300 group-hover:brightness-125"
                    style={{ clipPath: HEX_CLIP }}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
