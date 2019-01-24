import {Component} from '@angular/core';
import {ToastController, ToastOptions} from "ionic-angular";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  types:Type[] = [];

  constructor(public toast: ToastController) {
    this.types.push(new Type("Cash", false, toast),new Type("Credit Card", false, toast),
      new Type("Check", false, toast),new Type("Write-Off", false, toast))
  }

}
export class Type {
  name:string;
  selected:boolean;
  toastOpt:ToastOptions;

  constructor(name:string, selected:boolean, public toast: ToastController){
    this.name = name;
    this.selected = selected;

  }
   showToast() {
    this.toastOpt = {
      message: "You chose to pay with " + this.name,
      duration: 2000
    };

    this.toast.create(this.toastOpt).present();
  }

}


