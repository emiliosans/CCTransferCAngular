
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ICurrency } from '../models/currency';
import { IRates } from '../models/rates';
import { FixerService } from '../services/fixer.service';
import { JsonPipe } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-tabla-conversiones',
  templateUrl: './tabla-conversiones.component.html',
  styleUrls: ['./tabla-conversiones.component.scss']
})
export class TablaConversionesComponent implements OnInit {
  
   respuesta: ICurrency;

  constructor(private currencyRatesService: FixerService) { }

  ngOnInit() {
    this.currencyRatesService.getRates()
    .subscribe((response) => {
     this.guardaJSON(response);
    });
  }
  guardaJSON( respuesta : ICurrency){
   this.respuesta = respuesta;
  }
}
