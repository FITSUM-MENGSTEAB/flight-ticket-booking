
import { FormGroup, FormControl, Validators } from '@angular/forms';



/***  Validate the passanger name to be all non numberic value  */
export function nameValidator( control : FormControl):{[s: string]: boolean}{
    let arrayOfletters =  control.value.split('')
      for(let elem of arrayOfletters){
        let value = parseInt(elem);
         if(!Number.isNaN(value)){
           return {'invalid': true}
         }
      }
    return null;
}

/**  Validate the flight tickets number to be all numeric */
export function numberOfTicketsValidator( control : FormControl):{[s: string]: boolean}{
    let value = parseInt(control.value);
    console.log(control.value, value);
         if(typeof(value) ==='number' && value>0){
             return null;
        }
        return {'invalid' : true}

}


/**  Validate the flight ID
 * First two digits alphabet
 * No special char is used
 */
export function  flightIdValidator( control : FormControl):{[s: string]: boolean}{
 let firstTwoDigit  = parseInt(control.value.slice(0,2));
 let specialCharactersFormat  = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

   if(!Number.isNaN(firstTwoDigit) && typeof(firstTwoDigit) ==='number' || specialCharactersFormat.test(control.value)
           || control.value.length<=6 || control.value.length>8){
            return {'invalid' : true}
        }
        else {
          return null;
        }



}

/**
 * Unique Id Generator function for data in localStorage
 */

export function unique_id() {
  return 'flight'+'_' + (
    Number(String(Math.random()).slice(2)) +
    Date.now()).toString(36).slice(6);
}


