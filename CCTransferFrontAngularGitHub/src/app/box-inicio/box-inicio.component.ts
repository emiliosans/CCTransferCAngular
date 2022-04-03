import { Component, OnInit } from '@angular/core';
import { bottom } from '@popperjs/core';

@Component({
  selector: 'app-box-inicio',
  templateUrl: './box-inicio.component.html',
  styleUrls: ['./box-inicio.component.scss']
})
export class BoxInicioComponent implements OnInit {

  mostrar:boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onClickMostrar(){
    this.mostrar = !this.mostrar;
  }
}

