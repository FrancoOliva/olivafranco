import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosPersonalesComponent } from './paginas/proyectos-personales/proyectos-personales.component';
import { MiniAplicacionesComponent } from './paginas/mini-aplicaciones/mini-aplicaciones.component';
import { CertificacionesComponent } from './paginas/certificaciones/certificaciones.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ProyectosPersonalesComponent,
    MiniAplicacionesComponent,
    CertificacionesComponent,
    SobremiComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    ProyectosPersonalesComponent,
    MiniAplicacionesComponent,
    CertificacionesComponent,
    SobremiComponent,
    InicioComponent
  ]
})
export class SeccionesModule { }
