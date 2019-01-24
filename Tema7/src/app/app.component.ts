import {Component} from '@angular/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  allSelected:string[] = [];
  masini:Masina[] = [];
  constructor(){
    this.masini.push(new Masina("Audi", false),new Masina("Dacia", false),
      new Masina("Mercedes", false),new Masina("Tesla", false))
  }

  returnAllSelected(){
    this.masini.forEach(masina => {
      if(masina.selected == true){
        if(masina.brand == "Dacia"){
          this.allSelected.push("DACIA - daca ai cap ia-ti altceva")
        }else{
          this.allSelected.push(masina.brand)
        }
      }
    }
    )
  }
}
export class Masina {
  brand:string;
  selected:boolean;

  constructor(brand:string, selected:boolean){
    this.brand = brand;
    this.selected = selected;
  }

}


