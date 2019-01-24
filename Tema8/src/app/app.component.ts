import {Component, Input} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  inputNumber:number;
  formatedNumber:number = 0;
  constructor() {}
  formatNumber():void{
    this.formatedNumber = this.inputNumber;
  }

}

@Pipe({name: 'phoneNumber'})
export class PhoneNumber implements PipeTransform {
  transform(value: number): string {
    var figures:string[] = value.toString().split('');
    if(figures.length == 10) {
      return "(" + figures[0] + figures[1] + figures[2] + figures[3] + ") " + figures[4] + figures[5] + figures[6] + " " + figures[7] + figures[8] + figures[9];
    }else{
      return "Invalid number"
    }
  }
}



