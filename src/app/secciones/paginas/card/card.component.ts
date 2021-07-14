import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../inicio/inicio.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    
  ]
})
export class CardComponent{

  @Input() contenidoCards!: Card;

  constructor( private router: Router ) { }

  verRuta(ruta:string){
    console.log('Ver nueva ruta');
    this.router.navigate([ ruta ]);
  }

}
