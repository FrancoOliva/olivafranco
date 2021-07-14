import { Component } from '@angular/core';


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
export class MiniAplicacionesComponent {

  display: boolean = false;

  mostrarDialog() {
    this.display = true;
  }

  

}
