import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AlumnosDetallesComponent } from '../alumnos-detalles/alumnos-detalles.component';
import { AlumnosCardComponent } from '../alumnos-card/alumnos-card.component';
import { CommonModule } from '@angular/common';

const rutas: Routes = [
  { path: 'alumno-detalle/:index', component: AlumnosDetallesComponent },
  { path: 'Cards', component: AlumnosCardComponent},
  { path: 'Lista', component: AlumnosComponent},
  { path: 'Otros', component: AlumnosComponent},
  { path: "**", component: AlumnosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule] //Lo exportamos para que el NgModule tenga disponible esta biblioteca.
})
export class RoutesModule { }
