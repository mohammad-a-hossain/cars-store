'use client'
import React from 'react'
import Image from 'next/image'
import { customButtonProps } from '../types'

export const CustomButton = ({title, containerStyle, handleClick}:customButtonProps) => {
  return (
    <button 
     disabled={false}
     type={'button'}
     className={`custom-btn ${containerStyle}`}
     onClick={handleClick}
    >
      <span className={'flex-1'}>
        {title}
        </span>
      
      </button>
  )
}