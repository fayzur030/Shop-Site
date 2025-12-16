'use client'
import { TfiEmail } from 'react-icons/tfi'
import { CiLock } from 'react-icons/ci'
import { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { IoEyeOffOutline } from 'react-icons/io5'
import logo from '../../assets/logo.png'
import Image from 'next/image'
const LoginPage = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    if (!email || !password) {
      e.preventDefault()
    }
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#f1f2f3] px-4'>
      <div className='mb-6'>
        <Image src={logo} alt='Logo' className='w-full h-16' />
      </div>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200'
      >
        <h2 className='font-semibold mb-3 '>Email</h2>
        {/* Email */}
        <div className='relative'>
          <input
            type='email'
            value={email}
            onChange={handleChange}
            name='email'
            id='email'
            required
            className='w-full pl-10 p-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200'
            placeholder='Your email'
          />
          <div className='absolute left-3 top-1/2 -translate-y-1/3'>
            {' '}
            <TfiEmail className='text-gray-400' size={18} />
          </div>
        </div>
        <h2 className='font-semibold mt-4 mb-3 '>Password</h2>
        {/* Password */}
        <div className='relative'>
          <input
            type={show ? 'text' : 'password'}
            name='password'
            required
            value={password}
            onChange={handleChange}
            id='password'
            className='w-full pl-10 p-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200'
            placeholder='your password'
          />
          <div className='absolute left-3 top-1/2 -translate-y-1/3'>
            {' '}
            <CiLock className='text-gray-500' size={18} />
          </div>
          {/* Eye icon */}
          <div
            className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
            onClick={() => setShow(!show)}
          >
            {show ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        </div>
        {/* Sbumit btn & forgot */}
        <div className='mt-6 flex justify-between'>
          <a href='#' className='underline'>
            Forgot password
          </a>
          <button
            type='submit'
            className='bg-purple-900 font-bold text-white px-4 py-2 rounded-lg'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
