import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TablaConversionesComponent } from './tabla-conversiones/tabla-conversiones.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tablaConversiones', component: TablaConversionesComponent },
  
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio'}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
