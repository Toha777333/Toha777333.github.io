const ACCENT_COLORS = [
  'text-[#66d9ed]', // Cyan
  'text-[#9440e8]', // Violet
  'text-[#FF6B2B]', // Orange
  'text-[#00d084]', // Green
]

function AchievementCard({ metric, description, index }) {
  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length]

  return (
    <div className="group relative bg-[#161822] border border-white/[0.08] hover:border-[#66d9ed]/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[#66d9ed]/5">
      <div>
        <p className={`font-extrabold text-[44px] sm:text-[52px] leading-none tracking-tight mb-4 ${accentColor} transition-transform duration-300 group-hover:scale-[1.03] origin-left`}>
          {metric}
        </p>
      </div>
      <p className="text-[16px] sm:text-[17px] text-[#94a3b8] group-hover:text-white/90 leading-relaxed transition-colors duration-200">
        {description}
      </p>
    </div>
  )
}

export default function Achievements({ achievements }) {
  return (
    <section className="max-w-[1140px] mx-auto px-6 md:px-8 pb-24 md:pb-32 pt-16 md:pt-20">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <p className="font-mono text-[14px] sm:text-[15px] font-semibold tracking-widest uppercase text-[#66d9ed]">
          // 01 / Достижения
        </p>
      </div>

      {/* Grid 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {achievements.map((item, i) => (
          <AchievementCard
            key={item.id}
            metric={item.metric}
            description={item.description}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
