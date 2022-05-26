import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumnos-detalles',
  templateUrl: './alumnos-detalles.component.html',
  styleUrls: ['./alumnos-detalles.component.css']
})
export class AlumnosDetallesComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,
              private http: HttpClient,
              public actionSheetController: ActionSheetController,
              private db: DatabaseService) { }

  ngOnInit(): void {
    /*
    FORMA 1: HTTP CLIENT.
    this.getAlumnoDetalle(this.idBuscar).subscribe(res => {
      this.alumnoDetalle = res;
    })*/
    
    //FORMA 2: SERVICE.
    this.db.getAlumnoDetalleService(this.idBuscar).subscribe(res => {
      let alumno = Object.assign(res);
      this.alumnoDetalle = res;
      this.alumnoNuevosDatos = alumno;
    })
  }

  alumnoNuevosDatos: Alumno = {
    nombre: "",
    matricula: "",
    apellido: ""
  }

  editando = false;
  editar(){
    this.db.updateAlumno(this.idBuscar, this.alumnoNuevosDatos).subscribe(res =>{
      console.log(res)
    })
    this.editando = !this.editando; //Habilita edición.
  }

  guardar() {
    //Guardar cambios:
 
    this.editando = !this.editando; //Deshabilita edición.
  }

  alumnoDetalle: any = {}
  idBuscar: number = this.ruta.snapshot.params['index'];
  getAlumnoDetalle(id: number){
    return this.http.get('https://alumnos-32-49672-default-rtdb.firebaseio.com/alumnos/'+id+'.json')
  }

  /*alumnos: any = []
  matricula: string = this.ruta.snapshot.params['matricula'];
  getAlumnoDetalle(matricula: string): any {
    for(let i = 0; i < this.alumnos.length; i++){ //Ciclo para buscar alumno por matrícula.
      if(this.alumnos[i].matricula == this.matricula) { //Valida si la matrícula coincide en ese alumno.
        this.alumnoDetalle = this.alumnos[i]; //Asigna alumno a alumno detalle.
      }
    }
    return this.alumnoDetalle;
  }*/

  //Función para una action sheet:
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({ //Crea la action sheet.
      //Atributos:
      header: 'Albums',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Edit',
        icon: 'create-outline',
        handler: () => {
          this.editar();
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present(); //Presenta la action sheet.

    const { role, data } = await actionSheet.onDidDismiss(); //Elimina o "mata" la action sheet cuando se clicklea en cualquier parte.
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
