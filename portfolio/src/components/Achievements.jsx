function AchievementCard({ metric, description, index }) {
  const isDark = index === 0
  const isAccent = index === 1

  const bgClass = isDark
    ? 'bg-[#1A1A1A] text-white'
    : 'bg-[#EBEBEB] text-[#1A1A1A]'

  const metricClass = isAccent ? 'text-[#2563EB]' : isDark ? 'text-white' : 'text-[#1A1A1A]'

  return (
    <div className={`${bgClass} p-7 flex flex-col justify-between min-h-[240px] md:min-h-[270px]`}>
      <p
        className={`font-black text-[48px] md:text-[60px] leading-none tracking-tight mb-3 ${metricClass}`}
      >
        {metric}
      </p>
      <p className={`text-[20px] leading-snug ${isDark ? 'text-white/60' : 'text-[#1A1A1A]/60'}`}>
        {description}
      </p>
    </div>
  )
}

export default function Achievements({ achievements }) {
  return (
    <section className="max-w-[1020px] mx-auto px-6 pb-24 md:pb-32">
      {/* Section header */}
      <div className="flex items-start justify-between mb-6">
        <p className="text-[17px] font-semibold tracking-widest uppercase text-[#1A1A1A]/40">
          01 / Key Achievements
        </p>
        <p className="text-[17px] text-[#1A1A1A]/40 text-right hidden sm:block">
          Selected impact, measured.
        </p>
      </div>

      {/* Grid 2×2 */}
      <div className="grid grid-cols-2 gap-px bg-[#D4D0CB]">
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
