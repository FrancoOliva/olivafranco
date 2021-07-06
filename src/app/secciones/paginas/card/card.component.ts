import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../inicio/inicio.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() contenidoCards!: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
