import Image from 'next/image'
import React from 'react'
import farmLogo from '../assets/farm-logo.svg'

function Hero() {
  return (
    <section className='relative w-full h-[600px]'> {/* Changed from min-h-screen to h-[600px] */}
      <div className='absolute inset-0'>
        <Image
          src="/home/hero-2.jpg"
          alt='Hero image'
          fill
          sizes="100vw"
          quality={100}
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      {/* Added gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent'></div>
      
      {/* Updated content positioning and styling */}
      <div className='relative z-10 h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-8'>
        <div className='flex flex-col items-start space-y-6'>
          <Image src={farmLogo} alt='Farm Logo' width={80} height={80} className='mb-2' />
          <h1 className='text-6xl font-bold text-white mb-4 leading-tight'>
            Welcome to <span className='text-green-400'>FarmDB</span>
          </h1>
          <p className='text-xl text-gray-200 max-w-2xl'>
            Your ultimate crop management solution for modern agriculture
          </p>
          <button className='btn btn-primary text-white hover:bg-secondary-focus border-none mt-4'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
