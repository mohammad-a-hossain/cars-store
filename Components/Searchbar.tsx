"use client"

import React,{useState} from 'react'
import {SearchMenuFacture}  from './SearchMenuFacture'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


const SearchButton =({otherclass}:{otherclass: string})=>(
    <button type='submit' className={`-ml-3 z-10 ${otherclass}`}>
    <Image  
    src='/magnifying-glass.svg'
    alt='serach icon'
    width={40}
    height={40}
    className='object-contain'
    />
    </button>
  )




 const Searchbar = () => {
    const [manuFacture, setManuFacture] = useState('')
    const [model, setModel]= useState('')

    const router = useRouter()
    const pathname = usePathname();
    
    const handleSearch = (e:React.FormEvent<HTMLFormElement> )=>{
      e.preventDefault()
      if(manuFacture === '' && model === ''){
        return alert('nothing to input search')
      }
      updateSearchParams(model.toLowerCase(), manuFacture.toLowerCase())
    }

    const updateSearchParams = (model:string, manuFacture:string)=>{
      const searchParams =new URLSearchParams(window.location.search)
    //  console.log(searchParams)
      if(model){
        searchParams.set('model', model)
      }else{
        searchParams.delete('model')
      }

      if(manuFacture){
        searchParams.set('manuFacture', manuFacture)
      }else{
        searchParams.delete('manuFacture')
      }

      const newPatName = `${window.location.pathname} ? ${searchParams.toString()}`
      
      router.push(newPatName)

    }
    
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchMenuFacture  manuFacture={manuFacture} setManuFacture={setManuFacture} />
            <SearchButton  className='sm:hidden'/>
        </div>

        <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          model={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton className='sm:hidden'/>
      </div>
       {/* <SearchButton className='max-sm:hidden'/> */}
        
    </form>
  )
}
export default Searchbar

