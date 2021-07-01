import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../interfaces/proyectos.interface';

@Component({
  selector: 'app-proyectos-personales',
  templateUrl: './proyectos-personales.component.html',
  styles: [
  ]
})
export class ProyectosPersonalesComponent implements OnInit {

  misProyectos: Proyectos[] = [
    {
      nombre: 'Hostel App',
      descripcion: `Permite registrar clientes, pagos, gastos, generar reportes diarios y tener un control de las habitaciones y sus camas.
                    Este proyecto fue desarrollado con Framework7 en el curso intensivo de 3 meses en Comunidad IT. 
                    Actualmente lo estoy desarrollando de nuevo pero con Angular.`,
      tecnologiasUtilizadas: 'Framework7, Firebase, Javascript.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
