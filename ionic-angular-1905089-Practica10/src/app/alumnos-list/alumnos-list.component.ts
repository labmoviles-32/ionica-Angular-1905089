import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../dbservice.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  constructor(private db : DbServiceService) { }

    alumnos : any = [];
    tester : any = [];

  ngOnInit(): void {
    this.db.getListAlumnos().subscribe(resp => {
      console.log(Object.values(resp));
      this.tester = Object.values(resp);
      console.log(this.tester);
      for(let test of this.tester){
        if(test != null){
          this.alumnos = this.alumnos.concat(test);
        }
      }
      console.log(this.alumnos);
    })
  }

  delete(obj : Object){
    console.log("opcion borrar");
    console.log(obj);
    console.log(Object.values(obj)[1]);

    this.db.getAlumnosDetail(Object.values(obj)[1]).subscribe(resp => {
      console.log(resp);
      console.log(Object.keys(resp).toString());

      let name = Object.keys(resp).toString();
      this.db.delAlumnos(name).subscribe(delresp => {
        console.log(delresp);
        if(delresp == null){
          console.log('Se borro algo ...');
          window.location.reload();
        }else{
          console.log('Fallo al borrar >:(');
        }
      });
    });
  }
}
