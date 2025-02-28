import Image from 'next/image'
import React from 'react'
import farmLogo from '../assets/farm-logo.svg'

function Hero() {
  return (
    <section className='relative w-full min-h-screen'>
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
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='relative z-10 h-full flex flex-col items-center justify-center pt-20'>
        <Image src={farmLogo} alt='Farm Logo' width={64} height={64} className='mb-4' />
        <h1 className='text-4xl font-bold text-white mb-2'>Welcome to FarmDB</h1>
        <p className='text-lg text-white'>Your ultimate crop management solution</p>
      </div>
    </section>
  )
}

export default Hero
