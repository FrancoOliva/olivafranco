import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './secciones/paginas/inicio/inicio.component';
import { MiniAplicacionesComponent } from './secciones/paginas/mini-aplicaciones/mini-aplicaciones.component';
import { ProyectosPersonalesComponent } from './secciones/paginas/proyectos-personales/proyectos-personales.component';
import { SobremiComponent } from './secciones/paginas/sobremi/sobremi.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'proyectos-personales',
    component: ProyectosPersonalesComponent
  },
  {
    path: 'mini-aplicaciones',
    component: MiniAplicacionesComponent
  },
  {
    path: 'info-personal',
    component: SobremiComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
