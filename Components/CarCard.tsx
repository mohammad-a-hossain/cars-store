import React from 'react'
import { CarProps } from '../types'
import CustomButton from './CustomButton'

interface CardCarProp{
    car: CarProps;
}

const CarCard = ({car}:CardCarProp) => {
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
  return (
    <div className='car-card group'>
        
      
       {model} {fuel_type} {drive} {make}
        
        </div>
  )
}
export default CarCard