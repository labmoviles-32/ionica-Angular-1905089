import { Component, OnInit, Input } from '@angular/core';

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


  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";


  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno
    }

    //console.log(nuevoAlumno);

    this.alumnos.push(nuevoAlumno); //Funcion en TypeScript 
  }
}
