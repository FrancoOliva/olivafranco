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
      descripcion: `Permite registrar clientes, pagos, gastos, reportes diarios y tener un control de las habitaciones y sus camas.
                    Este proyecto fue desarrollado con Framework7 en el curso intensivo de 3 meses en Comunidad IT. 
                    `,
      tecnologiasUtilizadas: 'Framework7, Firebase, Javascript, HTML, CSS.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
