import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private http : HttpClient) {}

  //#region GET

  getListAlumnos() {
    return this.http.get(environment.firebase.databaseURL+`/alumnos.json`);
  }
  getAlumnosDetail(id : string){
    return this.http.get(environment.firebase.databaseURL+`/alumnos.json?orderBy="matricula"&equalTo="`+id+`"`);
  }

  //#endregion

  //#region DELETE

  delAlumnos(id : string){
    console.log(id);
    return this.http.delete(environment.firebase.databaseURL+`/alumnos/`+id+`.json`);
  }

  //#endregion

  //#region POST

  postAlumno(objeto : Object){
    this.http.post(environment.firebase.databaseURL+`/alumnos.json`, objeto).subscribe(resp => {console.log(resp)});
  }

  //#endregion

  //#region UPDATE
  actualizar(obj : Object, index : string){
    let text = JSON.stringify(obj);
    return this.http.put(environment.firebase.databaseURL+`/alumnos/`+index+`.json`, text);
  }
  //#endregion
}
