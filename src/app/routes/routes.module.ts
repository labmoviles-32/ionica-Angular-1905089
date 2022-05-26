import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AlumnosListComponent } from '../alumnos-list/alumnos-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoDetailsComponent } from '../alumno-details/alumno-details.component';

const rutas: Routes = [
  {path: 'inicio', component: AlumnosComponent},
  {path: 'lista', component: AlumnosListComponent},
  {path: 'alumno-details/:index', component: AlumnoDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class RoutesModule { }
