
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ICurrency } from '../models/currency';
import { IRates } from '../models/rates';
import { FixerService } from '../services/fixer.service';

@Component({
  selector: 'app-tabla-conversiones',
  templateUrl: './tabla-conversiones.component.html',
  styleUrls: ['./tabla-conversiones.component.scss']
})
export class TablaConversionesComponent implements OnInit {
  
   currencies: ICurrency[] = [];
   cosas: ICurrency[] = [];
   cosas2: IRates[];
   propiedades: string[];
   AllData_Arr = [];
  constructor(private currencyRatesService: FixerService) { }

   ngOnInit() {
    this.currencyRatesService.getRates()
    .subscribe((response) => {

     
    this.guardaArray(JSON.parse(JSON.stringify(response)));
  });


 
  }
  guardaArray(monedas: ICurrency[]){
    //monedas.forEach(m=> this.currencies.push(m));
    //this.cosas2 = monedas;
   this.cosas = Object.values(monedas);
   this.propiedades = Object.getOwnPropertyNames(monedas);
   this.cosas.forEach(p=>console.log(p));

  // this.cosas2 = p.rates;
   this.cosas.forEach(p=> {
     this.cosas2.push(p.rates);
   });


   for (let i=0; i<this.cosas.length; i++){
     
   }
   //this.cosas2 = [...this.cosas[4]];
    this.currencies = monedas;
    console.log("desde la funcion");
    console.log(this.currencies);
  }

  

}
