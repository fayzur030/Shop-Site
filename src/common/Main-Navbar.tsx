'use client'
import header_logo from '../assets/logo.png'
import { IoIosSearch } from 'react-icons/io'
import Image from 'next/image'

const MainNavbar = () => {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: 'white',
      }}
    >
      <nav
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          // padding: '12px 48px',
          lineHeight: 'normal',
        }}
      >
        <div className='flex flex-col  md:flex-row md:items-center md:justify-between gap-3'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image src={header_logo} alt='Logo' className='h-10 w-auto' />
          </div>

          {/* Search */}
          <div className='relative w-full md:w-10/12'>
            <input
              type='text'
              placeholder='Search Here'
              className='w-full rounded-md bg-gray-100 px-4 py-3 focus:outline-none focus:border border-purple-900'
            />
            <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-purple-900 p-3 rounded-r-lg cursor-pointer'>
              <IoIosSearch className='text-white' size={20} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar
