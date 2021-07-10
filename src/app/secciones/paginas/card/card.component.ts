import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../inicio/inicio.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    
  ]
})
export class CardComponent implements OnInit {

  @Input() contenidoCards!: Card;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  verRuta(ruta:string){
    console.log('Ver nueva ruta');
    this.router.navigate([ ruta ]);
  }

}
