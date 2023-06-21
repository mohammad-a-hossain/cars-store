'use client'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import {Hero} from '../Components/Hero'
import  Searchbar from '../Components/Searchbar'
import CustomFilter from '../Components/CustomFilter'
import { fetchCars } from '../lib'
import CarCard from '../Components/CarCard'
//import { HomeProps } from '../types'
import { fuels, yearsOfProduction } from '../mockData'
import {ShowMore} from '../Components/ShowMore'



export default  function Home(){

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  
 
  //search state
  const [manuFacture, setManuFacture ] = useState('')
  const [model, setModel] = useState('')

  // filter state
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)

  // pagination state
  const [ limit, setLimit] = useState(8)

  const getCars = async()=>{
    setLoading(true)
     try{
      const result = await fetchCars({
        manuFacture:manuFacture || '',
        year:year || 2022,
        fuel:fuel || '',
        limit:limit || 8,
        model:model || '',
      })

      setAllCars(result)
     }catch(error){

     }finally{
      setLoading(false)
     }  
  } 
  
  useEffect(()=>{
    console.log(manuFacture,year,fuel,limit,model)
    getCars()

  },[manuFacture,year,fuel,limit,model])
  
 

  
  //console.log(allCars)
//const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars ;
// const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
    <Hero/>
     <div className='mt-12 padding-x padding-y max-width' id='discover'>
       <div className='home__text-container' >
          <h1 className='text-4xl'>
            car catelogue
          </h1>
          <p> explore what you watn to see</p>
        
       </div>


       <div className='home__filters'>
        <Searchbar setManuFacture={setManuFacture} setModel={setModel}
          />
      

       <div className='home__filter-container'>
        <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
        <CustomFilter  title= "year" options={yearsOfProduction} setFilter={setYear} />
       </div>
     </div>
     {
     allCars.length > 0 ? (
        <section>
          <div className='home__cars-wrapper'>

        {allCars?.map((car,index) =>(
          <CarCard car={car} key={index}/> 
        ))
        }
          </div>
         
        { loading  && 
       ( <div className='mt-16 w-full flext-center'>
      <Image
          src='/my-loader.svg' 
          alt="loader"
          width={100}
          height={100}
          className='object-contain'
       />

        </div>)
       }

        <ShowMore 
        pageNumber={limit / 8} 
        isNext= {limit> allCars.length } 
        setLimit={setLimit}/>
        
        </section>
      ) : (
        <div>
          <h2>ops no car found </h2>
          <p> {allCars?.message}</p>
        </div>
      )
     }
     </div>
    </main>
  )
}
