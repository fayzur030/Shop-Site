'use client'
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Language {
  code: string
  name: string
}

const LanguageDropdown: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([])
  const [selected, setSelected] = useState<Language | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const response = await fetch('https://shop.sprwforge.com/api/v1/common')
        const data = await response.json()

        const langs: Language[] =
          data?.data?.languages?.map(
            (lang: { code: string; name: string }) => ({
              code: lang.code,
              name: lang.name,
            })
          ) || []

        setLanguages(langs)
        setSelected(langs[0])
      } catch (error) {
        console.error('There was a problem loading the language list.', error)
      }
    }

    fetchLanguage()
  }, [])

  const selectLanguage = (lang: Language) => {
    setSelected(lang)
    setOpen(false)
  }

  if (!selected) return null

  return (
    <div className='relative'>
      <button
        onClick={() => setOpen(!open)}
        className='max-w-7xl flex items-center justify-between  bg-white text-black rounded-md shadow-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-purple-800 '
      >
        {selected.name}
        <ChevronDown
          size={18}
          className={`ml-2 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul className='absolute mt-1   border rounded-md shadow-lg z-10'>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className='px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer'
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageDropdown
