import Image from 'next/image'
import {Hero} from '../Components/Hero'
import  Searchbar from '../Components/Searchbar'
import CustomFilter from '../Components/CustomFilter'
import { fetchCars } from '../lib'
import CarCard from '../Components/CarCard'




export default async function  Home() {
  const allCars = await fetchCars()
  console.log(allCars)
//const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars ;
 const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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
        <Searchbar/>
      

       <div className='home__filter-container'>
        <CustomFilter title="fuel"/>
        <CustomFilter year="year"/>
       </div>
     </div>
     {
     !isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>

        {allCars?.map((car) =>(
          <CarCard car={car}/> 
        ))
        }
          </div>
      
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
