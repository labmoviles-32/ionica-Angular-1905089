import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "IVAN MARCELO", 
      "apellido": " RAMIREZ HNILICKA", 
      "matricula": "gffdfgdfg"
    },
    {
      "nombre": "SAMUEL", 
      "apellido": "SALAZAR LEAL", 
      "matricula": "sdfsdf"
    },
    {
      "nombre": "CLAUDIA YULIANA ", 
      "apellido": "MARES RODRÍGUEZ", 
      "matricula": "safdafdsf"
    },
    {
      "nombre": "ALONDRA BERENISE", 
      "apellido": "ZAMORA MORENO", 
      "matricula": "gfdgfd678"
    },
    {
      "nombre": "RODRIGO ANTONIO", 
      "apellido": "MARTINEZ MACIAS", 
      "matricula": "xcv5675"
    },
    {
      "nombre": "MANUEL FERNANDO", 
      "apellido": "RIVERA DE LEON", 
      "matricula": "cvfdg76"
    },
    {
      "nombre": "LUIS CARLOS", 
      "apellido": "HERNANDEZ RIVERA", 
      "matricula": "fgfdg5465"
    },
    {
      "nombre": "SAUL", 
      "apellido": "DAVILA GONZALEZ", 
      "matricula": "dsfd2"
    },
    {
      "nombre": "SANTIAGO ELIAM", 
      "apellido": "RAMIREZ GARCIA", 
      "matricula": "43242343fs"
    },
    {
      "nombre": "MIGUEL ANGEL", 
      "apellido": "SANCHEZ CARRILLO", 
      "matricula": "5345gfg"
    },
    {
      "nombre": "JOSE ANTONIO", 
      "apellido": "CANO JARAMILLO", 
      "matricula": "34df"
    },
    {
      "nombre": "JUAN FRANCISCO", 
      "apellido": "LOPEZ BARRIENTOS", 
      "matricula": "fgfdggdg4354355465"
    },
    {
      "nombre": "MIGUEL GIOVANNY", 
      "apellido": "VARGAS CANTU", 
      "matricula": "fdg34"
    },
    {
      "nombre": "ALEJANDRO", 
      "apellido": "BELTRAN ALVARADO", 
      "matricula": "ffsdf45gfdg5465"
    },
    {
      "nombre": "RICARDO ", 
      "apellido": "HERRERA ROMERO", 
      "matricula": "fdsf4"
    }, 
    {
      "nombre": "CRISTHIAN IOANNE ANGEL", 
      "apellido": "JUAREZ TOBIAS", 
      "matricula": "dsfdsfdfsdfdsf"
    }
  ]

  ngOnInit(): void {
  }

}
