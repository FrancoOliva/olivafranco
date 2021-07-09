import { Component, OnInit } from '@angular/core';

export interface Card {
  titulo: string;
  descripcion: string;
  btn: string;
  ruta: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
    `
    img {
      height: auto;
      width: 30rem;
    }
    `
  ]
})
export class InicioComponent implements OnInit {

  cards: Card[] = [
    {
      titulo: 'Proyectos Personales',
      descripcion: 'Actualmente estoy pasando una aplicación que desarrollé con Framework7 a Angular. Haciendo click en "Saber más..." vas a poder ver una descripción más detallada.',
      btn: 'Ver Proyectos',
      ruta: '/proyectos-personales'
    },
    {
      titulo: 'Aplicaciones Cursos Online',
      descripcion: 'Una sección en donde muestro todas las aplicaciones o "mini aplicaciones" desarrolladas con cursos online. Siempre que aprendo algo nuevo, lo aplico.',
      btn: 'Ver Aplicaciones',
      ruta: '/mini-aplicaciones'
    },
    {
      titulo: 'Certificaciones',
      descripcion: 'Proponerse algo, empezarlo y terminarlo, es muy importante para mi. Escuché y leí que estos "cartones" no sirven, pero en mi camino, son pequeños pasos.',
      btn: 'Ver Certificados',
      ruta: '/certificaciones'
    },
    {
      titulo: 'Información Personal',
      descripcion: 'Una sección sencilla en donde hay información más detalla de quién soy, qué conocimientos tengo, experiencia laboral y formas de contactarme.',
      btn: 'Saber más...',
      ruta: '/info-personal'
    }
  ];

  constructor() { }

  ngOnInit(): void {

    
  }

}
