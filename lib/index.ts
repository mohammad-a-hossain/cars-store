

export async function fetchCars(){
  const  headers= {
        'X-RapidAPI-Key': '57e8917956msh5ba96d6a4a8df1bp1b5808jsne23a4b4c51dc',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
  const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
    headers:headers
  })

    	const result = await response.json();
    	
      return result
  
   
    }

    export const CalculateCarRent=(city_mpg:number, year:number)=>{

            const basePricePerday = 50 
            const mileageFactor= 0.1
            const ageFactor = 0.05

            // calculate additional rate base and mileage 
            const mileageRate = city_mpg * mileageFactor 
            const ageRate = (new Date().getFullYear() - year) * ageFactor 

            // calculate total rental per day 

            const rentalRatePerDay= basePricePerday + mileageRate + ageRate  

        return rentalRatePerDay.toFixed(0)

    }

