import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mini-aplicaciones',
  templateUrl: './mini-aplicaciones.component.html',
  styles: [
    `
      .text-decoration-none {
    text-decoration: none;
    }
    `
  ]
})
export class MiniAplicacionesComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  

  mostrarDialog() {
    this.display = true;
  }

  

}
