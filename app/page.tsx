import Image from 'next/image'
import {Hero} from '../Components/Hero'
import  Searchbar from '../Components/Searchbar'
import CustomFilter from '../Components/CustomFilter'

export default function Home() {
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
        <CustomFilter/>
        <CustomFilter/>
       </div>
     </div>
     </div>
    </main>
  )
}
