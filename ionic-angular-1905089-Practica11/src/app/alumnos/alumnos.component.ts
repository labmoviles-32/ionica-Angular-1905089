import { Component, OnInit, Input } from '@angular/core';
import { DbServiceService } from '../dbservice.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private db : DbServiceService, public formBuilder : FormBuilder) { }

  alumnos : Alumno[] = []
  AltaForm!: FormGroup;
  isSubmitted = false;
  
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
    this.AltaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      matricula: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  /*Subir(postData : {"nombre" : string, "apellido" : string, "matricula" : string}) {
    this.db.postAlumno(postData);
  }*/

  SubirForm(){
    this.isSubmitted = true;
    if (!this.AltaForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.AltaForm.value);
      this.alumnos = this.alumnos.concat(this.AltaForm.value);
      this.db.postAlumno(this.AltaForm.value);
      this.AltaForm.reset();
      return true;
    }
  }

}
