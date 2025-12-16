'use client'
import { Layout } from 'antd'
const { Footer } = Layout
import logo from '../assets/logo.png'
import Image from 'next/image'
export default function AppFooter() {
  const footerItem = [
    {
      key: '1',
      title: 'Talho Próprio',
    },
    {
      key: '2',
      title: 'Casa e Jardim',
    },
    {
      key: '3',
      title: 'Congelados',
    },
    {
      key: '4',
      title: 'Peixaria',
    },
    {
      key: '5',
      title: 'Merchandising',
    },
    {
      key: '6',
      title: 'Bricolage e Auto',
    },
    {
      key: '7',
      title: 'Padaria e Pastelaria',
    },
    {
      key: '8',
      title: 'Farmacia',
    },
    {
      key: '9',
      title: 'Consumiveis',
    },
    {
      key: '10',
      title: 'Refrigerados',
    },
    {
      key: '11',
      title: 'Frutas e Legumes',
    },
    {
      key: '12',
      title: 'Petcare',
    },
    {
      key: '13',
      title: 'Laticinios',
    },
    {
      key: '14',
      title: 'Charcutaria',
    },
  ]
  return (
    <Footer className='max-w-7xl mx-auto mt-8 bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-gray-400 '>
        {footerItem.map((item) => (
          <a
            href='#'
            key={item.key}
            className='text-lg font-semibold text-black hover:underline'
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className='mt-3 flex justify-center mb-4'>
        <Image src={logo} alt='logo' className='w-24 h-16' />
      </div>
    </Footer>
  )
}
