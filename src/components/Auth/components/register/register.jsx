'use client'
import React from 'react'
import Image from 'next/image'
import { RegisterCard } from '@/components/Auth/components/register/register.card'

export const Register = () => {
    

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto space-y-5 md:h-screen lg:py-0'>
      <a href="#" className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
        <img src="/asset/pennywise-dummy-logo.png" width={240} alt="logo-pennywise" />
      </a>
      <RegisterCard />
    </div>
  )
}
