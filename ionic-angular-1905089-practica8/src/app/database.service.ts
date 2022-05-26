import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getAlumnoService(){ //En este caso, esta función nos simplifica el procedimiento porque así no tengo que crear una función con HTTP Client para cada componente, puedo usar ésta directamente con el service.
    return this.http.get('https://alumnos-32-49672-default-rtdb.firebaseio.com/alumnos/.json')
  }

  getAlumnoDetalleService(id: number){
    return this.http.get('https://alumnos-32-49672-default-rtdb.firebaseio.com/alumnos/'+id+'.json')
  }

}
