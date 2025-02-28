import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center mt-auto'>
      <Image height={120} width={240}
      className='w-full h-[100vh] object-fit'
       src={"/home/hero.jpg"} alt='Hero image'/>
    </div>
  )
}

export default Hero
