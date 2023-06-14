'use client'
import Image from 'next/image'
import React from 'react'
import { CustomButton } from './CustomButton'

export const Hero = () => {
     const handleScroll=()=>{
      
     }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
              <h1 className='hero__title'>find search get car soon .....</h1>
              <p className='hero__subtitle'>this is the place for hiring a car and select the best one for your drive</p>
        
        <CustomButton 
        title ='explore cars'
        containerStyle='bg-primary-blue text-white rounded-full mt-8'
        handleClick={handleScroll}
        />
        <div className='hero__image-container'>
          <div className='hero__image'>
           <Image 
           src='/hero.png' alt='hero car' 
           fill className='object-contain'
           />
           <div className="hero__image-overlay" /> </div>
          
        </div>
        </div>
      
        </div>
  )
}
