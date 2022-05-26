import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service'; //Importamos el servicio.

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private http: HttpClient,
              private db: DatabaseService) { } //Creamos el elemento en el constructor.

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
  
  alumnos: any = [  ]

  getAlumnos(){
    return this.http.get('https://alumnos-32-49672-default-rtdb.firebaseio.com/.json')
  }

}
