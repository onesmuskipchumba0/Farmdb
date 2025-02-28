import Image from 'next/image'
import React from 'react'
import farmLogo from '../assets/farm-logo.svg' // Import the SVG as a source

function Hero() {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center bg-green-100'>
      <div className='flex flex-col items-center'>
        <Image src={farmLogo} alt='Farm Logo' width={96} height={96} className='mb-4' /> {/* Use next/image for the SVG */}
        <h1 className='text-4xl font-bold text-green-800 mb-2'>Welcome to FarmDB</h1>
        <p className='text-lg text-green-600'>Your ultimate crop management solution</p>
      </div>
      <div className='w-full h-full mt-4'>
        <Image
          height={120}
          width={240}
          className='w-full h-full object-cover'
          src={"/home/hero.jpg"}
          alt='Hero image'
        />
      </div>
    </div>
  )
}

export default Hero
