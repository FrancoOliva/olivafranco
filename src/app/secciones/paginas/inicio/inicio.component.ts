import { Component, OnInit } from '@angular/core';

export interface Card {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
    `
    a {
      text-decoration: none;
    },
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
      descripcion: 'Esta parte hay que completarla con la descripción de la carta.'
    },
    {
      titulo: 'Proyectos Personales',
      descripcion: 'Esta parte hay que completarla con la descripción de la carta.'
    },
    {
      titulo: 'Proyectos Personales',
      descripcion: 'Esta parte hay que completarla con la descripción de la carta.'
    },
    {
      titulo: 'Proyectos Personales',
      descripcion: 'Esta parte hay que completarla con la descripción de la carta.'
    }
  ];

  constructor() { }

  ngOnInit(): void {

    
  }

}
