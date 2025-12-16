'use client'
import LanguageDropdown from '@/component/LanguageDropdown'
import { Layout, Menu } from 'antd'
import { CircleArrowRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const { Header } = Layout

export default function AppHeader() {
  const items = [
    {
      key: '1',
      label: <LanguageDropdown />,
    },
    {
      key: '2',
      label: (
        <div className='hidden md:flex items-center gap-1'>
          <Mail size={16} />
          <span>webzedcontact@gmail.com</span>
        </div>
      ),
    },
    {
      key: '3',
      label: <div className='hidden md:flex'>|</div>,
    },
    {
      key: '4',
      label: (
        <div className='hidden md:flex items-center gap-1'>
          <Phone size={16} />
          <span>Helpline 4534345656</span>
        </div>
      ),
    },
    {
      key: '5',
      label: (
        <Link href='/login' className='flex items-center gap-1 font-medium'>
          <CircleArrowRight size={16} />
          <span>LOGIN</span>
        </Link>
      ),
      style: { marginLeft: 'auto' },
    },
  ]

  return (
    <Header
      style={{
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '48px',
        paddingRight: '48px',
        height: 'auto',
        lineHeight: 'normal',
      }}
    >
      <Menu mode='horizontal' selectable={false} items={items} style={{ display: 'flex', alignItems: 'center' }} />
    </Header>
  )
}
