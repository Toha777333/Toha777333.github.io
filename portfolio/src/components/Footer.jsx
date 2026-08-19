import { ArrowUpRight } from 'lucide-react'

export default function Footer({ info }) {
  return (
    <footer
      className="mt-8"
      style={{ backgroundColor: 'var(--color-footer)' }}
    >
      <div className="max-w-[680px] mx-auto px-6 py-16 md:py-20">
        {/* CTA Heading */}
        <h2 className="text-white font-black text-[42px] md:text-[56px] leading-[1.05] tracking-tight mb-12 max-w-[500px]">
          Let's build something together.
        </h2>

        {/* Contacts + Google Play row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Left: contact links */}
          <div className="flex flex-col gap-2.5">
            <a
              href={info.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-white/40 text-[11px] uppercase tracking-widest w-20 flex-shrink-0">Telegram /</span>
              <span className="group-hover:underline">@toha777333</span>
            </a>
            <a
              href={`mailto:${info.email}`}
              className="flex items-center gap-2 text-[13px] font-semibold text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-white/40 text-[11px] uppercase tracking-widest w-20 flex-shrink-0">Email /</span>
              <span className="group-hover:underline">{info.email}</span>
            </a>
          </div>

          {/* Right: Google Play link */}
          <a
            href={info.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            Google Play
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-[11px] text-white/30">
            © 2025 Anton Barsukov. Built for games, systems, and ideas that need to ship.
          </p>
        </div>
      </div>
    </footer>
  )
}
