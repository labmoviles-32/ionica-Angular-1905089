import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { TabsComponent } from './tabs/tabs.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoDetailsComponent } from './alumno-details/alumno-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    TabsComponent,
    AlumnosListComponent,
    AlumnoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutesModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }
