import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { AlumnosDetallesComponent } from './alumnos-detalles/alumnos-detalles.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosCardComponent } from './alumnos-card/alumnos-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    TabsComponent,
    AlumnosDetallesComponent,
    AlumnosCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule, 
    RouterModule, //Importamos el RoutesModule
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoutesModule] //Y lo exportamos para que todos los demás componentes lo tengan disponible.
})
export class AppModule { }