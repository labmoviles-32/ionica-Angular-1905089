import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service'; //Importamos el servicio.
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private http: HttpClient,
              private db: DatabaseService,
              private ruta: ActivatedRoute) { } //Creamos el elemento en el constructor.

  ngOnInit(): void {
    /*
    FORMA1: CON HTTP CLIENT.
    this.getAlumnos().subscribe(res => {
      this.alumnos = res;
    })*/
    
    //FORMA 2: CON SERVICIO.
    this.db.getAlumnoService().subscribe(res => {
      this.alumnos = res;
    })
  }

  id: number = this.ruta.snapshot.params['index'];
  
  alumnos: any = [  ]

  alumnoNuevosDatos: any = {
    nombre: "",
    matricula: "",
    apellido: ""
  }
  
  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";

  getAlumnos(){
    return this.http.get('https://ionic-angular-lapp-1958339-default-rtdb.firebaseio.com/alumnos/.json')
  }
  
  guardar(): void {
    this.db.updateAlumno(this.id, this.alumnoNuevosDatos).subscribe(res =>{
      console.log(res)
    })
  }
  
  borrar(id: number): void {
    this.db.deleteAlumno(id).subscribe(res=> {
      alert("Alumno eliminado.")
    })
  }


  like(): void {
    console.log("¡Like!");
  }

  editando = false;
  editar(): void {
    this.editando = !this.editando;
  }
}
