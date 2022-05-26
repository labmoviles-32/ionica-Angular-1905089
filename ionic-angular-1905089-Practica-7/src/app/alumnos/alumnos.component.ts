import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos : any = [
    /*{
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
    }*/
  ]
  
  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";

  agregarAlumnos() : void {
    if(this.nombreAlumno.length==0 || this.apellidoAlumno.length==0 || this.matriculaAlumno.length==0){
      alert("Complete todos los campos");
    }
    else{
      var nuevoAlumno : any = {
            //Propiedades del alumno
            "nombre" : this.nombreAlumno,
            "apellido" : this.apellidoAlumno,
            "matricula" : this.matriculaAlumno
          }
          this.alumnos.push(nuevoAlumno);
    }
  }

  ngOnInit(): void {
  }

}
