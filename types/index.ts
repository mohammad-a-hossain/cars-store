import { MouseEventHandler } from "react";
import function from './../app/page';

export interface customButtonProps{
    title:string;
    containerStyle ?: string;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?:string;
    rightIcon?:string ;
    isDiabled?: boolean;


}
export interface SearchMenuFactureProps{
    manuFacture:string,
    setManuFacture:(manuFacture:string) => void
}

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg:number;
    cylinders: number;
    displacement: number;
    drive:string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission:string;
    year: number;
}


export interface FilterProps{
 manuFacture?:string,
 model?: string;
 fuel?: string;
 year?: number;
 limit?:number;
}




export interface HomeProps{
    searchParams: FilterProps
}


export interface OptionProps{
   title:string;
   value:string;
}

export interface CustomFilterProps{
    title:string;
    options:OptionProps[] ;
    
    
    
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
    
}