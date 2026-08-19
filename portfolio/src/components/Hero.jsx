import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'

export default function Hero({ info }) {
  return (
    <section className="max-w-[1020px] mx-auto px-6 pt-16 pb-24 md:pt-20 md:pb-32">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 md:mb-10">
        <span className="w-2 h-2 rounded-full bg-[#2563EB] inline-block flex-shrink-0"></span>
        <p className="text-[17px] font-semibold tracking-widest uppercase text-[#1A1A1A]/60">
          {info.name} &nbsp;/&nbsp; Lead Unity + Golang Developer
        </p>
      </div>

      {/* Main headline */}
      <h1
        className="font-black text-[78px] leading-[1.0] tracking-tight mb-5 md:text-[108px]"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {info.headline.replace('с 2018 года', '')}
        <br />
        since 2018
      </h1>

      {/* Sub-headline */}
      <p className="text-[23px] leading-relaxed text-[#1A1A1A]/70 mb-8 max-w-[630px]">
        {info.subHeadline}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <a
          href="./assets/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1A1A1A] text-white text-[20px] font-semibold tracking-wide rounded-sm hover:bg-[#2563EB] transition-colors duration-200"
        >
          Download Resume
          <ArrowDownToLine size={20} />
        </a>
        <a
          href={`mailto:${info.email}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1A1A1A]/30 text-[#1A1A1A] text-[20px] font-semibold tracking-wide rounded-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors duration-200"
        >
          Contact Me
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  )
}
