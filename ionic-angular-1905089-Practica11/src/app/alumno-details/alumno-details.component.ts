import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DbServiceService } from '../dbservice.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css']
})
export class AlumnoDetailsComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionSheetController: ActionSheetController, private db : DbServiceService, public formBuilder : FormBuilder) { }

  //alumnos : any = [] --Desuso

  alumnoDetalle: any = {}
  search : string = '';
  //matricula: string = this.ruta.snapshot.params['matricula']; --Desuso
  mat : string = this.ruta.snapshot.params['index'];
  editar: boolean = false;
  ionicForm!: FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
    //this.getAlumnoDetalle(this.matricula);
    console.log(this.mat);
    this.db.getAlumnosDetail(this.mat).subscribe(resp => {
      console.log(resp);
      this.alumnoDetalle = Object.values(resp)[0];
      this.search = Object.keys(resp).toString();
      /*console.log(this.alumnoDetalle);
      console.log(this.alumnoDetalle.nombre);
      console.log(this.alumnoDetalle.matricula);
      console.log(this.alumnoDetalle.apellido);*/
    })
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      matricula: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
  
  regresar(){
    window.location.href='/lista';
  }

  eliminar(){
    console.log(this.search);
    this.db.delAlumnos(this.search).subscribe(resp => {
      if(resp == null){
        console.log('Borro algo...');
        window.location.href="/lista";
      }else{
        console.log('No se logro borrar >:(');
      }
    });
  }

  toggleEdit(){
    this.editar = !this.editar;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      this.db.actualizar(this.ionicForm.value, this.search).subscribe(res => {
        console.log(res);
      })
      window.location.href="/lista";
      return true;
    }
  }

  agregarFavoritos(): void {
    //algo
  }

  async abrirActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'mi-action-sheet',
      mode: 'ios',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete');
          this.eliminar();
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Enviar por correo',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          this.agregarFavoritos();
          //console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
