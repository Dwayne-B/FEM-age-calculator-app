// Add date-fns library to handle date calculations easily
import {differenceInYears,differenceInCalendarMonths,differenceInCalendarDays,subDays} from 'date-fns';
/*
 get the DAY MONTH YEAR value from input 
 */

 const inputData: NodeListOf<HTMLElement> = document.querySelectorAll('input[type=number]');
 const label = document.querySelectorAll('label') ;
 const dataContainer = document.querySelectorAll('.data-container');
 const myYearsText = document.querySelector('.my-years') as HTMLElement;
 const myMonthsText = document.querySelector('.my-months') as HTMLElement;
 const myDaysText = document.querySelector('.my-days') as HTMLElement;
let currentYear  =new Date().getFullYear();

let year = currentYear;
let month;
let day;

// set max year
const maxYear = document.querySelector('[data-max-year]');
maxYear?.setAttribute('max',new Date().getFullYear().toString())
 Array.from(inputData).map((input)=>{
    input.addEventListener('change', async (e: Event) => {
       let target =  e.target as HTMLInputElement;
      if(target){
        if(target.name === 'day'){
           if(parseInt(target.value) > 31 || parseInt(target.value) < 1){
            console.log('error',target.value);

            errorState();
           }else{
            console.log(target.value, currentYear);
            day=  parseInt(target.value) ;
           }
        }else if(target.name === 'month'){
            if(parseInt(target.value) > 12 || parseInt(target.value) < 1){
                errorState();
               }else{
                month=  parseInt(target.value) - 1;
               }
           
        }else if(target.name === 'year'){
            if(parseInt(target.value) < 1200 || parseInt(target.value) > currentYear ){
                errorState();
               }else{
                year= parseInt(target.value);
               }
          
        }
      }


        console.log(year, month, day);
        if( year < currentYear && (month > 0 || month < 12) && (day > 0 || day < 31) ){
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
const errorState = ()=>{
//  .error-border{
//     border-top:.5px solid var(--red);
// }
// .error-text{
//     color: var(--red);
// }
// .error-msg::after{
//     content:"";
//     color: var(--red);

// }

    // Set the css to reflect errors 
    Array.from(inputData).map((input )=>{
        input.classList.add("error-border", "error-text" ,"error-msg");
       // Create a new errorMsg for each input
    const errorMsg = document.createElement('span');
    errorMsg.innerText  = 'test';

    // Append the new errorMsg to the current input
    input.appendChild(errorMsg);


    })
    Array.from(dataContainer).map((cnt,i )=>{
        cnt.classList.add( "error-text" );
       // Create a new errorMsg for each input
    
    const msg = ['Must be a valid day', 'Must be a valid month', 'Must be in the past'];
    const errorMsg = document.createElement('small');
    errorMsg.innerText  = `${msg[i]}`;
    console.log(msg[i]);
    cnt.appendChild(errorMsg);

    // Append the new errorMsg to the current input



    })
    Array.from(label).map((label)=>{
        label.classList.add( "error-text");

    })


    console.log('error');
}