import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
