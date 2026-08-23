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
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Контент поверх фона (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col w-full">
        {/* Breadcrumb — прибит к верху с отступом 24px */}
        <div className="absolute top-6 left-0 right-0">
          <div className="max-w-[1140px] mx-auto w-full px-6 md:px-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] inline-block flex-shrink-0"></span>
              <p className="text-[17px] font-semibold tracking-widest uppercase text-white/60">
                {info.name}
              </p>
            </div>
          </div>
        </div>

        {/* Центральный блок — headline + кнопки */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-[1140px] mx-auto w-full px-6 md:px-8 py-24">

            {/* Main headline */}
            <h1
              className="font-black text-[42px] sm:text-[60px] md:text-[84px] lg:text-[108px] leading-[1.0] tracking-tight mb-5 text-white"
              style={{ fontFamily: 'Inter, sans-serif', wordBreak: 'break-word' }}
            >
              {info.headline}
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={encodeURI(info.resume)}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#1A1A1A] text-[20px] font-semibold tracking-wide rounded-sm hover:bg-gray-200 transition-colors duration-200"
              >
                Download Resume
                <ArrowDownToLine size={20} />
              </a>
              <a
                href="#footer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/30 text-white text-[20px] font-semibold tracking-wide rounded-sm hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Contact Me
                <ArrowUpRight size={20} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
