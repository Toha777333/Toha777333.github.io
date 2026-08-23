import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import bgImage from '../assets/header_bg.webp'

export default function Hero({ info }) {
  return (
    <section className="min-h-screen relative flex flex-col w-full">
      {/* Фоновое изображение и затемнение */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0e1017]/75 backdrop-blur-[2px]"></div>
      </div>

      {/* Контент поверх фона (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col w-full">
        {/* Breadcrumb — прибит к верху с отступом */}
        <div className="absolute top-8 left-0 right-0">
          <div className="max-w-[1140px] mx-auto w-full px-6 md:px-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161822]/80 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#66d9ed] animate-pulse"></span>
              <p className="font-mono text-[13px] sm:text-[14px] font-medium tracking-wider uppercase text-[#66d9ed]">
                {info.name}
              </p>
            </div>
          </div>
        </div>

        {/* Центральный блок — headline + кнопки */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-[1140px] mx-auto w-full px-6 md:px-8 py-28 md:py-32">
            {/* Main headline */}
            <h1
              className="font-extrabold text-[40px] sm:text-[58px] md:text-[80px] lg:text-[96px] leading-[1.05] tracking-tight mb-6 text-white"
              style={{ wordBreak: 'break-word' }}
            >
              {info.headline}
            </h1>

            {/* Subheadline (если есть) */}
            {info.subHeadline && (
              <p className="text-[17px] sm:text-[19px] md:text-[20px] text-white/70 max-w-[760px] mb-9 leading-relaxed font-normal">
                {info.subHeadline}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-4 sm:items-center">
              <a
                href={encodeURI(info.resume || './assets/CV Barsukov Anton.pdf')}
                download="CV Barsukov Anton.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#66d9ed] text-[#0e1017] text-[16px] sm:text-[17px] font-semibold tracking-wide rounded-xl shadow-[0_0_25px_rgba(102,217,237,0.35)] hover:shadow-[0_0_35px_rgba(102,217,237,0.65)] hover:bg-[#7ce0f2] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Download Resume</span>
                <ArrowDownToLine size={20} />
              </a>
              <a
                href="#footer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/20 text-white text-[16px] sm:text-[17px] font-semibold tracking-wide rounded-xl bg-white/[0.05] backdrop-blur-md hover:border-[#66d9ed] hover:text-[#66d9ed] hover:bg-[#66d9ed]/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Contact Me</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
