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
      className="inline-flex items-center gap-1.5 text-[#94a3b8] text-[15px] font-normal transition-colors duration-200 hover:text-[#66d9ed] cursor-pointer"
      title={isMailto ? 'Нажмите, чтобы скопировать email' : undefined}
    >
      {copied ? (
        <>
          <span className="text-[#66d9ed] font-medium">Скопировано!</span>
          <Check size={16} className="text-[#66d9ed]" />
        </>
      ) : (
        item.name
      )}
    </a>
  )
}

export default function Footer({ footerData = data.footerData, resumeUrl = data.personalInfo?.resume }) {
  const { contacts = [], codeLinks = [], gamePlatforms = [] } = footerData || {}

  return (
    <footer
      id="footer"
      className="border-t border-white/[0.08]"
      style={{ backgroundColor: 'var(--color-footer)' }}
    >
      <div className="max-w-[1140px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* 1. Контакты */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[13px] font-semibold tracking-wider uppercase text-[#66d9ed] mb-4">
              // Contacts
            </h3>
            <ul className="flex flex-col gap-3">
              {contacts.map((item, index) => (
                <li key={index}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Код */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[13px] font-semibold tracking-wider uppercase text-[#66d9ed] mb-4">
              // Code
            </h3>
            <ul className="flex flex-col gap-3">
              {codeLinks.map((item, index) => (
                <li key={index}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Игры */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[13px] font-semibold tracking-wider uppercase text-[#66d9ed] mb-4">
              // Games
            </h3>
            <ul className="flex flex-col gap-3">
              {gamePlatforms.map((item, index) => (
                <li key={index}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Кнопка Скачать резюме */}
          <div className="flex flex-col sm:items-start">
            <h3 className="font-mono text-[13px] font-semibold tracking-wider uppercase text-[#66d9ed] mb-4">
              // Resume
            </h3>
            <a
              href={encodeURI(resumeUrl || './assets/CV Barsukov Anton.pdf')}
              download="CV Barsukov Anton.pdf"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 border border-[#66d9ed]/40 text-[#66d9ed] bg-[#66d9ed]/10 hover:bg-[#66d9ed] hover:text-[#0e1017] hover:shadow-[0_0_20px_rgba(102,217,237,0.35)] transition-all duration-200 rounded-xl font-semibold text-[15px] tracking-wide w-full sm:w-auto"
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
