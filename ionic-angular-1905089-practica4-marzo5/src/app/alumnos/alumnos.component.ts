import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    },
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    },
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    },
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    },
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    },
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    },
    {
      "nombre": "Cristhian", 
      "apellido": "Juarez", 
      "matricula": "1905089"
    }
  ]

  ngOnInit(): void {
  }

}
