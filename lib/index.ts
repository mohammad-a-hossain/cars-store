

export async function fetchCars(){
  const  headers= {
        'X-RapidAPI-Key': '57e8917956msh5ba96d6a4a8df1bp1b5808jsne23a4b4c51dc',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
  const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
    headers:headers
  })

    	const result = await response.json();
    	
      return result
  
   
    }


