import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alumnos-card',
  templateUrl: './alumnos-card.component.html',
  styleUrls: ['./alumnos-card.component.css']
})
export class AlumnosCardComponent implements OnInit {

  constructor(private http: HttpClient, private db: DatabaseService) { }

  ngOnInit(): void {
    /*
    FORMA 1: HTTP CLIENT.
    this.agregarAlumnoTarjeta().subscribe(res => {
      this.alumnos = res;
    })*/

    //FORMA 2: SERVICE.
    this.db.getAlumnoService().subscribe(res => {
      this.alumnos = res;
    })
  }

  alumnos: any = [  ]

  agregarAlumnoTarjeta(){
    return this.http.get('https://alumnos-32-49672-default-rtdb.firebaseio.com/alumnos/.json');
  }

  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";

  agregarAlumno(): void{
    var nuevoAlumno : any = {
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno
    }
    this.alumnos.push(nuevoAlumno); //funcion de typescript
  }

}