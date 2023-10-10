// Add date-fns library to handle date calculations easily
import {differenceInYears,differenceInCalendarMonths,differenceInCalendarDays,subDays} from 'date-fns';
/*
 get the DAY MONTH YEAR value from input 
 */

 const inputData = document.querySelectorAll('input[type=number]');
 const myYearsText = document.querySelector('.my-years') as HTMLElement;
 const myMonthsText = document.querySelector('.my-months') as HTMLElement;
 const myDaysText = document.querySelector('.my-days') as HTMLElement;
let currentYear  =new Date().getFullYear();

let year = currentYear;
let month = 1;
let day = 1;

// set max year
const maxYear = document.querySelector('[data-max-year]');
maxYear?.setAttribute('max',new Date().getFullYear().toString())
 Array.from(inputData).map((input)=>{
    input.addEventListener('change', async (e: Event) => {
       let target =  e.target as HTMLInputElement;
      if(target){
        if(target.name === 'day'){
            day=  parseInt(target.value) ;
        }else if(target.name === 'month'){
            month=  parseInt(target.value) - 1;
        }else if(target.name === 'year'){
            year= parseInt(target.value);
        }
      }


        console.log(year, month, day);
        if( year && month >= 0 && day >= 0){
            await currentAge.getAge(year,month,day);  
            // display data to the DOM  
            myYearsText.innerText =currentAge.CalculatedAge.years.toString();
            myMonthsText.innerText =currentAge.CalculatedAge.months.toString();
            myDaysText.innerText =currentAge.CalculatedAge.days.toString();
        }
       
    }) 
})

const currentAge = {
    CalculatedAge:{
        years:0,
        months:0,
        days:0,
        },
getAge(year,month ,day ){
    let myYears =differenceInYears( new Date() ,new Date(year, month, day));
    /****
     * Get diff b/w next years 
     * birthday and current date
     *  in months
     * */ 
    let myMonths =differenceInCalendarMonths(new Date((currentYear +1), month, day), new Date( ));
        /****
         * Get How many days its been since the number
         * day my birthday falls on
     * */ 
    let myDays =differenceInCalendarDays(   new Date(),  new Date(currentYear, (new Date().getMonth()), day));
    this.CalculatedAge.years = myYears;
    this.CalculatedAge.months = 12- myMonths;
    this.CalculatedAge.days =  myDays;
}

}

// ADD ERROR Handling for input numbers larger than min max values of input






