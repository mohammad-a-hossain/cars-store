'use client'

import React from 'react'
import {ShowMoreProps } from '../types'
import { useRouter} from 'next/navigation'
import {CustomButton } from './CustomButton'
import { updateSearchParams } from '../lib'

export const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()


    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 8;
        const newPathname = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathname);
      };
  return (
    <div className="w-full gap-5 mt-10 flex-center">
        {!isNext && (
             <CustomButton
             title='show More'
             btnType='button'
             containerStyle="bg-primary-blue rounded-full text-white"
             handleClick={handleNavigation}
             />
        )}
       
    
        
        </div>
  )
}
