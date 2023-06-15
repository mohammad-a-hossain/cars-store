import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from './CustomButton'

export const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
            <Link href='/' className='flex items-center fustify-center'>
                <Image 
                 src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" 
                />
            </Link>
            <CustomButton title='signin' btnType={'button'}  containerStyle='text-primary-blue rounded-full bg-white min-w-[130px]'/>
        </nav>
    
        </header>
  )
}
