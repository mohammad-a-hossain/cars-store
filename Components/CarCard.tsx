'use client'
import React,{useState} from 'react'
import { CarProps } from '../types'
import {CustomButton }from './CustomButton'
import { CalculateCarRent } from '../lib';
import Image from 'next/image'
import { CardDeails } from './CardDeails';

interface CardCarProp{
    car: CarProps;
}

const CarCard = ({car}:CardCarProp) => {

  const [isOpen,setIsOPen] = useState(false)

    const { city_mpg,
      
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year } = car


        const carRent = CalculateCarRent(city_mpg, year)
        
  return (
    <div className='car-card group'>
        
        <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative object-contain w-full h-40 my-3'>
        <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
      </div>
      
      <div className='flex flex-col flex-1 gap-2'>
     
                  <h2 className='text-xl font-semibold capitalize'>
                    {car.make} {car.model}
                  </h2>
                  </div>

    <div className='relative flex w-full mt-2'>
    <div className='flex justify-between w-full group-hover:invisible text-grey'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
        <p className='text-[14px] leading-[17px]'>
          {transmission === "a" ? "Automatic" : "Manual"}
        </p>
      </div>
      <div className="car-card__icon">
        <Image src="/tire.svg" width={20} height={20} alt="seat" />
        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
      </div>
      <div className="car-card__icon">
        <Image src="/gas.svg" width={20} height={20} alt="seat" />
        <p className="car-card__icon-text">{city_mpg} MPG</p>
      </div>
    </div>

    <div className="car-card__btn-container">

    <CustomButton
    title='view'
    containerStyle='w-full py-[16px] rounded-full bg-primary-blue'
    textStyles='text-white text-[14px] leading-[17px] font-bold'
    rightIcon='/right-arrow.svg'
    handleClick={()=> setIsOPen(true)}
    />
    </div>
   
    </div>

    
    <CardDeails isOpen={isOpen} closeModal={()=> setIsOPen(false)} car={car} />
    </div>
  )
}
export default CarCard