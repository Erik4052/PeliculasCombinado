import { AbstractControl, ValidatorFn } from "@angular/forms";

export function capitalLetter(): ValidatorFn {
  return (control: AbstractControl):any => {
    const value = <string>control.value;
    if(!value){
      return;
    }
    if(value.length === 0) {
      return
    }

    const firstLetter = value[0];
    if(firstLetter !== firstLetter.toUpperCase()){
      return {
        capitalLetter: {
          message: 'First letter must be Uppercase'
        }
      };
    }

    return;
  }
}
