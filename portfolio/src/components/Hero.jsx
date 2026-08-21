import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'

export default function Hero({ info }) {
  return (
    <section className="min-h-screen relative flex flex-col w-full">

      {/* Breadcrumb — прибит к верху с отступом 24px */}
      <div className="absolute top-6 left-0 right-0">
        <div className="max-w-[1020px] mx-auto w-full px-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] inline-block flex-shrink-0"></span>
            <p className="text-[17px] font-semibold tracking-widest uppercase text-[#1A1A1A]/60">
              {info.name}
            </p>
          </div>
        </div>
      </div>

      {/* Центральный блок — headline + кнопки */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-[1020px] mx-auto w-full px-6 py-24">

          {/* Main headline */}
          <h1
            className="font-black text-[78px] leading-[1.0] tracking-tight mb-5 md:text-[108px]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {info.headline}
          </h1>

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
              href="#footer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1A1A1A]/30 text-[#1A1A1A] text-[20px] font-semibold tracking-wide rounded-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors duration-200"
            >
              Contact Me
              <ArrowUpRight size={20} />
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}
