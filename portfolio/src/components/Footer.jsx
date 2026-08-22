import { useState } from 'react'
import { ArrowDownToLine, Check } from 'lucide-react'
import data from '../data/data.json'

function FooterLink({ item }) {
  const [copied, setCopied] = useState(false)
  const isMailto = item.url?.startsWith('mailto:')

  const handleClick = async (e) => {
    if (isMailto) {
      e.preventDefault()
      const email = item.url.replace(/^mailto:/, '')
      try {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 1500)
      } catch (err) {
        console.error('Failed to copy email:', err)
      }
    }
  }

  return (
    <a
      href={item.url}
      onClick={isMailto ? handleClick : undefined}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noopener noreferrer'}
      className="inline-flex items-center gap-1.5 text-white text-[16px] font-medium transition-colors duration-200 hover:text-white/70 hover:underline cursor-pointer"
      title={isMailto ? 'Нажмите, чтобы скопировать email' : undefined}
    >
      {copied ? (
        <>
          <span className="text-[#22c55e]">Скопировано!</span>
          <Check size={16} className="text-[#22c55e]" />
        </>
      ) : (
        item.name
      )}
    </a>
  )
}

export default function Footer({ footerData = data.footerData }) {
  const { contacts = [], codeLinks = [], gamePlatforms = [] } = footerData || {}

  return (
    <footer
      id="footer"
      className="mt-12"
      style={{ backgroundColor: 'var(--color-footer)' }}
    >
      <div className="max-w-[1020px] mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* 1. Контакты */}
          <div className="flex flex-col">
            <h3 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Contacts
            </h3>
            <ul className="flex flex-col gap-2.5">
              {contacts.map((item, index) => (
                <li key={index}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Код */}
          <div className="flex flex-col">
            <h3 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Code
            </h3>
            <ul className="flex flex-col gap-2.5">
              {codeLinks.map((item, index) => (
                <li key={index}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Игры */}
          <div className="flex flex-col">
            <h3 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Games
            </h3>
            <ul className="flex flex-col gap-2.5">
              {gamePlatforms.map((item, index) => (
                <li key={index}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Кнопка Скачать резюме */}
          <div className="flex flex-col sm:items-start">
            <h3 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Resume
            </h3>
            <a
              href="./assets/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/30 text-white hover:border-white hover:bg-white hover:text-[#1A1A1A] transition-all duration-200 rounded-sm font-semibold text-[15px] tracking-wide w-full sm:w-auto"
            >
              <span>Download Resume</span>
              <ArrowDownToLine size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
